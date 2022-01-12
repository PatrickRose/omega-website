import * as argon2 from "argon2"
import {isLeft} from 'fp-ts/lib/Either'
import {withIronSessionApiRoute} from 'iron-session/next'
import {NextApiRequest, NextApiResponse} from 'next'
import {sessionOptions} from '../../lib/session'
import {getUserRepo} from '../../server/repository/user'
import {hashPassword} from "../../server/repository/user/argon"
import {DEFAULT_PASSWORD} from "../../server/repository/user/consts"
import {LoginFormValuesDecode} from '../../types/io-ts-def'
import {LoginFailed, User} from '../../types/types'

export default withIronSessionApiRoute(loginRoute, sessionOptions);

async function loginRoute(req: NextApiRequest, res: NextApiResponse<User | LoginFailed>) {
    const body = await req.body;

    if (!LoginFormValuesDecode.is(body)) {
        res.status(400).json({
            message: 'Invalid request body - missing either username or password'
        });
        return;
    }

    const password = body.password;

    const userRepoBase = getUserRepo();
    if (isLeft(userRepoBase)) {
        res.status(500).json({
            message: (`Database was not set up correctly - please contact the webmaster: ${userRepoBase.left}`)
        });
        return;
    }

    const userRepo = userRepoBase.right;

    const user = await userRepo.get(body.username);

    // We create a hash here, so that we're always verifying a hash - though we know this will fail in the
    // "We don't have a user" case
    // There will be a timing difference in the two paths since the "No user" case will have to generate
    // a hash, which potentially opens us up to a timing attack to leak the existence of a user but:
    // a) An attacker would still have to deal with the argon verification hash in all cases, so it should
    //    be infeasible for them to bruteforce the existence of a user
    // b) That just tells you that the user exists - you'd still have to get the password out (which has
    //    the argon2 protections)
    // c) The data you get out of this is the OMEGA games list, which is a low value target anyway
    // TODO: Add rate limiting
    const dbHash = isLeft(user) ? (await hashPassword(body.password + 'ALWAYS FAIL')) : user.right.password;

    let loggedIn = false;

    try {
        loggedIn = await argon2.verify(dbHash, password);
    } catch (e) {
        console.log(e);
    }

    let passwordNeedsReset = false;

    if (!isLeft(user)) {
        passwordNeedsReset = user.right.passwordNeedsReset;
    }

    if (password == DEFAULT_PASSWORD) {
        passwordNeedsReset = true;
    }

    const userSession: User = loggedIn
        ? {isLoggedIn: true, login: body.username, passwordNeedsReset: passwordNeedsReset}
        : {isLoggedIn: false, login: '', passwordNeedsReset: false};

    try {
        if (loggedIn) {
            req.session.user = userSession;
            await req.session.save();
        } else {
            res.status(401);
        }

        res.json(userSession);
    } catch (error) {
        res.status(500).json({
            message: (error as Error).message
        });
    }
}
