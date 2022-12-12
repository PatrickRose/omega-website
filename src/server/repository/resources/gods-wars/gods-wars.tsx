import React from "react";
import Image from "next/legacy/image";
import { Footnote } from "../../../../components/DesignerResource";

import gameLogo from "./game-logo.png";
import victorian from "./victorian.png";
import background from "./background-logo.png";
import DescriptionList from "../../../../components/DescriptionList";

type ExampleActionProps = {
    actionName: string;
    actionDescription: string;
    traitsAssets?: string;
    result?: React.ReactNode;
};

function ExampleAction(props: ExampleActionProps) {
    return (
        <React.Fragment>
            <blockquote className="ml-4 border-l-4 pl-2">
                <p>
                    <em>
                        <u>{props.actionName}:</u> {props.actionDescription}
                    </em>
                </p>
                {props.traitsAssets ? <p>{props.traitsAssets}</p> : null}
            </blockquote>
            {props.result}
        </React.Fragment>
    );
}

export default function GodsWars() {
    let footnoteCount = 1;

    return (
        <React.Fragment>
            <div className="text-center">
                <div className="flex justify-center justify-items-center py-2">
                    <div className="w-2/4">
                        <Image
                            layout="responsive"
                            src={gameLogo}
                            alt="Gods' Wars Game Logo"
                            title="Gods' Wars Game Logo"
                        />
                    </div>
                </div>
                <h2 className="text-center text-4xl">
                    Gods’ Wars: London 1880 <br />
                    PBEM Megagame <br />
                    Player Handbook
                </h2>
                <p>
                    Pieces stolen from Afterlife and Dusk City with permission
                    <Footnote name={footnoteCount++}>
                        Feel free to use bits of previous PbEm rulebooks- though
                        be sure you do get the original authors&apos;
                        permission!
                    </Footnote>
                </p>
            </div>

            <h3 className="text-2xl">
                What are the Gods’ Wars?
                <Footnote name={footnoteCount++}>
                    This is the short summary I used for advertising the game. I
                    put it here as well to start with a brief summary of what
                    this game is all about. Some people don&apos;t read the
                    rulebook and, even for those who do, it is a LOT of info! So
                    good to start out with something like this.
                </Footnote>
            </h3>

            <p>
                Not every demigod can ascend to Godhood. Most of you never will.
                But Gods’ Wars will give you a chance to gain power and favor
                from these incredible beings. Do well enough in the competition,
                and you can, yourself, Ascend to join them in Godhood! The Gods’
                Wars have been run countless times across countless worlds, with
                countless themes. Demigods have intervened to rig elections,
                intercede in succession crises, start wars, and more! This time,
                the theme is love.
            </p>

            <p>
                Love is in the air as the Season begins in (near) London 1880!
                Lilian Thompson and Victor Moore are the most eligible
                debutantes, the so-called &quot;catches&quot; of the season.
                Attend balls and other social events, romance and befriend other
                mortals and demigods alike, while you increase devotion to and
                complete Quests for the Gods.
            </p>

            <p>
                In order to Ascend, demigod participants must score among the
                top six in the competition. Points are given out by Gods in
                their chosen Aspects. The Aspects include Bonding, Justice,
                Arts, Sporting, Scholarship, Pugilism, Fabrication, Balance,
                Trickery, and Hedonism.
            </p>

            <p>
                Will you win the honor and privilege of ascending to Godhood or
                will you pursue love, wherever it may lead? Find out in this
                year’s Gods’ Wars!
            </p>

            <h3 className="text-2xl">The Victorian London of Gods’ Wars</h3>

            <p>
                Gods’ Wars is inspired by, and shares a lot in common with,
                Victorian London, but is not a historical game. Our world is an
                alternative history world in which some major changes in the
                historical timeline have resulted in a society similar to but
                different from the one we know as Victorian England. In the
                Gods’ Wars version of 1880 England, women and people of all
                cultures have equal rights to white men. Non-heterosexual sexual
                orientations, the full gender spectrum, and non-monogamous
                relationships are also an accepted part of society. Modern
                western colonialism and slavery never really took off.
                <Footnote name={footnoteCount++}>
                    I&apos;ll be honest, I was a bit lazy with the setting for
                    this game, in that I wanted to use Victorian London BUT I
                    obviously wanted the game to be inclusive. I was
                    uninterested in telling the stories of only rich white
                    heterosexual men during this time. I wanted to have a world
                    where anyone was free to be whatever and whoever they
                    wanted.
                </Footnote>
                Thus, racism, sexism, and homophobia are not themes that are
                going to be addressed or are welcome in this game. We have made
                these changes purposefully so that players of all races,
                genders, sexualities, etc. can enjoy this romantic era without
                the feeling that they could not have truly belonged in such a
                society. In this one, they can. We have altered history so that
                our non-cis/white/heterosexual players can create and tell their
                own stories in this world. The decision to exclude these themes
                was one made not to belittle the struggles made for equality nor
                to diminish the stories that could be told with these themes in
                such a setting.
                <Footnote name={footnoteCount++}>
                    I could have written alternate history that explained
                    specifically how other nations flourished, how homophobia
                    did not come about, etc. But I didn&apos;t think it would
                    come up that much in the game and that&apos;s not what this
                    game was really about.
                    <br />
                    <br />
                    Nevertheless, it is one thing I do regret, because I
                    don&apos;t want to feel like these stories were not
                    important or valued or that the struggles and atrocities
                    that were committed during these times should just be
                    handwaved. I don&apos;t think it felt that way, but
                    nevertheless, I want to point that out here because
                    it&apos;s something that I spent a lot of time thinking
                    about.
                </Footnote>
                These struggles and these stories are incredibly important, but
                they are not the ones that we are telling in this world or in
                this game.
            </p>

            <p>
                But if all are equal, where will the scandal and drama come
                from? Rest assured. Victorian London in Gods’ Wars is not a
                utopia. There are still many inequalities in our London that
                were present in the real 1880 and that are fodder for the
                Society Papers. Those inequalities revolve around class dynamics
                and the drastic difference in wealth distribution among the
                landed nobility and the working classes. Sexual scandal still
                exists as well. Having a child out of wedlock is still wholly
                inappropriate and shows a lack of moral character especially if
                one does not support said child. Marriage (with two or more
                people) is still very much a business contract designed to
                improve family prospects rather than the more romantic but
                scandalous ideas of marrying for love. Not following any number
                of rules of etiquette (see below) can also lead to your name
                being associated with scandal.
                <Footnote name={footnoteCount++}>
                    I was hoping this would be a bigger theme in the game, but
                    it really never was. I think that partly this is because
                    there really was no mechanic behind it. Sometimes the
                    newspaper would print articles to this effect, but there was
                    no mechanical weight or punishment.
                </Footnote>
            </p>

            <p>
                We welcome all genders, sexualities, and races in the London of
                Gods&apos; Wars. We encourage you to play whatever character you
                feel most comfortable with or would like to explore. Sexism,
                racism, or sexuality-based discrimination are not a part of this
                society and will not be tolerated in or out of game.
            </p>

            <h3 className="text-2xl">Safeguarding</h3>

            <p>
                While the Control team cannot preemptively control the content
                of what players send in messages to each other, or describe in
                action resolution, for the enjoyment of all involved we are
                requesting that players do not engage with the following:
            </p>

            <ul className="list-disc">
                <li>
                    <strong>Erotic content:</strong>
                    We realize that a large part of this game is the dating sim,
                    but we are requesting that players do not engage in any
                    overt erotic roleplay or content in the body of their emails
                    or actions with other player characters (PCs) or non-player
                    characters (NPCs).
                </li>

                <li>
                    <strong>Sexual violence or assault or Incest:</strong>A firm
                    no that the Control team stands behind. We ask that this not
                    be included not only in your emails and actions, but also in
                    terms of backstory elements. We recognize the large role
                    this plays in many mythologies, but we will not abide by
                    their inclusion in Gods’ Wars.
                </li>

                <li>
                    <strong>Racism, sexism, homophobia, transphobia:</strong>
                    These were absolutely issues in actual Victorian London, but
                    we are not engaging with them in Gods’ Wars. Please see The
                    Victorian London of Gods’ Wars for more information. Players
                    should come into this game with open minds and attitudes,
                    and any attempt made at pushing discrimination in or out of
                    character will be punished.
                </li>
            </ul>

            <p>
                Control will also observe these same limits when replying to
                players as NPCs, or when doing action resolutions.
                <Footnote name={footnoteCount++}>
                    This is an INCREDIBLY important section. In fact, it&apos;s
                    so important that OMEGA has drafted some language that you
                    can use for your own rulebook.
                    <br />
                    <br />
                    You may have specific content to add on for your own game
                    based on the themes, and that is absolutely fine. The OMEGA
                    language isn&apos;t a necessity to use verbatim, but it is
                    required that you take care with safety and have some
                    language around it.
                </Footnote>
            </p>

            <h3 className="text-2xl">
                How do I Play?
                <Footnote name={footnoteCount++}>
                    This section is one that I essentially copied and pasted
                    from earlier rulebooks and then modified where my rules and
                    examples differed. Depending on how your game works, I
                    imagine the same can be done here.
                    <br />
                    <br />
                    This section is going to be less important for veteran
                    players to read, but very important for those new to PbEms
                    to have a sense of what they are like!
                </Footnote>
            </h3>

            <p>
                Gods’ Wars is a play-by-email Megagame played over about 8
                Turns. Each Turn will last a week in real time. During a Turn,
                you may input two Actions, which will be resolved by Control at
                the end of the Turn. During the Turn you may communicate
                in-character, by email, with other Player Characters (PCs) and
                Non-Player Characters (NPCs), including Gods and mortals,
                portrayed by members of the Control team, in order to gain
                information, coordinate Actions, spread disinformation, and the
                like. Though communication with NPCs is a core part of the game
                mechanics, if you want to influence the world beyond talking to
                someone, you need to use an Action.
            </p>

            <p>
                <strong className="uppercase">
                    It is strongly recommended that you create a separate email
                    account for this game, to keep game emails separate for your
                    personal emails
                </strong>
                <Footnote name={footnoteCount++}>
                    Seriously, if you haven&apos;t done this as control, I pity
                    your inbox.
                </Footnote>
            </p>

            <p>
                Each Turn ends at the end of the week: 12am Saturday BST/7 pm
                Friday EDT.
                <Footnote name={footnoteCount++}>
                    This changes within a few hours with every game, really.
                    Choose what works best for you and your team.
                </Footnote>
                After that time, Control will begin resolving your Actions, and
                it will no longer be possible to submit Actions for that Turn.
                Once Control is finished resolving your Actions, generally late
                Sunday or early Monday, the outcomes of characters Actions will
                become visible in CANDI, the web interface. Particularly public
                or noisy actions and outcomes may be revealed in the in-game
                news.
            </p>

            <p>
                For the benefit of all, we ask that you stick to the following
                when playing Gods’ Wars:
            </p>

            <ul className="list-disc">
                <li>
                    Use the CANDI app to pull email addresses to ensure that the
                    main Control email and all relevant player Controls
                    (including your own) are copied. Click the “Copy Email”
                    button to have the email addresses of the PC, their
                    associated Control, and your Control pasted to your
                    clipboard.
                </li>
                <li>
                    Include the names of all characters (PC and NPC) involved in
                    the conversation in the email header.
                    <br />
                    Example:{" "}
                    <code>[Achilles/Belus/Poseidon] This Week’s Plans</code>
                </li>
                <li>
                    If you are writing directly to Control, please put ‘CONTROL’
                    in the email title
                    <br />
                    Example:{" "}
                    <code>[CONTROL] Questions About How My Asset Works</code>
                    <Footnote name={footnoteCount++}>
                        These are <strong>super</strong> helpful for processing
                        your inbox, especially as game control! I also set up
                        email filters so each email addressed to my characters
                        would be tagged and color coded. I{" "}
                        <strong>loved</strong> it and will set that up for
                        myself as control every time in the future. So helpful
                        for figuring out who you owe replies to and how many you
                        need to write.
                    </Footnote>
                </li>
                <li>
                    Avoid talking about in-game material elsewhere to avoid
                    spoilers.
                </li>
                <li>
                    While there will be a Discord available, unless specifically
                    directed to by Control, conversations in the Discord should
                    be out of character and should not contain in-game
                    information.
                </li>
            </ul>

            <p>
                Once your role has been cast, you will receive a character brief
                containing your demigod’s name and backstory, a unique starting
                Trait for your demigod, starting connections with other
                characters, and assigned Control. You will also receive a
                questionnaire that will allow you to customize some parts of
                your character’s backstory, including their profession and how
                they fit in London society.
                <Footnote name={footnoteCount++}>
                    What exactly you&apos;ll ask them to provide you is going to
                    differ based on each game, but you do want to have your
                    players be able to customize a bit of their characters.
                </Footnote>
            </p>

            <p>
                Additionally, your character’s personality, style of speech, and
                method of communication (i.e., footman, carrier pigeon, etc.)
                and actions going forward are up to you. Though your brief may
                pull you strongly in certain directions, they are designed to
                leave you considerable wiggle room. The same concept could be
                taken in very different directions. We encourage you to take
                your character and make them your own. An example can be found
                later in this document.
            </p>

            <h3 className="text-2xl">Actions</h3>

            <p>
                Players have 2 Actions every week.
                <Footnote name={footnoteCount++}>
                    I liked 2 actions because I always knew how many action
                    resolutions we were going to have that weekend and it was a
                    very manageable amount. Though, since the last two games had
                    1-3 actions, lots of people missed that 3rd action. It also
                    made for some weird rounds, like the last round where people
                    probably had only one main thing to do, but they were
                    submitting two things anyway. I&apos;d probably go back to
                    the Effort system again (though with some caveats- ones that
                    clarify what it means to use multiple effort and to make it
                    mechanically better to do so, which wasn&apos;t super clear
                    in the last few systems)
                </Footnote>
                Players can coordinate to perform Actions together. For each
                Action, a d10 will be rolled automatically. Traits and Assets
                can be assigned to Actions to improve the odds of securing a
                success, but more importantly, to mitigate against consequences
                and outright failure. A maximum of 3 Traits or Assets can be put
                towards any Action, although there is no requirement for any to
                be attached.
                <Footnote name={footnoteCount++}>
                    This has been consistent so far for all of these iirc.
                    It&apos;s a good number to make sure that there isn&apos;t a
                    HUGE difference in those who have succeeded every turn or
                    failed, etc.
                </Footnote>
            </p>

            <p>
                Traits and Assets <u>need to be relevant or helpful</u> for the
                additional dice to be rolled - this can be explained in your
                description of the Action. A Trait or Asset may only be applied
                to one Action per turn. While we encourage creative use of
                Traits and Assets, the decision of the Control resolving the
                Action is final. If you fail to describe why/how you are using a
                Trait or Asset, Control may choose to ignore that Trait or Asset
                and not roll the associated die.
            </p>

            <h4 className="text-xl">
                Example Action
                <Footnote name={footnoteCount++}>
                    I would recommend writing your own examples here, ones that
                    are themed to your game in particular!
                </Footnote>
            </h4>

            <ExampleAction
                actionName="Presenting a trophy"
                actionDescription=" I bring the Sword of Damocles to Lady Maribeth, to impress her with fine weaponry. I make various sword-related puns to woo her."
                traitsAssets="Asset used: Sword of Domacles (d8)"
                result={
                    <p>
                        If Lady Maribeth is known not to appreciate fine
                        weaponry, and in fact to detest all manner of fighting,
                        your action will likely fail, even if the associated die
                        roll is high (i.e., a “hand in blender” action). A high
                        roll cannot save you from a bad plan.
                    </p>
                }
            />

            <h4 className="text-2xl">Action Resolution</h4>

            <p>
                For each Trait or Asset put towards an Action (with a maximum of
                three allowed per action), an additional die will be rolled.
                Each Trait or Asset you have will be given a value: d4, d6, d8,
                and very rarely d10. The appropriate dice will be rolled based
                on which Trait or Asset you apply to that particular action.
            </p>

            <p>
                For both of your two allocated actions, the highest result will
                be taken and evaluated on the following chart:
                <Footnote name={footnoteCount++}>
                    I <strong>highly</strong> recommend that you make an
                    internal document for how to resolve actions based on rolls.
                    I&apos;m not sure if we&apos;ll have one of these available
                    on the website, but if not, ask a prior control and I&apos;m
                    sure they&apos;d be happy to share an example!
                </Footnote>
            </p>

            <table className="border-collapse border">
                <thead>
                    <tr>
                        <th className="border p-2">1</th>
                        <th className="border p-2">2-3</th>
                        <th className="border p-2">4-6</th>
                        <th className="border p-2">7-9</th>
                        <th className="border p-2">10</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">
                            Failure with very undesirable consequence
                        </td>
                        <td className="border p-2">
                            Weak progress/lead with significant consequence
                        </td>
                        <td className="border p-2">
                            Weak success with minor consequence
                        </td>
                        <td className="border p-2">
                            Success with no consequence
                        </td>
                        <td className="border p-2">
                            An <em>amazing</em> success [additional bonus(es)
                            determined by Control]
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                Should your requested action exceed the scope of what can be
                accomplished, you may be given a notice or resource indicative
                of partial progress or progress towards completing a project,
                which you can spend future actions to finish.
                <Footnote name={footnoteCount++}>
                    Let me highly recommend against this, unless there is a way
                    to track it in CANDI. Tracking will be your most dastardly
                    enemy as game control.{" "}
                    <strong className="uppercase">
                        Track as little as possible
                    </strong>
                    . You will be so grateful for all the time you save later.
                </Footnote>
            </p>

            <h5 className="text-lg">Example Actions</h5>

            <ExampleAction
                actionName="Tea with the Rothburn Sisters"
                actionDescription="Trying to discover the identity of Lord Rothburn’s other suitors, I will take tea with his sisters with hopes of hearing what gossip they have on the matter. I will use my natural charm to put them at ease."
                traitsAssets="Traits used: Natural Charm (d8)"
                result={
                    <p>
                        Dice rolled: 1d10 and 1d8 (1d10 for your action, 1d8 for
                        the appropriate Trait) with the highest roll being
                        counted.
                    </p>
                }
            />

            <ExampleAction
                actionName="Investigate Maria’s Disappearance"
                actionDescription="I will infiltrate Scotland Yard using my connections there and clothing obtained from the wardrobe to locate their case files and evidence with the goal of understanding their progress so far and any leads they have."
                traitsAssets="Traits used: Friends at Scotland Yard (d8), Theater Wardrobe (d4), Back Alley Brawler (d6)."
                result={
                    <p>
                        Dice Rolled: 1d10, 1d8, 1d4 (1d10 for your action and
                        1d8 and 1d4 for accepted Traits of Scotland Yard and
                        Theater Wardrobe respectively. Back Alley Brawler was{" "}
                        <strong>not</strong> accepted as no explanation was
                        given as to how this was used towards the Action and
                        there was no obvious link) with the{" "}
                        <strong>highest</strong> roll being counted.
                        <Footnote name={footnoteCount++}>
                            It&apos;s nice to have examples of a variety of
                            actions, assets/traits, etc. Having an example of a
                            trait not being accepted is useful as well.
                        </Footnote>
                    </p>
                }
            />

            <h4 className="text-2xl">Default Actions</h4>

            <p>
                Just in case something goes wrong and you cannot submit an
                Action on any Turn, you can set a Default Action through CANDI.
                Your Default Action is the Action your character will take when
                no Actions are submitted that Turn. We recommend something
                relatively generic which would likely be helpful in a variety of
                circumstances. Visiting friends for tea, gossiping at the shops,
                working on your family’s businesses, training yourself, or
                producing resources may make good Default Actions.
                <Footnote name={footnoteCount++}>
                    I don&apos;t think I&apos;ve ever seen people really use
                    these, which is a shame, because once or twice they HAVE
                    forgotten their actions. Definitely ping them close to time
                    to remind them.
                </Footnote>
            </p>

            <h4 className="text-2xl">Traits &amp; Assets</h4>

            <p>
                Each PC starts the game with a single Trait, set forth in their
                brief. Starting Traits will be related to your parent god and
                will involve a particular supernatural ability that you can use.
            </p>

            <p>
                A Trait is an aspect of a character which is likely to be
                helpful in performing Actions. As players progress through the
                game, it is possible to acquire additional Traits as well as new
                Assets.
            </p>

            <p>
                An Asset is a character’s possession which may be used in the
                same way as a Trait, but is separable from them. As a result, an
                Asset can be lost, given or lent to another character, while a
                Trait may not be. To lend an Asset to another character for a
                turn, use the web interface. Other than the fact they are
                separable from the character, Traits and Assets are mechanically
                the same.
            </p>

            <h4 className="text-2xl">Upgrading Traits</h4>

            <p>
                In some circumstances, it may be appropriate to upgrade the dice
                you are given for a particular trait. For example, through an
                Action, you built yourself an Exquisite Mansion and were given
                this as an Asset with the value of d6. Through additional
                actions, such as spending effort to do renovations on your
                mansion, you can upgrade your Mansion to a d8. If this happens,
                you will be informed of this in your action submissions and the
                relevant die will be changed in the app.
            </p>

            <p>
                Not all Assets or Traits will make sense to be upgraded and thus
                doing so will not be possible. This is up to Control’s
                discretion.
                <Footnote name={footnoteCount++}>
                    This was a mechanic unique to GW. What I liked about it was
                    that it allowed us to have a larger variety of ways to
                    resolve actions. Better result? d8. Worse result? d4.
                    <br />
                    <br />
                    The downside of course is that it did make those luckier
                    folks a little more lucky as time went on.
                </Footnote>
            </p>

            <div className="text-center">
                <Image
                    src={victorian}
                    alt=""
                />
            </div>

            <h3 className="text-2xl">Being a London Resident</h3>

            <p>
                As you go about your business in London, you will be interacting
                with the locals present, ranging from street urchins up through
                the rich and powerful nobles. As you do, you will start to build
                relationships with them, both platonic and romantic.
                <Footnote name={footnoteCount++}>
                    As I&apos;ve mentioned previously, if you want players to
                    care about stuff, making it a game mechanic can certainly
                    help with that! I wanted it to feel a bit like a dating sim
                    and to have people care about romance and relationships more
                    than they would in other games. As such, I adapted
                    Kyle&apos;s Bonding mechanic from DC
                </Footnote>
            </p>

            <h4 className="text-xl">Bonds</h4>

            <p>
                Bonds represent your character’s relationships- both positive
                and negative- with mortal NPCs, which can have narrative and/or
                mechanical benefits. Just like real people, NPCs have people
                they like and dislike, and your actions in interacting with them
                will determine how they feel about you according to the scale
                below:
            </p>

            <p>
                You may make relationships with both PCs and NPCs; however, your
                relationships with PCs will develop more organically
                <Footnote name={footnoteCount++}>
                    The biggest problem with the bond system in my opinion, is
                    that the relationships with NPCs <strong>don&apos;t</strong>{" "}
                    develop quite as organically when there is a game mechanic
                    for it. Some people bond NPCs fast for the extra bonuses it
                    gets you and then largely ignore them during the game.
                    Others spend a lot of time chatting with NPCs, but
                    don&apos;t have the actions to spend on them and thus their
                    relationship feels like it should be higher, but it
                    isn&apos;t.
                    <br />
                    <br />
                    The other issue is that bonded is limited. It makes sense
                    from a psychological perspective- you can&apos;t be best
                    friends with everyone. On the other hand, it can feel{" "}
                    <strong>realy bad</strong> if someone bonds an NPC before
                    you do, especially if it is an NPC you really care about.
                </Footnote>
                and will not be tracked using the rules discussed below.
            </p>

            <table className="border-omega-dark w-full border-collapse border text-center">
                <tbody>
                    <tr>
                        <td className="border-omega-dark border p-4">
                            Loathing
                        </td>
                        <td className="border-omega-dark border p-4">
                            Unfriendly
                        </td>
                        <td className="border-omega-dark border p-4">
                            Neutral
                        </td>
                        <td className="border-omega-dark border p-4">Warm</td>
                        <td className="border-omega-dark border p-4">
                            Friendly
                        </td>
                        <td className="border-omega-dark border p-4">Bonded</td>
                    </tr>
                </tbody>
            </table>

            <DescriptionList
                list={[
                    {
                        title: "Neutral",
                        content: (
                            <React.Fragment>
                                The default position a PC will have with an NPC
                                if they have not had an interaction or have
                                lacked meaningful interaction. At this level,
                                NPCs will dutifully fulfil their functions,
                                particularly if provided compensation, but
                                otherwise will not be willing to do favors for
                                or give much information to the PC.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Unfriendly",
                        content: (
                            <React.Fragment>
                                If a PC has, through their own actions or via
                                rumours spread about their actions (based on
                                their actions or interactions with other PCs and
                                NPCs), earned a poor reputation with an NPC,
                                they will likely be unfriendlier in email
                                communications and reluctant to provide you with
                                information. They will almost certainly not
                                assist you in actions.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Loathing",
                        content: (
                            <React.Fragment>
                                If a PC has earned the ire of an NPC, they will
                                receive penalties to actions where they are
                                involved and they may flat out refuse to have
                                anything to do with you, which could affect your
                                relationship to the NPCs they have connections
                                with.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Warm",
                        content: (
                            <React.Fragment>
                                This is a level you can reach through
                                interacting with NPCs through email and having
                                positive interactions with them.
                                <Footnote name={footnoteCount++}>
                                    The reason you cannot get higher than Warm
                                    without spending actions is that we did not
                                    want to mechanically benefit people who had
                                    more time to send emails.
                                </Footnote>{" "}
                                Merely positively communicating with an NPC a
                                handful of times may be enough for some, but
                                other NPCs may need more or specific types of
                                interactions. NPCs are people, and everyone is
                                different!
                                <Footnote name={footnoteCount++}>
                                    I&apos;d say be careful with this- make sure
                                    that your control are relatively similar in
                                    what&apos;s necessary to get to warm with
                                    their NPCs. NPCs can differ, but you
                                    don&apos;t want some control giving this out
                                    after a single interaction and others not
                                    for several weeks.
                                </Footnote>{" "}
                                NPCs who are Warm with you will be more
                                forthcoming in messages. There is no limit to
                                the number of NPCs you can attain Warm status
                                with.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Friendly",
                        content: (
                            <React.Fragment>
                                This level is only reachable by doing an Action
                                involving the NPC in question. Depending on your
                                role or on the NPC, more than one Action may be
                                required. When you reach Friendly status with an
                                NPC, you will acquire them as a Bond. This is a
                                special type of Asset that you can use in your
                                Actions. This represents that your relationship
                                with this person is now close enough to you that
                                they are willing to help you out with most
                                requests. Be sure to discuss with them through
                                role play (RP) over email what you are asking
                                them to do to ensure that they are interested
                                and willing in helping you out with your action.
                                There is no limit to the number of NPCs you can
                                attain Friendly status with.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Bonded",
                        content: (
                            <React.Fragment>
                                This level is only reachable by doing an Action
                                involving the NPC in question, specifically
                                something they want to accomplish, in addition
                                to regular email interaction. This NPC will
                                trust you almost implicitly and provide you with
                                information, assistance, and resources as
                                needed. When you reach Bonded status with a
                                character, you gain a permanent Trait or Asset
                                that you can use for the rest of the game. This
                                is in addition to the Asset you received after
                                getting to Friendly status.{" "}
                                <em>
                                    Each player and character may only have up
                                    to 3 NPCs at Bonded status during the game
                                </em>
                                .
                                <Footnote name={footnoteCount++}>
                                    This was partially to mitigate the fact that
                                    NPCs can only be bonded to one individual
                                    (and in extreme cases 2). We didn&apos;t
                                    want people to be closed out of getting
                                    anyone bonded because someone just spent
                                    their whole game grabbing up all the NPCs.
                                </Footnote>
                            </React.Fragment>
                        )
                    }
                ]}
            />

            <p>
                If you devote an action to becoming Friendly or Bonded with an
                NPC, you will be informed of such in your action resolution and
                your asset(s) will be added accordingly. In addition, each week,
                CANDI will be updated to show players their status with NPCs,
                including statuses like Warm, Unfriendly, and Loathing, that may
                come about organically through communication rather than through
                action resolutions.
                <Footnote name={footnoteCount++}>
                    Didn&apos;t have this in the last iteration of the bonded
                    system, which made it extra tough when you lost out on NPCs
                    as it could be unexpected. This way at least you knew a bit
                    in advance
                </Footnote>
            </p>

            <p>
                Mechanically, when your relationship with an NPC gets to
                Friendly, you are able to use that NPC as a d6. When your
                relationship increases to Bonded, it will be upgraded to a d8{" "}
                <em>and</em> you will get a unique Trait or Asset representing
                something about that NPC or your relationship to them.
            </p>

            <h3 className="text-2xl">Romantic Relationships</h3>

            <p>
                Once you reach Warm status with an NPC, you may pursue a
                romantic relationship with them at any time with their consent.
                If you would like to formally propose to an NPC during the game,
                you must be at least at Friendly status for them to agree. You
                do not need to be Bonded with an NPC to propose to them, but you
                will need to be Bonded in order to get married.
                <Footnote name={footnoteCount++}>
                    I remember having a lot of discussion on this rule, though
                    ironically I think we largely forgot about it, as I can
                    recall at least one marriage that occurred when the NPC was
                    not bonded to the NPC.
                    <br />
                    <br />
                    Marriages and relationships and rumours about such were a
                    bit less codified than we&apos;d expected. But it was all
                    fine. I guess in retrospect I don&apos;t know that I&apos;d
                    make a rule like this? Though it makes logical sense?
                    I&apos;m still conflicted honestly.
                </Footnote>{" "}
                You do not need to spend an action on proposing to or marrying
                an NPC. Each week, any proposals will be reported in the society
                papers, unless otherwise specified by the player.
            </p>

            <p>
                Just like real people, not all NPCs will be open to or looking
                for romance. NPCs will have sexualities and preferences as well.
                Excellent roleplaying and rolls on Actions <em>might</em> make
                an NPC change their mind or become open to romance when they
                weren’t initially, but this is not guaranteed.
                <Footnote name={footnoteCount++}>
                    We initially wanted to make their sexualities public, which
                    I&apos;m very glad we didn&apos;t do. Perhaps it&apos;s
                    being bi in real life, but I really love just relationships
                    developing organically and caring less about the gender of
                    the person involved.
                    <br />
                    <br />
                    Behind the scenes we still had sexualities in the NPCs bios,
                    but they were largely ignored, and most of them were bi or
                    pan anyway. Hilariously, the only two heterosexual
                    characters did not end up in a heterosexual relationship. So
                    anyway, my point is, go with what feels right in
                    relationships rather than obsessing about the
                    character&apos;s sexuality, though if that&apos;s something
                    you feel strongly about, then feel free to do this
                    differently.
                </Footnote>{" "}
                You can always progress from Warm to Friendly to Bonded,
                regardless of your romantic status with an NPC.
            </p>

            <p>
                Some NPCs may be open to polyamorous relationships and
                marriages. If this is something you are interested in pursuing,
                be sure to get the explicit permission of all PCs and NPCs
                involved in the relationship.
                <Footnote name={footnoteCount++}>
                    We sadly had a LOT of bad poly relationships. What made them
                    bad was a lack of IC communication- not telling at least one
                    of their partners that they were seeing other people or not
                    getting their permission until afterwards, that kind of
                    thing.
                    <br />
                    <br />
                    It was a little sad, just in that I didn&apos;t want people
                    to see the relationships in this game and think like yup
                    just like irl all poly relationships are about cheating or
                    that kind of stupid stereotypical shit. I don&apos;t think
                    that&apos;s the impression people got though, and I do think
                    the drama was fun for everyone OOC. Plus we did have ONE
                    good example of a poly relationship thank goodness.
                </Footnote>
            </p>

            <p>
                NPCs can be at Bonded status with a maximum of one person (two
                in exceptional circumstances)
                <Footnote name={footnoteCount++}>
                    I think the only case we did this is if two people were
                    pursuing it simultaneously and it made sense for them both
                    to get it.
                </Footnote>
                . However, just because you are not at Bonded status with them
                does not mean you can’t pursue a romantic relationship, close
                friendship, or valuable relationship with them. For most NPCs,
                Friendly is enough to have very rich and interesting
                relationships.
            </p>

            <p>
                At any given time, on CANDI, you can see the number of
                relationships an NPC has and at what level (e.g. Lilian
                Thompson: 4 PCs at Warm, 3 at Friendly, 0 at Bonded) These will
                be updated weekly with action resolutions.
            </p>

            <p>
                You may also pursue friendships or romantic relationships (with
                consent) with other PCs, although there are no bonds granted for
                doing so.
                <Footnote name={footnoteCount++}>
                    Initially we were worried that we should give people
                    something for this, but that seemed weird. I think this
                    might have been the first game in which we had PC to PC
                    romantic relationships (though it may have been just one?)
                    and everyone handled it really well.
                </Footnote>
            </p>

            <h3 className="text-xl">
                Romance Writing Guide
                <Footnote name={footnoteCount++}>
                    We knew people would have different expectations about this
                    going into it- several people were very comfortable writing
                    explicit romance and many mentioned specifically that they
                    did NOT want that.
                    <br />
                    <br />
                    To make sure that everyone (players AND control) were
                    comfortable, this is what we went with, which honestly was
                    sort of the unspoken way romance was dealt with in other
                    games when it came up. However, since this was a major theme
                    of the game, it was really important imo to have this here.
                </Footnote>
            </h3>

            <p>
                Romance is a large part of this game; however, we would like to
                set clear boundaries about what our expectations are of you and
                what you can expect from us in terms of the content of that
                romance. Sexual content with PCs and NPCs must be{" "}
                <em>hinted at only</em> in your writing. We want to make sure
                everyone is comfortable, so we will take a “fade to black”
                approach. You can end scenes after entering the bedroom
                together, begin scenes after waking up together, but please do
                not explicitly write sex scenes or ask control to do so.
            </p>

            <p>
                Non-consensual romance of any kind with PCs and NPCs is
                prohibited. Remember that consent can also be withdrawn after it
                has been given if the PC or NPC feels uncomfortable
                <Footnote name={footnoteCount++}>
                    There were many players who were remarkably good at this and
                    modeled it for everyone. I would have been a bit more
                    explicit/provided more examples here in the future.
                    <br />
                    <br />
                    For example, don&apos;t assume that other people will
                    consent in your writing. When you say you&apos;re going to
                    do something, adding something like &quot;if they allow
                    it&quot; is really appreciated. Even if you&apos;re in a
                    relationship with a character, respecting boundaries is so
                    important!
                </Footnote>
                . If you are ever uncertain, it is best practice to send an
                out-of-character (OOC) email or DM on discord asking the PC or
                control who plays the NPC for clarification or permission before
                proceeding.
            </p>

            <p>
                If you are ever uncertain of whether or not something you want
                your character to do is acceptable under these rules or for any
                other reason, please ask your control or game control. Please
                err on the side of caution to ensure that everyone feels safe
                and comfortable. If you ever do not feel comfortable or safe
                about this or anything else, please speak with your control or
                game control.
            </p>

            <Image
                src={background}
                alt=""
            />

            <h3 className="text-2xl">Being a Demigod</h3>

            <p>
                You are a demigod- the child of a God and a mortal, bestowed
                with additional powers beyond those of mere humans. You will
                begin with one divine power in the form of your starting Trait.
                During the course of the game, you may gain additional powers or
                artifacts from Gods by doing Quests for them and gaining their
                favour.
            </p>

            <h4 className="text-xl">The Gods&apos; Wars</h4>

            <p>
                Gods’ Wars is ultimately a competition for the entertainment of
                the other gods. You will be rewarded, of course, with the
                ultimate prize- Ascension to Godhood yourself. You will be
                competing with the other demigods (i.e., PCs), and only the top
                6 will be able to Ascend. As a part of the competition, each God
                has picked an Aspect that they would like to see PCs excel at.
                Doing Quests for that God will typically gain you their Favour
                as well as points in that Aspect. Other actions related to an
                Aspect can also gain you points in it. Each of the Aspects will
                be added together to give you an overall score. The top 6
                overall scorers in the competition will have the option to
                Ascend to Godhood at the end of the game.
            </p>

            <p>
                Aspects include Justice (Hera), Bonding (Aphrodite), Arts
                (Apollo), Sporting (Artemis), Hedonism (Dionysus), Fabrication
                (Hephaestus), Scholarship (Athena), Pugilism (Ares), Trickery
                (Hermes), Balance (Demeter), and Glory (Zeus, Poseidon, Hades).
                <a href="https://www.google.com/url?q=https://godswars.miraheze.org/wiki/The_Gods%2527_Wars%23Aspects&sa=D&source=editors&ust=1661984338022516&usg=AOvVaw2sHfwZNlXO9IcfonhnCW1b">
                    More information on the Aspects can be found on the Wiki
                </a>
                <Footnote name={footnoteCount++}>
                    In theory, this was a really cool idea- having one Aspect
                    for each God. In practice it was a <strong>huge</strong>{" "}
                    hassle and a <strong>nightmare</strong> to track. Scott made
                    us a spreadsheet on CANDI and programmed some extra stuff a
                    few weeks in that made it significantly better. However,
                    don&apos;t do this to yourself. Find a way to make it a cool
                    theme and <em>also</em> not to be a nightmare on the
                    tracking end of things.
                    <br />
                    <br />
                    It also was really tough to make sure we had enough plots of
                    each kind. Some of these were easier to do than others.
                    Overall, great in theory, terrible in practice.
                </Footnote>
            </p>

            <p>
                While your parent and/or sponsor god
                <Footnote name={footnoteCount++}>
                    Not all the sponsor gods were their parents, because some
                    gods were virgins or monogamous, etc. I probably would have
                    reduced the parent gods that weren&apos;t in the game
                    though, as I did feel bad for players who really wanted to
                    meet their parent but we very much were not going to create
                    new NPCs for any god you wanted to meet.
                </Footnote>{" "}
                may be participating in the event, this does not mean they will
                give you special treatment. They want to have the best chance of
                winning and if you aren’t doing well, your ties- blood or
                otherwise- will mean nothing.
            </p>

            <p>
                Each week, when action resolutions come out, we will also update
                the Leaderboard, which will show the top three scorers in each
                Aspect. At the end of the game, the top three scorers in each
                Aspect will get an additional +3/+2/+1 points respectively
                <Footnote name={footnoteCount++}>
                    Oh god the Leaderboard was also a tracking and mathematical
                    nightmare. All worked out in the end, but spent far too much
                    time making it so.
                </Footnote>
                . Information about overall rankings may be shared at other
                points during the game.
                <Footnote name={footnoteCount++}>
                    I thought people would really want this information, so we
                    released it starting halfway through the game (it made
                    little sense before that). Some people did, and some people
                    very much did not want to know, so we ended up making it opt
                    in.
                </Footnote>
            </p>

            <h4 className="text-xl">
                Gods’ Devotion Tracks
                <Footnote name={footnoteCount++}>
                    Why yes this <em>is</em> just a reskinned version of the
                    Bond system
                </Footnote>
            </h4>

            <p>
                As you develop stronger ties with each God, you will progress on
                their devotion track. Gods will provide guidance during the game
                about how to progress on their individual devotion track and may
                offer Quests to complete to gain their favour. A list of known
                Gods- those whose patronage will be available to achieve- will
                be available, both on the Wiki and on CANDI. You can also speak
                with Tiresias, a neutral NPC designed to help you with the Gods’
                Wars competition, for advice about gaining the favour of
                particular Gods
                <Footnote name={footnoteCount++}>
                    Most games will have a &quot;helper&quot; NPC. They are not
                    always explicitly labelled like this, but we felt we wanted
                    to do so in this case, especially if people were confused
                    about the rules of the competition.
                </Footnote>
                . It is also possible that increasing your ties to one God may
                weaken or strengthen your ties to another God.
                <Footnote name={footnoteCount++}>
                    We wanted to do this, but I don&apos;t think we ever
                    actually did. Lots of cool stuff you plan that just slips
                    through the cracks when you get to the reality of running
                    one of these.
                </Footnote>
            </p>

            <p>
                Only one PC can attain the level of Blessed for each God (two in
                exceptional circumstances).{" "}
                <em>Each player can only reach Blessed status with one God</em>.
                The number of PCs at each level of devotion for each God will be
                publicly available on CANDI. For example,
            </p>

            <p>Zeus: 4 PCs at Preferred, 3 PCs at Favoured, 0 at Blessed</p>

            <table className="border-omega-dark w-full border-collapse border text-center">
                <tbody>
                    <tr>
                        <td className="border-omega-dark border p-4">
                            Condemned
                        </td>
                        <td className="border-omega-dark border p-4">
                            Disfavoured
                        </td>
                        <td className="border-omega-dark border p-4">
                            Neutral
                        </td>
                        <td className="border-omega-dark border p-4">
                            Preferred
                        </td>
                        <td className="border-omega-dark border p-4">
                            Favoured
                        </td>
                        <td className="border-omega-dark border p-4">
                            Blessed
                        </td>
                    </tr>
                </tbody>
            </table>

            <p>
                <Footnote name={footnoteCount++}>
                    Changed the name of these to represent that it is different,
                    because you do NOT get assets for befriending Gods
                    (they&apos;re not doing favours for you), but you do get
                    points and probably some powers and stuff too
                </Footnote>
            </p>

            <DescriptionList
                list={[
                    {
                        title: "Neutral",
                        content: (
                            <React.Fragment>
                                The default position a PC will have with a God
                                if they have not had an interaction or have
                                lacked meaningful interaction. At this level,
                                Gods can be assumed to act in their
                                self-interest and will not be willing to do
                                favors or give particularly useful information
                                to the PC, unless it benefits them in some way.
                                Gods may give out Quests at this level when
                                asked explicitly.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Disfavoured",
                        content: (
                            <React.Fragment>
                                If a PC has, through their own actions or via
                                rumours spread about their actions (based on
                                their actions or interactions with other PCs and
                                NPCs), earned a poor reputation with a God, they
                                will likely be unfriendlier in email
                                communications and reluctant to provide you with
                                information. They are not willing to give out
                                Quests to PCs at this level
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Condemned",
                        content: (
                            <React.Fragment>
                                If a PC has earned the ire of a God, they will
                                receive penalties to actions where they are
                                involved and they may flat out refuse to have
                                anything to do with you, which could affect
                                other Gods or NPCs they have connections with.
                                They are not willing to give out Quests to PCs
                                at this level.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Preferred",
                        content: (
                            <React.Fragment>
                                You can reach Preferred status through email and
                                having positive interactions with them. Each God
                                is going to have different preferences and
                                personalities and appealing to these can help
                                you gain Preferred status. Gods who you have
                                Preferred status with will be more forthcoming
                                in messages. There is no limit to the number of
                                Gods you can attain Preferred status with. Gods
                                will be willing to give out Quests at this
                                level, but you may need to encourage them to do
                                so.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Favoured",
                        content: (
                            <React.Fragment>
                                This level is only reachable by doing an Action
                                involving the God in question. At this level,
                                Gods are going to be more likely to share
                                information with you or give you limited
                                assistance in actions. Unlike NPCs at Friendly,
                                Gods cannot be used as assets, but may give out
                                assets through doing Quests for them. Gods will
                                happily offer you Quests at Favoured status.
                                When you reach Favoured status with a God, you
                                will increase your progress in that God’s
                                Aspect. There is no limit to the number of Gods
                                you can reach Favoured status with.
                            </React.Fragment>
                        )
                    },
                    {
                        title: "Blessed",
                        content: (
                            <React.Fragment>
                                This level is only reachable by doing a special
                                Quest for a God, as well as regular email
                                interaction. The God will trust that you are
                                working in their favour and will favour you in
                                the competition for Ascension. When you reach
                                Blessed status with a God, you will increase
                                your progress in that God’s Aspect. Because this
                                is a competition and the Gods get jealous of one
                                another, each player may only reach Blessed
                                status with one God.
                            </React.Fragment>
                        )
                    }
                ]}
            />

            <p>
                Just because you cannot attain Blessed status with a particular
                God does not mean that pursuing devotion with them is not
                worthwhile. The Favoured status still means that a particular
                God will favour you and offer you information, Quests
                <Footnote name={footnoteCount++}>
                    At one point we discussed Gods only offering quests at
                    certain levels of devotion, but ultimately rejected the idea
                    as Quests were a core gameplay loop that you couldn&apos;t
                    really have limited access to.
                </Footnote>
                , or other valuable effects.
            </p>

            <p>
                Because players may take actions that displease their Gods, you
                can also decrease your status on the Devotion Track. However,
                the higher you are on the Devotion Track, the less likely it is
                that you will lose this status. It is very difficult (but not
                impossible) to be removed from Blessed status after maxing out
                the Devotion Track for a particular God. You can regain these
                statuses by regaining your Devotion to that particular God.
            </p>

            <p>
                Because the Gods have existing relationships, your devotion with
                some Gods may impact your status with others as well, though you
                can never gain Favoured or Blessed status without direct action
                on your part. These pre-existing relationships could lead to
                positive or negative impacts on devotion.
            </p>

            <h4 className="text-xl">Quests</h4>

            <p>
                During the game, Gods will have various Quests that they may ask
                you to complete. These Quests will be based on the individual
                God’s preferences and personality. For example, Aphrodite’s
                Quests are likely to be based on love and romance, whereas
                Ares’s Quests are likely to be based on fighting or conflict.
                Gods may give out Quests organically while you interact with
                them, or they can be asked. Completing Quests for Gods can earn
                you some combination of points in their Aspect, Favour with that
                particular God, and Traits and/or Assets.
                <Footnote name={footnoteCount++}>
                    We wrote these in advance and had them on a giant document.
                    We really didn&apos;t know what to expect in terms of like
                    the number we would need and which gods would be popular, so
                    I think we had about 6-8 unique ones for each, 10-15 in
                    total. Some quests made a bit more sense to allow to have
                    multiple of and some did not.
                    <br />
                    <br />
                    In retrospect, this mechanic really needed to be nailed down
                    a bit better. There were some Quests that were much easier
                    or harder than others, and Gods wouldn&apos;t give you a new
                    Quest if you didn&apos;t like the one you had or asked a ton
                    of Gods for Quests (though we made some exceptions if people
                    were having a really tough time with them). We wanted to
                    make them open-ended so we weren&apos;t just railroading PCs
                    into doing the plots we wanted, but I don&apos;t know if
                    that was the right thing. Some were just so vague that I
                    think people had a lot of trouble nailing them down.
                </Footnote>
            </p>

            <p>
                For example, you may attempt to slay a Hydra that has, rather
                awkwardly, appeared on the outskirts of London, wreaking havoc
                on the mortals, to attempt to fulfill a Quest for Ares. Rolling
                well and successfully completing this quest can grant you points
                in the Pugilism Aspect, favour with Ares, and a potential asset
                (e.g. Monster Slayer- d8) that can be used in future actions.
                Rolling poorly, however, can lead to consequences, such as
                injuries from the Hydra, or losing favour with Ares and points
                in the Pugilism Aspect. Unless you roll exceptionally well or
                exceptionally poorly, you are not likely to gain or lose all 3
                <Footnote name={footnoteCount++}>
                    A guide for this (for control) was in our action resolution
                    guide
                </Footnote>
                . If you are particularly interested in assets instead of favour
                or points, for example, please write that in your action
                resolution and control will resolve accordingly.
                <Footnote name={footnoteCount++}>
                    This we had to clarify and I don&apos;t know that it worked
                    super well as some people wouldn&apos;t request that they
                    wanted anything, and some people would have a laundry list
                    of items like 10 things long. It&apos;s nice to give people
                    what they want, but we also didn&apos;t want people to be
                    asking for so much or such specific things that we
                    didn&apos;t want to get them that.
                </Footnote>
            </p>

            <p>
                Working together with other PCs on Quests means that you will
                share the rewards. You will not gain as many points as you would
                if you tackled it individually, however you will still get Quest
                items and favour from the God provided you roll well enough
                <Footnote name={footnoteCount}>
                    We absolutely nixed this like immediately Round 1. Way too
                    hard to do on the control end of things and some control
                    remembered and some forgot which really did not work out
                    super well.
                </Footnote>
                . Additionally, you are more likely to succeed with the help of
                other PCs.. Taking on a Hydra with a small team, for example, is
                much easier than taking it on alone.
            </p>

            <p>
                Quests are designed to be open-ended so that there is not one
                “right” way to complete them. It is up to you to decide how to
                go about pursuing that Quest. Importantly,{" "}
                <em>
                    you must indicate in your action resolution that you are
                    attempting to complete a Quest or you will not get credit
                    from the God from doing so
                </em>
                <Footnote name={footnoteCount++}>
                    Why do this? It is impossible for us to know what quest each
                    person has at each time and what they are going for. Again,
                    a tracking nightmare, so we asked players to specify for us.
                </Footnote>
                . If your action resolution does not specify that you are trying
                to complete a Quest or your action is not relevant for the
                Quest, you will not gain the relevant rewards. See below for
                several examples.
            </p>

            <ExampleAction
                actionName="Kill a Hydra"
                actionDescription="I will go after the Hydra in the outskirts of London, along with The Champion. We have heard where it has last been seen and we will set up a trap for it there, involving blinding it with glitter. I will use my incredible strength and she her incredible speed in order to kill it. I will then tell Ares that I have fulfilled his Quest to kill a monster and regale him the story of our doing so."
                result={
                    <Footnote name={footnoteCount++}>
                        I don&apos;t think anyone actually did anything like
                        this in relaying them to the gods, which is too bad
                        because it could&apos;ve been a fun bit of flavor.
                    </Footnote>
                }
            />

            <ExampleAction
                actionName="Dazzling Proposal"
                actionDescription="I have been courting Alex Stillwell for several weeks now and we have grown very close. I will plan a dazzling proposal, involving a trip to Hyde Park in which I will serenade them when we stroll beneath the oak tree where we first kissed. Next, I will row us out to the middle of the lake there, kiss them, and present them with the ring before asking them to marry me. Later, I will tell Aphrodite that I have fulfilled her Quest to find true love and gush to her about my new fiance."
            />

            <h4 className="text-xl">Aoratos</h4>

            <p>
                Magic is not native to London nor to Earth. Just like in Greek
                mythology, it is dangerous for mortals to see the gods in all
                their glory. In fact, any displays of magic are dangerous to
                mortals. Unlike Greek mythology, however, it is unlikely to
                outright kill them. Instead, their minds re-write what they’ve
                seen. Fortunately, they forget what they’ve seen. Unfortunately,
                the mind is imperfect and can’t always filter out just the
                magic. The more intense the display of magic, the more it will
                affect mortals’ minds. However, it is an imperfect science, and
                it is recommended not to use one’s powers or use any other type
                of magic in front of the mortals. It wouldn’t do to have someone
                inconvenient catch on. Or to have your best friend or romantic
                partner forget who you are.
                <Footnote name={footnoteCount++}>
                    Thought this would be a good way to limit people from
                    throwing around their powers everywhere and having to
                    constantly write mortals being like OMG. We debated on a
                    couple of ways and I thought this was the most interesting.
                    <br />
                    <br />
                    It had a lot of incredibly fascinating implications,
                    including on the end of the game where players who stayed on
                    Earth couldn&apos;t recall their time as demigods- at least
                    not the magical bits.
                </Footnote>
            </p>

            <h3 className="text-2xl">
                Quick Reference Guide
                <Footnote name={footnoteCount++}>
                    I <strong>highly</strong> recommend having one of these at
                    the end (or beginning) of your rulebook. It&apos;s a lot of
                    information, and it helps to condense it. I&apos;d keep it
                    to one page. I purposefully edited it so it wouldn&apos;t be
                    longer than that
                </Footnote>
            </h3>

            <p>
                <a href="https://www.google.com/url?q=https://docs.google.com/document/d/1rpsKpwyl1gbIVUd2L9hoIZRjwiiutxVXAIx6u32CcPQ/edit&sa=D&source=editors&ust=1661984338030798&usg=AOvVaw175h8shnSWyC9nuEPACPiC">
                    How to Play PbEm game guide: A guide to Play By Email
                    Megagaming - Google Docs
                </a>
                <Footnote name={footnoteCount++}>
                    Extra bonus info for new players written by Stu. I believe
                    he is happy to share this if it isn&apos;t on OMEGA&apos;s
                    site already, but again please ask.
                </Footnote>
            </p>

            <h4 className="text-xl">Action Resolution and Resources</h4>

            <p>
                You will have two actions each turn. You can apply up to three
                additional resources (traits, assets, and/or bonds) to each one.
                These will be represented by an extra dice that is rolled.
            </p>

            <h4 className="text-xl">Bonds</h4>
            <p>
                Mortal NPC relationships are tracked. You will start at Neutral
                with NPCs and may, through interaction by emails, progress them
                to Warm. By taking an Action to help or otherwise get close to
                them, you can become Friendly in which they will become a d6
                resource that you can apply to an Action. Further investment
                through Actions may lead to becoming Bonded, the highest level
                you can reach with mortal NPCs. This will increase your bond to
                a d8 resource and provide you with an additional trait or asset.
                NPCs can only become Bonded with one PC.
            </p>

            <h4 className="text-xl">Devotion</h4>

            <p>
                Your relationships with Gods (excluding Tiresias) are also
                tracked. You will start at Neutral and may, through interaction
                by emails, progress them to Preferred. By taking an Action to
                help or otherwise get close to them, you can become Favoured.
                Further investment through Actions may lead to you becoming
                Blessed, the highest level you can reach with God NPCs. Gods do
                not provide resources for progressing on their devotion track,
                but you <em>will</em> receive points in their Aspect based on
                your devotion level. Gods can only progress to Blessed with one
                PC.
            </p>

            <h4 className="text-xl">The Gods’ Wars</h4>

            <p>
                The top 6 competitors in the Gods’ Wars will have the option to
                Ascend to Godhood at the end of the competition. Competitors
                (the 26 PCs) score points by progressing on Gods’ devotion
                tracks, completing Quests for Gods, or otherwise taking actions
                related to Gods’ Aspects.
            </p>

            <h4 className="text-xl">Aspects</h4>

            <p>
                Aspects are categories selected by the Gods for you to score
                points in. They include Justice (Hera), Bonding (Aphrodite),
                Fabrication (Hephaestus), Sporting (Artemis), Arts (Apollo),
                Hedonism (Dionysus), Scholarship (Athena), Pugilism (Ares),
                Trickery (Hermes), Balance (Demeter), and Glory (Zeus, Poseidon,
                Hades). The top three scorers in each Aspect will be displayed
                on the Leaderboard. At the end of the game, the top three
                scorers in each Aspect will get bonus points. Points in Glory
                will be worth slightly more to compensate.
            </p>

            <h4 className="text-xl">Quests</h4>

            <p>
                Gods may give out Quests, open-ended requests that they would
                like for you to fulfill. Completing a Quest will score you
                points in that Gods’ Aspect in addition to increasing your
                devotion with that God and gaining you an artifact or divine
                power.{" "}
                <em>
                    You must include text in your action resolution indicating
                    you are attempting to complete a specific Quest, or you will
                    not be able to do so.
                </em>
            </p>
        </React.Fragment>
    );
}
