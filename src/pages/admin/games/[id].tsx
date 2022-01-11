import React, {useState} from "react";
import useUser from "../../../lib/useUser";
import {Hero, HeroHeading, MainContent} from "../../../components/Hero";
import {FormikHelpers, FormikValues} from "formik";
import {SuccessMessage} from "../../../components/Form";
import {EditGameResultDecode, PlayByEmailGameDecode} from "../../../types/io-ts-def";
import {MakeLeft} from "../../../utils/io-ts-helpers";
import {isLeft} from "fp-ts/Either";
import {ReactNode} from "react-markdown";
import Link from "next/link";
import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from "next";
import GamesRepository, {getGamesRepo} from "../../../server/repository/games";
import {NoMatch} from "../../../components/NoMatch";
import {GameAdmin} from "../../../components/Form/Game";
import {EditGameFormValues, EditGameResult} from "../../../types/types";

type SuccessMessage = {
    message: string,
    node?: ReactNode
}

export default function SingleGame({game: props}: Partial<InferGetStaticPropsType<typeof getStaticProps>>) {
    // If the user isn't logged in, send them to the admin page
    const {user} = useUser({
        redirectTo: '/admin/login',
    });

    const [successMessage, setSuccessMessage] = useState<SuccessMessage>({message: ''});

    // It's possible for this to be undefined if the user hasn't logged in yet
    // Since we have to wait for the api response, make sure this returns an empty page
    if (!user?.isLoggedIn) {
        return <MainContent><p>Loading admin page</p></MainContent>
    }

    if (!props) {
        return <MainContent><p>Loading game, please wait...</p></MainContent>
    }

    if (isLeft(props)) {
        return <NoMatch/>
    }

    const game = props.right;

    const initialValues: EditGameFormValues = {
        name: game.name,
        designer: game.designer,
        preamble: game.preamble,
        fullDescription: game.fullDescription,
        type: game.type,
        endDate: {
            year: PlayByEmailGameDecode.is(game) ? game.endDate.year : game.date.year,
            month: PlayByEmailGameDecode.is(game) ? game.endDate.month : game.date.month,
            day: PlayByEmailGameDecode.is(game) ? game.endDate.day : game.date.day,
        },
        date: {
            year: game.date.year,
            month: game.date.month,
            day: game.date.day
        },
    };

    const onSubmit = async (values: FormikValues, {setSubmitting, setErrors}: FormikHelpers<EditGameFormValues>) => {
        try {
            setSuccessMessage({message: ''});

            const postValues = values;

            const outerKeys: (keyof EditGameFormValues)[] = ['date', 'endDate'];
            const innerKeys: (keyof EditGameFormValues['date'])[] = ['day', 'month', 'year'];

            for (let key of outerKeys) {
                if (!postValues[key]) {
                    continue;
                }

                for (let innerKey of innerKeys) {
                    postValues[key][innerKey] = Number.parseInt(postValues[key][innerKey]);
                }
            }

            const response = await fetch(
                `/api/games/${game._id}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify(postValues)
                }
            );

            let data: EditGameResult;

            try {
                const origData = await response.json();

                if (EditGameResultDecode.is(origData)) {
                    data = origData;
                } else {
                    data = MakeLeft({
                        result: "Failure",
                        message: `Error when sending API request (unknown API result - ${origData})`
                    })
                }
            } catch (e) {
                data = MakeLeft({
                    result: "Failure",
                    message: 'Error when sending API request, please wait and try again'
                })
            }

            if (isLeft(data)) {
                setErrors({name: data.left.message});
            } else {
                setSuccessMessage({
                    message: data.right.message,
                    node: <><Link href={`/games/${data.right.game._id}`}><a>You may view this game here</a></Link>.
                        Please note that some caching is in place, so you might need to wait 60 seconds to see your
                        changes propagate</>
                });
            }
        } finally {
            setSubmitting(false);
        }
    }


    return <React.Fragment>
        <Hero>
            <HeroHeading>
                Edit {game.name}
            </HeroHeading>
        </Hero>
        <MainContent>
            <GameAdmin onSubmit={onSubmit} initialValues={initialValues} successMessage={successMessage}
                       buttonText={`Edit ${game.name}`}/>
        </MainContent>
    </React.Fragment>
}


type EditGameProps = {
    // This should match whatever the games repository returns
    game: Awaited<ReturnType<GamesRepository["get"]>>
};

export const getStaticProps: GetStaticProps<EditGameProps> = async (context) => {
    const id = context?.params?.id;

    if (typeof id != 'string') {
        throw Error(`Should not have called this page without a string. Params were: ${context?.params}`);
    }

    const gamesRepo = getGamesRepo();

    if (isLeft(gamesRepo)) {
        return {
            props: {
                game: MakeLeft(false)
            }
        }
    }

    const game = await gamesRepo.right.get(id);

    return {
        props: {game},
        revalidate: 60
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        // Don't pre-build any pages
        paths: [],
        fallback: true,
    }
}



