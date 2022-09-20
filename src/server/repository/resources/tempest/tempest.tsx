import React from "react";

import {Footnote, GameImage} from "../../../../components/DesignerResource";

import gameLogo from "./game-logo.png"
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.png";
import image5 from "./image5.jpg";
import image6 from "./image6.png";
import image7 from "./image7.jpg";
import image8 from "./image8.jpg";
import image9 from "./image9.jpg";
import image10 from "./image10.jpg";


function TableHeader({children, scope}: { children: React.ReactNode, scope?: 'col' | 'row' }) {
    return <th className="border-omega-dark border p-2" scope={scope ?? 'col'}>
        {children}
    </th>
}

function TableCell({children}: { children?: React.ReactNode }) {
    return <td className="border-omega-dark border p-2">
        {children}
    </td>
}

function Quote({children}: { children: React.ReactNode }) {
    return <div className="text-center italic">
        {children}
    </div>
}

export default function Tempest() {
    let footnoteCount = 1;

    return <React.Fragment>
        <div className="text-center">
            <GameImage image={gameLogo}
                       alt="Tempest Game Logo. Reads 'A game of exploration, adventure, politics and horror'"/>
            <Footnote name={footnoteCount++}>
                Logo made using Canva, which is a great tool for quick and dirty work that looks alright!
            </Footnote>
        </div>

        <h2 className="text-2xl">
            Introduction
            <Footnote name={footnoteCount++}>
                This intro is in two parts, thematic and practical. The &apos;hook&apos; and the explanation. Here
                I&apos;m trying to explain the core of the game; what the game is about. Tempest&apos;s exploration
                focus helps make this obvious but other game blurbs do a good job too.
            </Footnote>
        </h2>

        <p className="italic">
            For as long as any can remember, the Maelstrom has been impassable, wracked by impossible, immobile storms.
            Yet it was not always so, and occasionally a brave or foolhardy sailor takes a vessel into the Maelstrom.
            Few return, and fewer return whole, but those rare few who do come bearing strange treasures and stranger
            stories.
        </p>

        <p className="italic">
            The unnatural storms receded a few weeks ago. Cautiously, the powers that neighbour this sea sent ships to
            explore. They came back. It seems the forbidden, impassable sea is open – at least for now – but what waits
            out there in the uncharted waters?
        </p>

        <p>
            In this game players will belong to one of three nations that bordered the Maelstrom. These nations have
            little-to-no knowledge of one another or whatever awaits within the former Maelstrom. As players, you will
            learn the secrets of the Maelstrom, your own nation and others, and together you will decide their fates.
        </p>

        <p>
            Once cast, players will receive a large handbook with relevant information about their nation - its history,
            culture, classes, and conflicts - as well as a personal briefing. With Control support, players will take
            the character concept they have been assigned and customise it to their liking.
        </p>

        <p>
            Unlike most previous play by email games, no characters or setting details beyond those in this rulebook
            will be revealed in advance. The sea holds many secrets and dead men tell no tales.
        </p>

        <p>
            As a play by email game, this game will be split between players communicating via email and using a
            custom-built app, CANDI, to submit weekly actions. You will be invited to CANDI where a custom profile will
            await you pregame.
        </p>

        <h3 className="text-2xl">
            Actions
        </h3>

        <Quote>
            “Act as if what you do makes a difference. It does.”
            <Footnote name={footnoteCount++}>
                I added quotes for theme/pretentiousness reasons. Art is to make it look nicer and weirdly more
                professional.
            </Footnote>
        </Quote>


        <GameImage image={image3} alt=""/>

        <p>
            Each turn, you tell the Control team what you want to try and accomplish. This is done by submitting Actions
            (written summaries of what you are hoping to achieve and how). These Actions will be submitted and managed
            via our online system CANDI. The deadline for submitting your Actions is at <strong>1am Saturday BST/8pm
            Friday EDT</strong>
            <Footnote name={footnoteCount++}>
                So much calculation goes into these, aiming for a time near to when people can expect to be awake. Now,
                few Brits are up at 1am, even on a Friday, but it means they can do last minute deciding. Americans are
                home from work (hopefully) and have time to think here too. Over in the Pacfic it&apos;s 8am, which is
                too early for me but you could get up, check emails and do a last minute decision.
                <br/>
                <br/>
                You could also just be lazy and pick a time that suits you, the Control.
            </Footnote>
            . The results of actions are usually shared late on Sunday. There is no set time, as some weeks Control will
            be busier than others, but we will try to release results as soon as possible. Control will roll the
            relevant dice and determine the outcome. Once you have received your results the next turn of the game
            begins. Each turn lasts one week, both in and out of game.
        </p>

        <p>
            Each turn, players have 3 Effort dice they can split between 1-3 Actions. In addition you will receive a
            special ‘free’ exploration Action each turn. This will be detailed later.
            <Footnote name={footnoteCount++}>
                Approx 2 Actions is the ideal for a PBEM. 1 Action is too few to get anything done and and HURTS when
                that fails. 3 is a lot for Control if everyone is doing it.
                <br/>
                <br/>
                Nonetheless, I love the flexibilty ths system offers. It lets you go ALL IN or spread yourself wider.
                The effort system requires careful calibration to ensure it&apos;s not always mechanically optimal to go
                3 actions. In this game, Effort dice making consequences less likely gently encourage stacking, and the
                more successes (3 or higher) you roll the bigger the success, meaning smaller but more powerful actions
                are encouraged but not essential.
            </Footnote>
        </p>

        <h3 className="text-2xl">
            Rules Summary
            <Footnote name={footnoteCount++}>
                A lot of players do not read rules, or skim them once then ask questions easily answered by the
                rulebook... or make assumptions, often to their detriment, as a result. To that end I tried to do an
                extra short and simple explanation for their benefit and basically said they
                don&apos;t <strong>have</strong> to read the full rules.
            </Footnote>
        </h3>

        <p>
            This game uses d6s, rolled each weekend by Control. There are four types of positive dice: Effort, Traits,
            Assets, and Arcane. As a general rule of thumb, adding more of these dice into an Action means that the
            Action is more likely to succeed. Rolling low on a Trait, Asset, or Arcane die can lead to a complication in
            addition to any successes you get, but it&apos;s a risk that is often worth taking.
        </p>

        <p>
            You can add up to three Trait/Asset/Arcane dice to each action you submit. You cannot use a specific
            Trait/Asset/Arcane die on more than one Action per turn.
        </p>

        <p>
            Each roll of 3 or higher is deemed a success. Multiple successes lead to greater rewards in line with a
            resolution table. This table is for internal use only by Control. If you roll no successes, your Action can
            fail.
        </p>

        <p>
            One complication<Footnote name={footnoteCount++}>
            The word <em>complication</em> was a last minute change from <em>consequence</em> as it sounds less severe
            and scary.
        </Footnote> you may also receive Injury dice throughout the game (for example, a sprained ankle). These are
            often time-limited, but will be automatically included in <strong>relevant</strong> Actions while they last
            at Control’s discretion. They do not affect your chances of succeeding, but do gently increase the odds of
            complications when they roll badly. To use the example of the sprained ankle, for an Action that did not
            involve physical exertion this would likely not be applied. Injuries will also be soft capped to ensure
            Injury dice do not simply beget further Injury dice. There is a cap on how many Injuries a player can
            receive.
        </p>

        <p>
            Players can coordinate to perform Actions together. This may make it more likely for you to succeed in a
            shared goal but will not affect your individual rewards and complications.
        </p>

        <p>
            Those are the basic rules of how the dice work. We will now go into full detail but you do not have to read
            this if you find rules too boring or confusing. You can skip to the Exploration section.
        </p>

        <h3 className="text-2xl">
            Full Rules
            <Footnote name={footnoteCount++}>
                The full rules are important, though. Some people care and it&apos;s especially important for things
                like &apos;what happens in a PVP draw&apos;
                <br/>
                <br/>
                They may also inspire other future creators. Showing thought for things like edge cases and such is
                important!
            </Footnote>
        </h3>

        <h4 className="text-xl">
            Dice Types
            <Footnote name={footnoteCount++}>
                The logic behind this system was to decouple success/failure for consequences.
                <br/>
                <br/>
                The previous (d10) system had them tied together. a 10 would be a huge success with no consequence, a 5
                a small success with a medium consequence and a 1 a failure with a nasty consequence.
                <br/>
                <br/>
                In practise, this meant consequences got smaller and rarer and success greater as the game went on. I
                quite like this - a strong sense of levelling up - but for this game we&apos;re trying something new and
                decoupling them to allow for a more varied and interesting probability space. Also I love that in this
                system you want to roll high and low.
            </Footnote>
        </h4>

        <p>
            Dice have specified types (<strong>Effort</strong>, <strong>Trait/Asset</strong>, <strong>Injury</strong>,
            and <strong>Arcane</strong>) which can affect the complications you receive (see table below).
        </p>

        <p>
            When the dice are rolled they are rolled as a pool, with every result of 3-6 counting as a success (with the
            exception of Injury dice). Control will then look for the <strong>Lowest Point</strong>; whichever die has
            the <strong>lowest</strong> value. Your Lowest Point determines if your action has any complications.
        </p>

        <p>
            In the event that lowest dice are tied, the tie will be broken as follows. If a dice type is more common
            among the lowest dice, that takes effect. If the number of dice of the same value is equal, for the purposes
            of determining complications, Effort dice take precedence, then Injury dice, then Arcane dice, then
            Trait/Asset dice.
        </p>

        <p>
            Combining Effort increases your chances of success and reduces the odds of complications, but means you have
            fewer Actions each turn. In addition, rolling multiple successes (i.e. more non-injury dice that rolled 3+)
            will lead to greater rewards. <strong>It is possible to fail entirely if you roll only 1s and 2s</strong>,
            which may be with or without complication. Please see the examples section below.
        </p>

        <table className="w-full border-collapse border">
            <thead>
                <tr>
                    <TableHeader>
                        Dice type
                    </TableHeader>
                    <TableHeader>
                        What is it?
                    </TableHeader>
                    <TableHeader>
                        If it is your Lowest Point...
                    </TableHeader>
                    <TableHeader>
                        Other notes
                    </TableHeader>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <TableHeader scope="row">
                        Effort
                    </TableHeader>
                    <TableCell>=
                        Your core three Effort.
                    </TableCell>
                    <TableCell>
                        No complications (except in exceptional circumstances; see ‘Attempting the Impossible’ below).
                    </TableCell>
                    <TableCell>
                        You can never gain or lose Effort.
                    </TableCell>
                </tr>
                <tr>
                    <TableHeader scope="row">
                        Trait/Asset
                    </TableHeader>
                    <TableCell>
                        Any positive trait - such as an ally, crew, skill, item, title or favour - falls under this
                        category. If it can be loaned it is an Asset.
                    </TableCell>
                    <TableCell>
                        Trait/Asset dice, if lowest, lead to a complication.
                    </TableCell>
                    <TableCell/>
                </tr>
                <tr>
                    <TableHeader scope="row">
                        Arcane
                    </TableHeader>
                    <TableCell>
                        <p>
                            A magical, supernatural or otherwise unusual ability or object.
                        </p>
                        <p>
                            If it can be loaned it is also an Asset.
                        </p>
                    </TableCell>
                    <TableCell>
                        Arcane dice, if lowest, lead to a complication. These are more likely to be chaotic and severe.
                    </TableCell>
                    <TableCell>
                        <strong>1s and 6s count double on Arcane dice</strong>; they are more likely to give strong
                        successes and more likely to be your Lowest Point.
                    </TableCell>
                </tr>
                <tr>
                    <TableHeader scope="row">
                        Injury
                    </TableHeader>
                    <TableCell>
                        Poor rolls may cause Injuries. They may be literal wounds, psychological trauma, demoralised
                        crew, bruised reputations, etc. These last for a specified number of turns.
                    </TableCell>
                    <TableCell>
                        Your Injuries cause a complication.
                    </TableCell>
                    <TableCell>
                        Injury dice are automatically included in all relevant actions, and <strong>cannot provide
                        successes</strong>.
                        They only count for determining the Lowest Point.
                    </TableCell>
                </tr>
            </tbody>
        </table>

        <h5 className="text-lg">
            Applying Dice to Actions
        </h5>

        <p>
            After applying 1-3 Effort, Trait, Asset, and Arcane dice can be assigned to Actions to improve the odds of
            securing a success. For each Trait, Asset or Arcane die put towards an Action, an additional die will be
            rolled. <strong>A maximum of 3 Trait/Asset/Arcane dice can be put towards any Action</strong>
            <Footnote name={footnoteCount++}>
                Gotta have a upper limit to stop lucky players breaking away. Factor this into how much you give and how
                often. Players shouldn&apos;t be able to max out everything until near the end.
            </Footnote>. There is no requirement for any such dice to be attached to an Action. However, Traits, Assets,
            and Arcane abilities need to be relevant/helpful for the additional dice to be rolled - this can be
            explained in your description of the Action. <strong>Control may reject a Trait/Asset/Arcane die if its use
            is not explained and/or does not make sense</strong>
            <Footnote name={footnoteCount++}>
                Boring but important rule!
            </Footnote>
            . While we encourage creative use of Traits, Assets, and Arcane abilities, the decision of the Control
            resolving the Action what is relevant or not is final.
        </p>

        <p>
            <strong>
                Each Trait, Asset, or Arcane die may only be applied to one Action per turn.
            </strong>
        </p>

        <p>
            Assets are things that can be given to other players, such as objects, and can be loaned to another player
            using the CANDI interface. Traits cannot be loaned to other players and are specific to you, for example a
            skill or physical ability. <strong>In terms of dice rolled there is no difference between a Trait or an
            Asset.</strong>
        </p>

        <h4 className="text-xl">
            Attempting the Impossible
            <Footnote name={footnoteCount++}>
                Sadly an important section, as it happens sometimes. It&apos;s kind of covering yourself and warning
                players to expect consequences for their craziest shenanigans.
            </Footnote>
        </h4>

        <p>
            It is possible players may attempt to do something literally impossible. If so, no matter how many successes
            are rolled, you cannot achieve your end. Control will try to resolve your Action and give rewards as best
            they can.
        </p>

        <p>
            In addition, some Actions may be so dangerous, controversial or unwise that it would break credibility not
            to receive some sort of complication regardless of dice rolled. We advise you not to worry too much about
            this; these Actions have, in previous play-by-email games, been extremely rare and unusual. A classic
            example of such an Action is jumping into molten rock.
        </p>

        <GameImage image={image2} alt=""/>

        <h4 className="text-xl">
            Unexpected Outcomes
            <Footnote name={footnoteCount++}>
                More covering myself, based on real experiences from other games which often made players
                confused/annoyed.
            </Footnote>
        </h4>

        <p>
            Sometimes you may get a very, very unexpected outcome from your Action resolution. Usually this is due to
            imperfect information or assumptions. In these cases Control may correct your information, offer consolation
            prizes or similar (when possible and logical) when resolving the Action.
        </p>

        <p>
            Another common cause of unusual outcomes is when two players <em>think</em> they’ve agreed a plan of action
            and then both mention they’re working together only to describe entirely different actions. Control will do
            their best with these actions but will try not to contradict what a player has written unless entirely
            necessary.
        </p>

        <h4 className="text-xl">
            Action Examples
            <Footnote name={footnoteCount++}>
                Examples are always good!
            </Footnote>
        </h4>

        <h5 className="text-lg">
            Example 1: Failure (without complication)
        </h5>

        <p>
            The Gentleman Thief is trying to steal the Eye of the World from the Museum of Time. Their player assigns a
            single Effort and no Traits. When Control resolves the Action they roll a single 2. This is not a success so
            the Gentleman Thief does not succeed. The lowest dice rolled was an Effort die so there are no
            complications; the Gentleman Thief is spooked by a guard and makes a quick getaway before they are
            discovered.
        </p>

        <h5 className="text-lg">
            Example 2: Success (with complication)
        </h5>

        <p>
            In this example the Gentleman Thief used one Effort and three Trait/Asset dice (Peerless Burglar, Thief’s
            Tools and Royal Favour). Royal Favour is rejected by Control as it is not obviously relevant and is not
            properly justified in the player’s explanation.
            <Footnote name={footnoteCount++}>
                A nice example of an earlier, important rule.
            </Footnote>
        </p>

        <p>
            Every single die rolls a 6; three successes! The Thief has stolen the Eye and receives it as an Asset.
        </p>

        <p>
            The lowest die rolled is tied at 6. There are two Trait dice, making them the most common dice of this
            value, so they are chosen for the Lowest Point. As such, the Gentleman Thief receives a complication. The
            Eye was protected by a series of traps and one of them injures the Thief’s leg; they will have an Injury die
            (Wounded Leg) for the next two turns.
        </p>

        <h5 className="text-lg">
            Example 3: Arcane dice
        </h5>

        <p>
            In this example the Gentleman Thief uses one Effort, one Trait (Peerless Burglar) and two Arcane dice
            (Scroll of Invisibility and Cloak of Silence). One Arcane die rolls a 6, one a 1. The Effort and Trait die
            rolls are also both 1. Arcane dice count double on a 1 or 6, so the player has rolled 2 successes. In
            addition, because they count double on a roll of 1, the Arcane die is the Lowest Point and the Gentleman
            Thief receives a magical complication. While they successfully steal the Eye, the Eye unexpectedly responds
            to the magic and is activated, afflicting the Gentleman Thief with visions of the past…
        </p>

        <h4 className="text-xl">
            Player versus Player conflict
        </h4>

        <p>
            In the event of direct player versus player conflict (PvP), for example a fight or zero-sum race to take the
            same object, the highest number of successes wins, meaning it is possible to lose even on a strong roll when
            facing another player
            <Footnote name={footnoteCount++}>
                This has come up and annoyed a player before so I am making it <strong>very</strong> clear here.
            </Footnote>
            . <strong>It is entirely possible to be in a PvP situation without knowing it when two players have the same
            ideas/plans</strong>
            <Footnote name={footnoteCount++}>
                So important I bolded it.
            </Footnote>
            . This can lead to surprising results.
        </p>

        <p>
            In the event of a tie in successes, the highest number rolled across all dice wins. If this is still a draw,
            the type of the highest dice will be considered. Effort trumps all other dice types, then Arcane, then
            Traits/Assets. If the draw is still unresolved the amount of Effort spent will determine the victor. If
            there is still a draw, Control will roll a single d6 for each player. Whichever rolls higher is the victor,
            re-rolling draws. These tiebreaker dice have no other effect.
        </p>

        <p>
            Complications are, as always, determined independently of success.
        </p>

        <h5 className="text-lg">
            Example
            <Footnote name={footnoteCount++}>
                Note this example shows the loser did not get nothing. It&apos;s a very easy example, though, in games
                these can be messier.
            </Footnote>
        </h5>

        <p>
            The Marchioness and Black Knight are duelling for the title of Queen’s Guard. Each has spent a single Effort
            and applied two Traits conveying positive dice. Neither currently has any Injury dice.
        </p>

        <p>
            The Marchioness rolls a 4 and 2 on her Trait dice and a 4 on her Effort. 2 successes, with the Trait dice
            being the Lowest Point.
        </p>

        <p>
            The Black Knight rolls a 1 on his Effort and a 2 and 3 on his Trait dice. 1 success, with the Effort being
            the Lowest Point.
        </p>

        <p>
            <strong>The Marchioness has won</strong>, but she will face a complication. The Black Knight has lost, but
            will still be rewarded for the 1 Success. He faces no complications as his Lowest Point was an Effort die.
        </p>

        <p>
            The narration for the action describes the Black Knight scoring first blood in the duel (he cut the
            Marchioness on the arm) before he was expertly tripped, yielding when the Marchioness holds the point of her
            sword to his throat.
        </p>

        <p>
            The Marchioness receives the Queen’s Guard title (a Trait) and narrative rewards in the form of good press
            coverage and NPCs being impressed. She also receives an Injury die for her wounded arm.
        </p>

        <p>
            The Black Knight, despite the loss, earns a reputation for being a skilled duellist (having scored first
            blood against the mighty Marchioness!) which is a new Trait.
        </p>

        <h3 className="text-2xl">
            Exploration and the Map
        </h3>

        <Quote>
            “We shall not cease from exploration, and the end of all our exploring will be to arrive where we started
            and know the place for the first time.”
        </Quote>

        <GameImage image={image10} alt=""/>

        <p>
            CANDI has a map feature that displays the former Maelstrom. At game start the map is greyed out but as the
            game goes on you will uncover hexes and unlock the secrets of the game. It may be helpful to think of this
            in terms of ‘Fog of War’ as used by strategy games.
        </p>

        <p>
            Each turn you have a special exploration Action in addition to your Effort.
            <strong>
                This Action is not rolled; it will never fail and does not give you any Traits.
            </strong>
            <Footnote name={footnoteCount++}>
                The exploration mechanic is...
                <br/>
                <br/>
                1) New and experimental
                <br/>
                2) Weird
                <br/>
                <br/>
                So this section has a lot of bold to hopefully make the key points clear.
            </Footnote>
        </p>

        <p>
            For this action simply specify which hex of the map you wish to explore.
            <strong>
                This must be no more than 2 hexes away from a revealed hex or your home port.
            </strong>
        </p>

        <p>
            <strong>
                You may, if you wish, use your Effort for additional exploration Actions
            </strong>
            . These <em>will</em> be rolled and as such may fail or come with additional benefits (including Trait/Asset
            gain) or complications.
        </p>

        <p>
            The exploration Action will reveal the chosen hex to you. In addition you will receive a description of what
            you found there and any other characters you encountered.
            <strong>
                If these players are from another nation you will receive their email and can now communicate with them,
                if you wish
            </strong>
            . You can also share the contact details of those you meet to other players at your discretion.
        </p>

        <p>
            To further explore or otherwise interact with what you have uncovered will cost normal Actions (using
            Effort) in subsequent turns.
        </p>

        <p>
            It is assumed you return to your home port after each turn unless specified otherwise. It is possible to
            order your crew to explore (and report back to you) without leaving your home port, though this will not
            prevent you from being contactable and will not have any impact besides flavour.
        </p>

        <h4 className="text-xl">
            Examples
            <Footnote name={footnoteCount++}>
                A lot of people love a visual example, always good to include!
            </Footnote>
        </h4>

        <p>
            In the first (left) image, the player’s home port is shown in green. They can explore any of the blue hexes
            but not the red. In the second (right) green hexes show places already explored. They can explore any of the
            blue but not the red.
        </p>

        <div className="flex">
            <GameImage image={image4} alt=""/>
            <GameImage image={image6} alt=""/>
        </div>

        <h3 className="text-2xl">
            Emails
        </h3>

        <Quote>
            “To send a letter is a good way to go somewhere, without moving anything but your heart.”
        </Quote>

        <GameImage image={image5} alt=""/>

        <p>
            Your in-game communication with other PCs (and NPCs) will all be through emails. These might represent
            letters that your characters are exchanging, a face-to-face conversation, or even stranger/arcane methods of
            communication. You can also have group conversations (i.e. email threads that include 3 or more characters),
            but please be aware that large group threads can quickly become overwhelming and not everyone will have the
            time or inclination to participate in these.
        </p>

        <p>
            <strong>
                All emails must be CC’d to both your Regional Controls and Game Control
            </strong>
            . If you are contacting a PC or NPC from another Region, their Regional Controls must also be CC’d. When
            emailing, ensure you have copied the relevant Controls.
            <strong>
                CANDI should automatically fill in the correct emails for you
            </strong>
            . Remember to always hit reply all!
        </p>

        <p>
            WHen emailing other players the following actions are <strong>note allowed</strong>:
        </p>

        <ul className="list-disc pl-4">
            <li>
                Forwarding emails to other players
            </li>
            <li>
                Sending screenshots of communications to other players
            </li>
            <li>
                Sending screenshots or copying the text of your briefing to other players
            </li>
            <li>
                Sending screenshots or copying the text of action resolutions to other players
            </li>
            <li>
                Copying and pasting the words of others
                <em>ad verbatim</em>
                <Footnote name={footnoteCount++}>
                    This rule requires nuance. A bit of copy and paste, with source formatting, is fine? It&apos;s more
                    about proving a person said something. I would <em>not</em> be an absolutist on this rule,
                    especially for fun stuff between IC friends.
                </Footnote>
            </li>
            <li>
                Narrating how other characters act, react, and feel
                <Footnote name={footnoteCount++}>
                    A bigger deal than it sounds. Do <em>not</em> let players do this and avoid it where possible as
                    Control. <strong>Nothing</strong> will turn players off your game more than a loss of agency.
                </Footnote>
                . Previously some players in face to face meetings have, in their narration, ‘taken control’ of other
                PCs or NPCs without asking. Please do not do this. Control may do this a little but hopefully not in a
                way that takes away player agency.
            </li>
        </ul>

        <p>
            You are still free to quote, misquote, paraphrase and lie about what people have told you.
        </p>

        <p>
            These rules are important in order to allow players to maintain some mystery about each other&apos;s choices
            and to give players room to misdirect if they wish. Your emails will <em>never</em> be intercepted, shared,
            or read by anyone other than their intended recipients <strong>and actions undertaken to access another
            player’s emails will fail</strong>. In addition, while the Control team reads all emails - and greatly
            enjoys them - their NPCs do not.
            <Footnote name={footnoteCount++}>
                I think explaining why rules exist helps to build trust, as these games can cause a lot of paranoia.
                <br/>
                <br/>
                If you&apos;re considering letting players share or hack one another&apos;s communication for a pbem...
                take a step back. How might that change their behaviour? Does it encourage them to stop playing? To send
                fewer emails, or to speak in code? Is that something you want? Is that something they&apos;re going to
                enjoy?
                <br/>
                <br/>
                I&apos;m an extremist and avoid even letting magical NPCs read player communications. It&apos;s not fun
                to deal with such beings, believe me - what if you want to complain behind their backs, or plot against
                them?
            </Footnote>
        </p>

        <p>
            This helps make the game more immersive and fun. Repeated and/or deliberate violations of these rules may be
            cause for you to be removed from the game.
            <Footnote name={footnoteCount++}>
                Sadly important to put your line in the sand. In practise these are often innocent errors and this has
                never happened.
            </Footnote>
        </p>

        <p>
            We would prefer players title email emails like so, including participants for Control clarity:<br/><code>
            EMAIL TITLE [PLAYER CHARACTER NAME, OTHER CHARACTER NAME(S)]
        </code>
            <br/> This is not required, but does make things much easier for Control.
        </p>

        <h3 className="text-2xl">
            Secrets and Spoilers
            <Footnote name={footnoteCount++}>
                More important for this game than most, as I *love* my mysteries. Most games don&apos;t need this, just
                a line about &apos;don&apos;t chat to players OOC and spoil things&apos;.
            </Footnote>
        </h3>

        <Quote>
            “It began in mystery, and it will end in mystery, but what a savage and beautiful country lies in between.”
        </Quote>

        <GameImage image={image8} alt=""/>

        <p>
            <em>Tempest</em> is a game with many mysteries for you to discover and decipher. As such, it is especially
            important we avoid spoilers.
        </p>

        <p>
            At game start, you will have no knowledge whatsoever about 2/3 of the other players. We implore you not to
            share any information about your character or nation with players outside of it unless/until you meet them
            in character.
        </p>

        <p>
            While this rule may become more relaxed as the game continues and connections form, in the early weeks it
            will be strictly enforced and, as with all rules, repeated and/or deliberate violations may cause you to be
            removed from the game.
        </p>

        <p>
            We also ask you to avoid telling people outside the game any sensitive information (which includes even
            basic information about your nation from your briefing), especially people in various online Megagame
            groups, until this rule has been relaxed. While in theory people outside the game knowing about it should
            not matter, in practice this makes accidental spoilers extremely likely. In addition there is always the
            possibility the game may be run again in some form and by sharing these details you spoil future player
            enjoyment.
        </p>

        <p>
            You are, of course, free to discuss your character, nation, and other information in character with whoever
            your character meets in the game.
        </p>

        <h3 className="text-2xl">
            Safety and Etiquette
        </h3>

        <Quote>
            “There is no policy like politeness; and a good manner is the best thing in the world either to get a good
            name, or to supply the want of it.”
        </Quote>

        <GameImage image={image7} alt=""/>

        <p>
            The following tone and content guidelines are intended to provide a framework for play, as well as explicit
            instruction on the type of content that will not be part of the narrative and should not be included in
            player emails or actions.
        </p>

        <h4 className="text-lg">
            Red Lines in Action Submissions
        </h4>

        <p>
            You are welcome to note “red lines” in action submissions - things within your character’s control they
            would not do under any circumstance. For example, a player robbing a bank might note that physically harming
            anyone is a red line. This is helpful for Control to know, as this was a possible outcome, and they will
            respect this. This rule cannot be used to evade complications beyond your character’s direct control (“My
            character would never fumble a catch and this is a red line for me” or “This NPC being offended by action
            likely to offend them is a red line for me”); this rule is only there to ensure Control respects your
            character’s volition, morality, and values.
            <Footnote name={footnoteCount++}>
                I tried not to be too combative in this section, but players have previously tried to exploit this
                safety rule to get the results they wanted and I&apos;m now making it extreme clear that this is not
                what this rule is for.
                <br/>
                <br/>
                It is an important rule, though. Action resolutions in these games - your PC being taken off you by
                Control - are always... tricky. Rememer my point earlier about agency. Players
                get <strong>very</strong> emotionally invested. Make their character do things they feel they would not
                and they&apos;re likely to be unhappy or complain.
            </Footnote>
        </p>

        <h4 className="text-lg">
            Tapping Out
        </h4>

        <p>
            In the case that any player is made uncomfortable or distressed by the content or tone of messages they
            receive, they have the right to Tap Out. This means they can signal in their emails, Discord messages in the
            public Discord server, or in private messages to a member of the Control team that they are not comfortable
            with the tone or content of any messages or action resolutions received. When a player taps out in this way,
            their discussion partner should immediately drop the thread of discussion without question. Failure to
            respect a Tap Out is cause for being removed from the game.
        </p>

        <h4 className="text-lg">
            Unacceptable content
            <Footnote name={footnoteCount++}>
                Vital lines in the sand here. This is where you really might need to get tough,
                and <strong>fast</strong>, if players violate.
            </Footnote>
        </h4>

        <p>
            While the Control team cannot preemptively control the content of what players send in messages to each
            other, or describe in action resolution, for the enjoyment of all involved we are requesting that players do
            not engage with the following:
        </p>

        <ul className="list-disc pl-4">
            <li>
                <strong>
                    Overt descriptions of graphic violence or self-injury in emails
                </strong>: This game will almost certainly feature violence and even gore. Players are requested to
                handle this with care and taste.
            </li>
            <li>
                <strong>Erotic content</strong>: Control insists players do not engage in any overt erotic roleplay or
                content in the body of their emails or actions.
            </li>
            <li>
                <strong>Sexual violence or assault</strong>: A firm no that the Control team stands behind. We ask that
                this not be included not only in your emails and actions but also in terms of backstory elements.
            </li>
            <li>
                <strong>Violence against children</strong>: Another firm no from Control. We ask that this not be
                included not only in your emails and actions but also in terms of backstory elements.
            </li>
            <li>
                <strong>Racism, sexism, homophobia, transphobia</strong>: Players should come into this game with open
                minds and attitudes, and any attempt made at pushing discrimination out of character may be cause for
                expulsion from the game. The nations of this game include people of different gender identities and
                sexualities and have no taboos against them.
            </li>
            <li>
                In our (Earth) history the age of exploration was characterised by colonial oppression and exploitation.
                We would like this game to avoid this; the game will <strong>avoid slavery, oppression and
                exploitation</strong> of those of other cultures. Please note this is not intended to preclude conflict
                on an interpersonal or state-wide level and there may be some mention of these practices historically.
            </li>
        </ul>

        <p>
            Please note this list is not exhaustive; Control reserves the right to specify if other actions cross the
            line. If you are considering saying or doing something which you are concerned could be viewed as
            inappropriate <strong>speak with Control about it before acting</strong>.
        </p>

        <p>
            Needless to say, Control will also observe these same limits when replying to players as NPCs, or when doing
            action resolutions.
        </p>

        <h4 className="text-lg">
            What to expect
        </h4>

        <p>
            Some things are such a core part of the game they cannot be avoided.
            <Footnote name={footnoteCount++}>
                Vital - these are things <em>you&apos;re not going to cut</em> because they&apos;re important to the
                game you wrote (though may downplay) and if these are things players will struggle with they need to
                tell you... or not play. That&apos;s a reason I shared this rulebook at signup and strongly, strongly
                encouraged people to read this section, complete with page reference in the signup.
            </Footnote>
        </p>

        <ul className="list-disc pl-4">
            <li>
                As a game of adventure, peril and politics, some measure of <strong>violence, injury, and
                death </strong> is unavoidable. While this will often take a more ‘action movie’ feel, the game will
                feature some degree of horror at times and it is possible for characters to suffer permanent injuries
                such as a lost hand.
            </li>
            <li>
                <strong>Cannibalism</strong> is something characters may encounter (or indulge in), though we
                do <em>not</em> intend to force this choice upon players.
            </li>
            <li>
                <strong>Body horror</strong>, whether deliberate or unintentional, may also come into play.
            </li>
            <li>
                Some corners of the game may deal with <strong>ableist</strong> themes. If you wish, you can ask not to
                be placed in these parts of the game but we cannot guarantee you will avoid these fully and this cannot
                be easily resolved via the ‘Tap Out’.
            </li>
            <li>
                Some corners of the game may deal with <strong>dementia and neurodegenerative illness</strong>. If you
                wish, you can ask not to be placed in these parts of the game but we cannot guarantee you will avoid
                these fully and this cannot be easily resolved via the ‘Tap Out’.
            </li>
            <li>
                Some corners of the game may include <strong>illicit</strong> and <strong>performance-enhancing
                substances</strong>. We <strong>do not</strong> intend to feature any themes of addiction. If you wish,
                you can ask not to be placed in these parts of the game but we cannot guarantee you will avoid these
                fully and this cannot be easily resolved via the ‘Tap Out’.
            </li>
            <li>
                The game features geopolitics which means large scale violence such as <strong>war</strong> is possible.
                As such we cannot guarantee you will avoid these fully and this cannot be easily resolved via the ‘Tap
                Out’.
            </li>
            <li>
                While arguably not a safety concern, some corners of the game may deal with <strong>bureaucracy</strong>.
                This is mostly optional, but you can nonetheless ask not to be placed in these parts of the game.
            </li>
        </ul>

        <h4 className="text-lg">
            Checking in with Control
        </h4>

        <p>
            You will be assigned an official Control liaison at game start. If you have a question or concern, ask them.
            It is often quicker to do this via a private message on Discord but emails are acceptable. Mark such emails
            clearly so Control knows it is not an in-game email. Your Control may check in with you about your
            wellbeing, especially if your character suffers hardship or distress. If you have an issue with another
            player please bring it to Control’s attention so we can help resolve the issue.
            <Footnote name={footnoteCount++}>
                Gotta know they can do this!
            </Footnote>
        </p>

        <h3 className="text-2xl">
            FAQ
            <Footnote name={footnoteCount++}>
                I made this based on a mix of actual questions asked by Control and proofreaders and what I guessed
                common questions would be.
            </Footnote>
        </h3>

        <Quote>
            “Questions are never indiscreet, answers sometimes are.”
        </Quote>

        <GameImage image={image9} alt=""/>

        <h4 className="text-lg">
            Can I put in an Action with zero Effort?
        </h4>

        <p>No, excluding your once-per-turn special exploration Action.</p>

        <h4 className="text-lg">
            Will Injury dice prevent me from succeeding?
            <Footnote name={footnoteCount++}>
                This is clear in the rules, but it is a little complicated so here&apos;s I&apos;m making it extra
                clear.
            </Footnote>
        </h4>

        <p>
            Your Injury dice have no impact on successes rolled. They make complications more likely, however. They will
            be capped by Control to prevent a ‘downward spiral’ effect if needed.
        </p>

        <h4 className="text-lg">
            Can I spend an action to remove an Injury die?
        </h4>

        <p>
            No. Most Injury dice have a limited duration, however, and Control <em>may</em> reward other Actions by
            removing Injury dice.
        </p>

        <p>
            This may seem an odd design decision but is in place for two reasons. Firstly, if the healing action
            succeeded with a complication, Control would prefer not to remove an Injury and then add an Injury. While
            complications other than Injury dice are common, most would not be logical for surgery/therapy/etc. In
            addition, an action spent healing an injury is reactive and does not advance your character’s story. We
            would prefer you to remain active. Injuries are there to provide meaningful complications, but we will not
            allow them to spoil your game.
            <Footnote name={footnoteCount++}>
                Again, I think it&apos;s helpful to show your logic sometimes. Shows a level of trust and that
                you&apos;re thinking your decisions through.
            </Footnote>
        </p>

        <h4 className="text-lg">
            Is there a limit on how many hexes I can visit or explore in a turn?
        </h4>

        <p>
            None; you are only limited by the number of Actions you can perform each turn. If you spend all your three
            Effort on three different Actions, then you could (if you roll well) visit/explore a maximum of four hexes
            that turn (including your free exploration action).
        </p>

        <h4 className="text-lg">
            Is there a ‘range’ limit for visiting locations I’ve already explored?
        </h4>

        <p>
            None; you could visit the three corners of the map in the same turn, provided that you have already visited
            them.
        </p>

        <h4 className="text-lg">
            Can I visit a hex I have not explored?
        </h4>

        <p>
            Yes, though this is unusual and may be worth checking in with Control about before submitting. It is
            possible you will be invited to a location by another player for an Action. Doing this will not reveal the
            hex or give the full information, however; it is assumed you are travelling with a purpose and not
            conducting a proper survey.
        </p>

        <h4 className="text-lg">
            Can I share contact details for another PC from another nation?
        </h4>

        <p>
            Yes, even without their consent. The Control team may not immediately ‘unlock’ this player on CANDI - we are
            only human - so we implore you to make sure the correct Controls are CC’d by the people you give the email
            to.
        </p>

        <h4 className="text-lg">
            Can my character die?
        </h4>

        <p>
            Yes. However in practice, unless players actively request it and/or leave the game, player characters will
            not be rendered unplayable until Week 6 at the <em>earliest</em> (and even this would still be an unusual
            state of affairs).
            <Footnote name={footnoteCount}>
                I suggest you steal this rule and note for rulebooks.
            </Footnote>
        </p>

        <h4 className="text-lg">
            Can I teach skills/spells/etc to, or learn them from, another PC or NPC?
        </h4>

        <p>
            Yes, though it’s a little complicated. The learner <em>must</em> spend at least one Action. A PC teacher
            does not need to spend Actions, but should make it clear through emails or as part of action submission they
            give their assent to teach. Without clear permission from the teacher the action will be rejected by Control
            and, if possible, the Effort dice spent will be applied to other Action(s).
        </p>

        <h4 className="text-lg">
            What is the purpose of NPCs?
            <Footnote name={footnoteCount++}>
                NPCs... So popular, especially with experienced players, but often ignored or unrealised by new ones,
                who often regret this at debrief when they learn about the meaningful interactions, relationships, etc
                people formed. So here I&apos;m trying to make it clear why they exist, what they can and can&apos;t do,
                why you might want to talk to them.
            </Footnote>
        </h4>

        <p>
            NPCs are here to provide information, assistance and services to players. In many ways they are a method for
            the Control team to roleplay, but NPCs cannot perform Actions and will rarely act to impact the world
            without player action. PCs are the protagonists, after all, not the NPCs. They may be more active if they
            become antagonists.
        </p>

        <p>
            In some previous games NPC opinions were tracked, revealed to players and unlocked Traits to those they
            befriended. NPC opinions will still be tracked but this information is entirely hidden from players and you
            will not receive Traits/Assets merely by being friends with NPCs.
            <Footnote name={footnoteCount++}>
                This is aimed for experienced players, as this is an intentional regression/divergence from previous
                rules. The bonding system was fun but lead to some thematic weirdness, like someone dating an NPC they
                were not Bonded with and being sad someone beat them to it. It also lead to some concerning behaiviours
                and trying to &apos;win&apos; NPCs for mechanical reasons, which Control did not enjoy.
            </Footnote>
        </p>

        <p>
            However, this does not mean your interactions with them are mechanically useless. In addition to having a
            meaningful relationship, befriending or offending NPCs may cause them to talk positively or negatively to
            other PCs and NPCs about you, offer useful information, clarify your confusion or correct mistaken
            information. NPCs also offer you new ways to spend your Effort; a wealthy PC could use an Action to hire an
            NPC to make them a new Asset, for example, or a NPC with a unique arcane gift may be able to share otherwise
            unknowable secrets with you. NPCs may offer to help (or hinder) your actions through mechanical or purely
            flavourful means and in very rare circumstances may offer a free one-use Trait/Asset.
        </p>

        <h3 className="text-2xl">
            One Page Rules Summary
            <Footnote name={footnoteCount++}>
                Always a good idea!
            </Footnote>
        </h3>

        <h4>
            Actions and Effort
        </h4>

        <ul className="list-disc pl-4">
            <li>
                Each turn, you have 3 Effort dice to split between 1-3 Actions. You can use all your Effort Dice on one
                Action, or have up to three Actions. You also have an additional exploration action each turn.
            </li>
            <li>
                Every roll of 3 or higher is a success. The more successes, the better the reward.
            </li>
            <li>
                You can add Traits to your actions. These add more dice.
            </li>
            <li>
                You can add a maximum of three Traits to an action. The same Trait cannot be applied to multiple
                actions. &nbsp;
            </li>
            <li>
                Different types of dice; Effort, Trait/Asset, Arcane, and Injury exist. These all have slightly
                different effects based on whichever is lowest: your Lowest Point.
            </li>
            <li>
                Arcane dice count double on 1s or 6s.
            </li>
            <li>
                Injury dice do not contribute to success and are always added by Control.
            </li>
            <li>
                Control may reject Traits if they do not make sense for the Action.
            </li>
            <li>
                Even success may have complications based on your Lowest Point. These complications may result in Injury
                dice.
            </li>
        </ul>

        <h4>
            Exploration
        </h4>

        <ul className="list-disc pl-4">
            <li>
                Each turn you have a special exploration action in addition to your Effort. This action is not rolled.
            </li>
            <li>
                For this Action simply specify which hex of the map you wish to explore.
            </li>
            <li>
                This hex must be no more than 2 hexes away from a revealed hex or your home port.
            </li>
            <li>
                You may, if you wish, use your Effort for additional exploration actions. These will be rolled and as
                such may fail or come with benefits or complications.
            </li>
            <li>
                The exploration action will reveal the hex and any players also present there to you. If these players
                are from another nation you will receive their email and can now speak to them, if you wish. Some NPCs
                may also be unlocked this way.
            </li>
            <li>
                It is assumed you return to your home port after each turn unless specified otherwise.
            </li>
        </ul>

        <h4>
            Emails and Discord
        </h4>

        <ul className="list-disc pl-4">
            <li>
                The game will use the CANDI app, Discord and emails.
            </li>
            <li>
                Ensure the Control Team is copied into <strong className="italic">all</strong> game emails. CANDI should
                do this for you automatically.
            </li>
            <li>
                When emailing <strong>do not</strong>:
                <ul className="list-disc pl-4">
                    <li>
                        Copy and paste the words of others ad verbatim
                    </li>
                    <li>
                        Forward emails
                    </li>
                    <li>
                        Send screenshots of communications
                    </li>
                    <li>
                        Send screenshots or copy the text of your briefing
                    </li>
                    <li>
                        Reveal game secrets on Discord or other out-of-character communication!
                    </li>
                </ul>
            </li>
        </ul>

        <h4>
            Safety and etiquette
        </h4>

        <ul className="list-disc pl-4">
            <li>
                Avoid disallowed topics and treat one another with respect.
            </li>
            <li>
                Check in with your Control team or external Safety Officer if you have problems or concerns.
            </li>
        </ul>
    </React.Fragment>
}
