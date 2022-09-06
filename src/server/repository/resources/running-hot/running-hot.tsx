import React from "react";

import {Footnote, GameImage} from "../../../../components/DesignerResource";
import DescriptionList from "../../../../components/DescriptionList";

import runningHotLogo from "./game-logo.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeaf} from "@fortawesome/free-solid-svg-icons/faLeaf";
import {faCog} from "@fortawesome/free-solid-svg-icons/faCog";
import {faBrain} from "@fortawesome/free-solid-svg-icons/faBrain";
import {faCalculator} from "@fortawesome/free-solid-svg-icons/faCalculator";

function TableOfContentsLi({className, children}: { className?: string, children: React.ReactNode }) {
    return <li className={`${className ?? ""}`}>
        {children}
    </li>
}

function IndentedOl({
                        className,
                        children,
                        includeNumber
                    }: { className?: string, children: React.ReactNode, includeNumber?: boolean }) {
    return <ol className={`pl-4 ${includeNumber === false ? "" : "list-numeric"} ${className ?? ""}`}>
        {children}
    </ol>
}

function IndentedUl({
                        className,
                        children,
                        includeDisc
                    }: { className?: string, children: React.ReactNode, includeDisc?: boolean }) {
    return <ul className={`pl-4 ${includeDisc === false ? "" : "list-disc"} ${className ?? ""}`}>
        {children}
    </ul>
}

export default function RunningHot() {
    let footnoteCount = 1;
    let designerCount = 1;
    return <React.Fragment>
        <div className="text-center">
            <GameImage image={runningHotLogo}
                       alt="Running Hot logo. Text reads &apos;Running Hot, a pre-Cyberpunk megagame by Patrick Rose"/>
            <Footnote name={footnoteCount++}>
                This logo was made by Dan White for the first OMEGA run (back when it was called Empty Set)! No idea
                what he used to make it
            </Footnote>
            <Footnote name={footnoteCount++}>
                The original rulebook was written in <a href="https://www.latex-project.org/" target="_blank"
                                                        rel="noreferrer">LaTeX</a>, which was... a decision. I had a few
                reasons for doing so, none of which are good. It does make certain bits of rule writing easier (linking
                to other pages with page numbers, automatically generating a table of contents etc), and I could use
                some features to make sure some keywords were consistent. Using Google Docs makes it
                a <strong>lot</strong> easier for people to review your rulebook. <br/>
                <br/> Do not do the things that I do. This might become a theme of this annotation.
            </Footnote>
        </div>
        <h3 className="text-2xl">
            Contents
            <Footnote name="Editor note">
                This has been ported from <a
                href="https://drive.google.com/file/d/1OPrQeapaGtlVOhGUNz0OK3kL0bdRL40z/view" target="_blank"
                rel="noreferrer">the original PDF</a>, which includes page numbers etc, which are lost in this format
            </Footnote>
            <Footnote name={footnoteCount++}>
                A table of contents is (in my opinion) a required part of any
                rulebook. It means that you can quickly reference any rules, as
                long as you were sensible and put all the content in the right
                place.
                <br/>
                <br/>
                It also gives players a quick overview of the structure of your
                game - remember that your rulebook is the first time players
                will see your game and the more work you can do to help them
                along the better.
                <br/>
                <br/>
                A slight philosophical aside, rulebooks are a product of the
                designer. The Running Hot rulebook is like this because that&apos;s
                how I write (and think) about game design.
            </Footnote>
        </h3>

        <IndentedOl includeNumber={false} className="table-of-contents">
            <TableOfContentsLi className="font-bold">
                <a href="#background">Background</a>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#whats-the-background">
                            What&apos;s the background
                        </a>
                    </TableOfContentsLi>
                    <IndentedOl includeNumber={false}>
                        <TableOfContentsLi>
                            <a href="#welcome-to-procatorion">
                                Welcome to Procatorion
                            </a>
                        </TableOfContentsLi>
                    </IndentedOl>
                    <TableOfContentsLi>
                        <a href="#rules">
                            Rules
                        </a>
                    </TableOfContentsLi>
                    <TableOfContentsLi>
                        <a href="#what-do-i-need-to-focus-on">
                            What do I need to focus on?
                        </a>
                    </TableOfContentsLi>
                </IndentedOl>
            </TableOfContentsLi>
            <TableOfContentsLi className="font-bold">
                <a href="#turn-structure">Turn structure</a>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#setup-phase">
                            Setup Phase
                        </a>
                        <IndentedOl includeNumber={false} className="table-of-contents">
                            <TableOfContentsLi>
                                <a href="#job-postings">
                                    Job Postings
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#reconnaissance">
                                    Reconnaissance
                                </a>
                            </TableOfContentsLi>
                        </IndentedOl>
                    </TableOfContentsLi>
                    <TableOfContentsLi>
                        <a href="#action-phase">
                            Action Phase
                        </a>
                    </TableOfContentsLi>
                    <TableOfContentsLi>
                        <a href="#team-time">
                            Team Time
                        </a>
                        <IndentedOl includeNumber={false} className="table-of-contents">
                            <TableOfContentsLi>
                                <a href="#corporate-players">
                                    Corporate Players
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#runners">
                                    Runners
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#other-variables">
                                    Other Variables
                                </a>
                            </TableOfContentsLi>
                        </IndentedOl>
                    </TableOfContentsLi>
                </IndentedOl>
            </TableOfContentsLi>
            <TableOfContentsLi className="font-bold">
                <a href="#subgames">
                    Sub-games
                </a>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#council">
                            Council
                        </a>
                    </TableOfContentsLi>
                    <IndentedOl includeNumber={false} className="table-of-contents">
                        <TableOfContentsLi>
                            <a href="#establishing-the-agenda">
                                Establishing the Agenda
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#voting">
                                Voting
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#custom-agendas">
                                Custom Agendas
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#amending-agendas">
                                Amending Agendas
                            </a>
                        </TableOfContentsLi>
                    </IndentedOl>
                </IndentedOl>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#research">
                            Research
                        </a>
                    </TableOfContentsLi>
                    <IndentedOl includeNumber={false} className="table-of-contents">

                        <TableOfContentsLi>
                            <a href="#earning-research">
                                Earning research
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#spending-research-points">
                                Spending Research Points
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#deck-customisation">
                                Deck Customisation
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#custom-technologies">
                                Custom Technologies
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#sharing-research-points-technologies">
                                Sharing research points / Technologies
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#copying-stealing-destroying-technologies">
                                Copying / Stealing / Destroying Technologies
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#split-technologies">
                                Split Technologies
                            </a>
                        </TableOfContentsLi>
                    </IndentedOl>
                </IndentedOl>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#facility-defence">
                            Facility Defence
                        </a>
                        <IndentedOl includeNumber={false} className="table-of-contents">
                            <TableOfContentsLi>
                                <a href="#facility-types">
                                    Facility Types
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#protection-cards">
                                    Protection Cards
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#buying-cards">
                                    Buying Cards
                                </a>
                            </TableOfContentsLi>


                            <TableOfContentsLi>
                                <a href="#installing-protection-cards">
                                    Installing Protection Cards
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#directing-security">
                                    Directing Security
                                </a>
                            </TableOfContentsLi>
                        </IndentedOl>
                    </TableOfContentsLi>
                </IndentedOl>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#runs">
                            Runs
                        </a>
                    </TableOfContentsLi>
                    <IndentedOl includeNumber={false} className="table-of-contents">
                        <TableOfContentsLi>
                            <a href="#facility-choice">
                                Facility Choice
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#run-steps">
                                Run Steps
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#successful-runs">
                                Successful Runs
                            </a>
                        </TableOfContentsLi>
                        <TableOfContentsLi>
                            <a href="#timing">
                                Timing
                            </a>
                        </TableOfContentsLi>
                    </IndentedOl>
                </IndentedOl>
                <IndentedOl includeNumber={false} className="font-normal table-of-contents">
                    <TableOfContentsLi>
                        <a href="#other-runner-actions">
                            Other Runner actions
                        </a>
                        <IndentedOl includeNumber={false} className="table-of-contents">
                            <TableOfContentsLi>
                                <a href="#mercenary-work">
                                    Mercenary work
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#contract-work">
                                    Contract work
                                </a>
                            </TableOfContentsLi>
                            <TableOfContentsLi>
                                <a href="#recovery-actions">
                                    Recovery Actions
                                </a>
                            </TableOfContentsLi>
                        </IndentedOl>
                    </TableOfContentsLi>
                </IndentedOl>
            </TableOfContentsLi>
            <TableOfContentsLi className="font-bold">
                <a href="#acknowledgements">
                    Acknowledgements
                </a>
            </TableOfContentsLi>
            <TableOfContentsLi className="font-bold acknowledge">
                <a href="#glossary">
                    Glossary
                </a>
            </TableOfContentsLi>
        </IndentedOl>

        <h3 className="text-2xl" id="background">
            Background
            <Footnote name={footnoteCount++}>
                The rulebook starts here, because the rest of the content
                doesn&apos;t make sense unless you know the context of the
                setting and what people are doing.
                <br/>
                <br/>
                You also have to remember that a megagame is not a large-scale
                board game - it shares more in common with a tabletop RPG
                than is immediately apparent
            </Footnote>
        </h3>

        <p>
            This section gives a <em>brief</em> description of the general
            setting for Running Hot. For more information, please see the
            general lore description. This section is kept brief so that players
            who don’t have time to read the full lore have a vague idea at least
            as to what’s going on!
            <Footnote name={footnoteCount++}>
                A very important paragraph! Running Hot has a whole bunch of
                lore, which all players have access to (mainly related to the
                different factions), but I know that I don&apos;t read all the
                lore for the games I play so this paragraph is for the
                players like me.
            </Footnote>
        </p>

        <h4 className="text-xl" id="whats-the-background">
            What’s the background?
        </h4>
        <p>
            Running Hot is a “pre-cyberpunk” megagame. Players will play either
            the corporations who are trying to make money and further their
            political agendas or the runners who are the deniable resources that
            the corporations may use to achieve said resources. This game takes
            a slightly different tack to most cyberpunk settings, in that the
            game will explore the <em>beginning</em> of the dystopia that is to
            be expected of the setting.
            <Footnote name={footnoteCount++}>
                I include this because Cyberpunk has a certain brand and
                set of tropes, some of which I was including and a lot of which
                I intentionally <em>wasn&apos;t</em>.<br/>
                <br/>
                Running Hot is asking whether that cyberpunk dystopia is an
                inevitable endpoint of a nation selling out to corporations. At
                the time of writing, I think dystopia ended up happening 3 times
                out of 5?
            </Footnote>
        </p>

        <h5 id="welcome-to-procatorion">
            Welcome to Procatorion
            <Footnote name={footnoteCount++}>
                This is a lot of general scene setting. It&apos;s useful to have
                something like this as part of your advertising - if you look
                at all of the places where Running Hot been advertised
                you&apos;ll see this text here.<br/>
                <br/>
                Why is it here in the rulebook as well? Mainly to reinforce that
                information - the time between signing up for the game and the
                players reading this book is many months, so they&apos;ve probably
                forgotten it.
            </Footnote>
        </h5>

        <p>
            In the far future, the economy of Britain is struggling. Government
            debt is at an all time high with no end in sight, GDP has tanked and
            unemployment has skyrocketed. Five years earlier, the United States
            of America suddenly had resurgence of their economic prowess from a
            similar situation which they attribute to the “Megacorp” experiment.
        </p>

        <p>
            Several corporations paid a significant sum of money to the United
            State government to buy a parcel of land to create their own
            microstate inside Kansas called Pacital. Under international law,
            the state was treated as an extension of the USA but domestically
            they are treated separately - they have their own laws and their own
            government. Amenities and municipal works are controlled by the
            corporations.
            <Footnote name={footnoteCount++}>
                As has been pointed out to me <em>many</em> times, this makes no
                sense.
                <br/>
                <br/>
                The game intentionally handwaves a lot of that information - a
                player doesn&apos;t need it, and attempting to explain it would just
                be even more confusing and filled with holes that people would
                pick up.
                <br/>
                <br/>
                What I&apos;m saying is: handwaving information is <em>very</em>
                valuable.
            </Footnote>
        </p>

        <p>
            Within 12 months the American economy recovered to a staggering
            degree - the ability for the corporations to write their own laws
            gave them considerable leeway to create new technologies and further
            their own global agendas. A significant proportion of the latest
            consumer goods have come from the Pacital.
        </p>

        <p>
            But such unbridled capitalism comes at a cost. Rumours of illegal
            research, a cold uncaring state that chokes out all but the very
            rich from a fulfilling life and a constant threat of violence are
            whispered on the international stage. The Council of Pacital denies
            such rumours, though any attempts from global agencies to
            investigate (or infiltrate) have lead nowhere.
        </p>

        <p>
            Britain is desperate. Against much internal pressure, it passed the
            “Megacorp Act” 6 months ago and 4 corporations paid a significant
            sum of money to buy several thousand square miles near Sheffield
            <Footnote name={footnoteCount++}>
                This also makes no sense, but it <em>is</em> very funny to me.
            </Footnote>. Running Hot begins 6 months after the act is passed in
            Parliament. It is the opening day of the new state called
            “Procatorion”
            <Footnote name={footnoteCount++}>
                Need a name for something? Just throw it into an anagram
                generator. As far as I know, nobody spotted this was
                an anagram of Corporation.
            </Footnote> and the
            dawn of a new era in British history. Whether this will be a success
            or not is up to you.
        </p>

        <h4 className="text-xl" id="rules">
            Rules
        </h4>

        <p>
            As with many megagames, in this game there are some relatively
            simple rules that provide some framework and give players some
            universal expectations about the nature of how to play – but these
            are not the totality of the game.
        </p>

        <p>
            As part of the simulation, players have the freedom to suggest
            actions to Control that are not obviously covered by the game rules.
            If reasonable, Control will typically give you the opportunity to
            do/try it at some cost and/or risk of failure. Player ingenuity that
            grows outside of this rulebook is not only anticipated, but very
            much encouraged!
            <Footnote name={footnoteCount++}>
                Running Hot was originally designed for a convention where the
                number of people who&apos;d played a megagame was going to be
                close to zero. I wrote this to try and nudge people into doing
                the things that make fun megagame stories. I&apos;m unsure
                whether it worked, but I would encourage including some text
                telling people that they can do nonsense - there&apos;s nothing
                worse than hearing a new player go &quot;Oh, I didn&apos;t
                realise I could do that&quot; near the end of a game
            </Footnote>
        </p>

        <p>
            Keep in mind however that while there is this flexibility in how you
            play the game this is not a game where “anything goes”. Random acts,
            doing things “just for laughs” or “just because you can” are really
            not in the spirit of the game. This kind of behaviour will have the
            same impact that it would have in the real world. Be careful – every
            action has reactions and (unintended) consequences.
            <Footnote name={footnoteCount++}>
                This is a very important warning - there&apos;s a difference between a player going off being a little
                chaos gremlin (as I have the completely unfair reputation as having), and someone taking a baseball bat
                to the whole game and ruining everyone&apos;s day.
                <br/>
                <br/>
                Encourage players to act in the spirit of the game you want.
                Unbridled freedom is less fun than people think.
            </Footnote>
        </p>

        <h4 className="text-xl">
            What do I need to focus on?
            <Footnote name={footnoteCount++}>
                This was a late addition to the rulebook after a playtest. There
                are a <em>lot</em> of rules (the rulebook is about 30 pages I
                think, which is about 10 pages too long) and several people
                found it difficult to understand the game.
                <br/>
                <br/>
                Some people will want to read everything and make a mental
                map of how the game slots together, but some people will quite
                rightly only care about the rules for the mechanics they&apos;ll be
                interating with.
                <br/>
                <br/>
                If you can&apos;t write a smaller rulebook (though if you can&apos;t, is
                your game too complicated?), then include a section like this so
                people can skim everything that&apos;s not important to them.
            </Footnote>
        </h4>

        <p>
            This rulebook is separated out into several sections, some of which
            will be more relevant to some roles than others. Depending on the
            role you have, you should make sure you’re familiar with the
            relevant sections:
        </p>

        <DescriptionList list={[
            {
                title: "Corp CEO",
                content: <React.Fragment>
                    <p>You should read: </p>
                    <IndentedUl>
                        <li>
                            <a href="#corporate-players">Corporate Players</a>
                        </li>
                        <li>
                            <a href="#council">Council</a>
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
            {
                title: "Corp Security",
                content: <React.Fragment>
                    <p>You should read:</p>
                    <IndentedUl>
                        <li>
                            <a href="#corporate-players">
                                Corporate Players
                            </a>
                        </li>
                        <li>
                            <a href="#facility-defence">
                                Facility Defence
                            </a>
                        </li>
                        <li>
                            <a href="#runs">
                                Runs
                            </a>
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
            {
                title: "Corp Research",
                content: <React.Fragment>
                    <p>You should read:</p>
                    <IndentedUl>
                        <li>
                            <a href="#corporate-players">
                                Corporate Players
                            </a>
                        </li>
                        <li>
                            <a href="#research">
                                Research
                            </a>
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
            {
                title: "Runners",
                content: <React.Fragment>
                    <p>You should read:</p>
                    <IndentedUl>
                        <li>
                            <a href="#runners">
                                Runners
                            </a>
                        </li>
                        <li>
                            <a href="#runs">
                                Runs
                            </a>
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
            {
                title: "Freelancers",
                content: <React.Fragment>
                    <p>You should read:</p>
                    <IndentedUl>
                        <li>
                            <a href="#facility-defence">
                                Facility Defence
                            </a>
                        </li>
                        <li>
                            <a href="#runs">
                                Runs
                            </a>
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
            {
                title: "Other roles",
                content: <React.Fragment>
                    <p>You should read:</p>
                    <IndentedUl>
                        <li>
                            <a href="#turn-structure">
                                Turn Structure
                            </a>
                        </li>
                        <li>
                            Any of their special rules that were included your
                            briefing
                            <Footnote name={footnoteCount++}>
                                You&apos;d think this was a given, but you never know
                            </Footnote>
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
        ]}/>

        <h3 className="text-2xl">
            Turn Structure
            <Footnote name={footnoteCount++}>
                The rulebook is structured as general information, that then drills down into more specific information.
            </Footnote>
        </h3>

        <p>
            Turns for Running Hot have three phases.
        </p>

        <DescriptionList list={[
            {
                title: "Setup (15 minutes)",
                content: "This phase is the chance for players to do any setup that they need to do. Corporate players may also provide jobs for runners, by posting them on the official jobs board or by direct contact with the runners in question."
            },
            {
                title: "Action (15 minutes)",
                content: "This phase is the chance for players to act out their machinations."
            },
            {
                title: "Team Time (5 minutes)",
                content: "This is a chance for you to catch up with the rest of your team and discuss any future strategies that you may need to enact following the events of the previous turn. Any upkeep that is required will also be run by control."
            },
        ]}/>

        <h4 className='text-xl' id='setup-phase'>
            Setup Phase
        </h4>
        <p>
            The Setup Phase is designed to allow players to prepare for the upcoming action phase. During this time
            players will buy equipment or prepare for any runs that are upcoming.
        </p>
        <DescriptionList list={[
            {
                title: "CEO",
                content: "The council will meet to discuss any new laws that have been proposed."
            },
            {
                title: "Security",
                content: "You may buy and install protections for your various facilities."
            },
            {
                title: "Research",
                content: "You may discuss and trade with other researchers. You may also cash in any research points (see page 36)."
            },
            {
                title: "Runners",
                content: "You may buy equipment, either from the market or from other players."
            }
        ]}/>
        <h5 className='text-lg' id='job-postings'>
            Job Postings
            <Footnote name={footnoteCount++}>
                This is a rule that sounds really great when you come up with it, but doesn&apost;t really work in
                practice. Can you spot the point where even the rulebook says this is a bad idea?
            </Footnote>
        </h5>
        <p>
            This is also an opportunity for runners to pick up work. Any Corporate player can publish a job on the jobs
            board to request a runner and any runner may make contact with a Corporate player to receive further
            information about the run that they’ve posted. Players may skip the job posting step if they have a specific
            contact they wish to pursue.
        </p>
        <p>
            To place a job posting on the board, a Corporate player should inform Control (either by a direct message or
            in your specific team channel). A job posting will contain the following information:
        </p>
        <DescriptionList list={[
            {
                title: "Requestor",
                content: "The character that has requested the job"
            },
            {
                title: "Fee",
                content: "The amount that the Corporation is willing to pay"
            },
            {
                title: "Job description",
                content: "A description of the job. The amount of detail is up to player discretion."
            },
            {
                title: "Turn placed",
                content: "The turn that the job was posted"
            },
        ]}/>
        <p>
            Control will place the information in the Job Posting channel. Runners may then make contact with the
            Corporate player in question to request further details and accept the job.
        </p>
        <p>
            The Job Posting channel is intentionally hidden from Corporations. Information on jobs that have been posted
            are visible only to runners, though runners may pass the information to Corporate players (but this cannot
            be in the form of a screenshot).
        </p>
        <p>
            Control will remove jobs during Team Time of the turn after the job was posted - if the job in question
            should be treated as still active, inform Control and they will update the “Turn placed” information. If
            possible, Corporate players should ask Control to remove jobs from the jobs board once they are no longer
            relevant.
            <Footnote name={footnoteCount++}>
                Did you spot the line? It&apos;s this one:
                <q>
                    Players may skip the job posting step if they have a specific contact they wish to pursue.
                </q>
                . The intention was that players use the job posting mechanic to initiate a relationship with a runner
                and then use that for the rest of the game - but its just faster to go speak to a runner randomly and
                get going that way.
            </Footnote>
        </p>

        <h5 className='text-lg' id='reconnaissance'>
            Reconnaissance
            <Footnote name={footnoteCount++}>
                I&apos;m of the opinion that there are two very subtle but important components in all megagames, one of
                which is players themselves but the other is information. This mechanic exists to provide information to
                people.
            </Footnote>
        </h5>

        <p>
            Players with the “Reconnaissance” ability may also do recon work during the setup phase to investigate a
            facility or Corporation
            <Footnote name={`Footnote ${designerCount++}`}>
                The number of times a player may do that will be limited by the ability text
            </Footnote>
            . Their ability will specify any additional costs that need to be paid and how to perform the action.
            The basic types of reconnaissance are:
        </p>
        <DescriptionList list={[
            {
                title: "Facility protection",
                content: <React.Fragment>
                    You pick a facility. If your reconnaissance action is a success, you may look at a number of
                    protection cards as specified by the ability
                </React.Fragment>
            },
            {
                title: "Facility contents",
                content: <React.Fragment>
                    You pick a facility. If your reconnaissance action is a success, you may look at a number of
                    technology cards installed in the facility and receive a “Technology Location” card for any
                    technologies you access.
                </React.Fragment>
            },
            {
                title: "Research",
                content: <React.Fragment>
                    You specify a Corporation and a technology. If your reconnaissance action is a success you are told
                    which facility that technology is stored in and receive a “Technology Location” card (less powerful
                    reconnaissance actions will give a selection of facilities).
                    <Footnote name={footnoteCount++}>
                        This ends up being the weakest of the three, despite appearing quite strong, though not for any
                        reasons that are obvious from this rulebook. In game, nobody actually has the information needed
                        to make this ability work, which is the name of a technology.
                        <br/>
                        <br/>
                        The lesson to learn here is if you have a mechanic, make sure people can actually use it when
                        you&apos;re building your components. In this case, all I need to do is provide a technology
                        list (or similar) as part of this ability.
                    </Footnote>
                </React.Fragment>
            },
        ]}/>

        <p>
            Performing a reconnaissance action is also risky - if you don’t take care while investigating a facility
            then you might find that the relevant Security player has been informed about the breach and thus taken
            actions to make your information outdated. On the other hand, you might find that it’s much easier for you
            to hit your real target if Security think you’re going for something else.
            <Footnote name={footnoteCount++}>
                This is a really subtle hint to the &quot;correct&quot; way to play this game for the Security / Runner
                roles. So much of the design of this game is the &quot;shell game&quot; aspect, and outwitting your
                opponents with misdirection is probably one of the best ways to do it.
                <br/>
                <br/>
                Obviously, you shouldn&apos;t tell players how to play the game and let them work it out themselves, but
                dropping subtle hints to get them on the right track so people aren&apos;t at too much of a disadvantage
                is a good idea in my opinion.
            </Footnote>
        </p>

        <h4 className='text-xl' id='action-phase'>
            Action Phase
        </h4>
        <DescriptionList list={[
            {
                title: 'CEO',
                content: <React.Fragment>
                    The council will vote on the turn’s laws (<a href='#council'>page XX</a>)
                    <Footnote name={footnoteCount++}>
                        Do these links exist because I was using LaTeX and it was really easy to set them up? Or did I
                        do it because it makes the rulebook a lot easier to read? A slight amount of column A and column
                        B. I like cross-referencing rules together, and it does mean you think about the way the game
                        links together while writing it.
                        <br/>
                        <br/>
                        Especially in this case, it means that as a player I can see what I&apos;ll be doing in a
                        certain phase and just jump directly to that section directly.
                    </Footnote>
                </React.Fragment>
            },
            {
                title: 'Security',
                content: <React.Fragment>
                    They will fend off any incursions from Runners (<a href='#facility-defence'>page XX</a>)
                </React.Fragment>
            },
            {
                title: 'Research',
                content: <React.Fragment>
                    The researchers will play the research game (<a href='#research'>page XX</a>)
                </React.Fragment>
            },
            {
                title: 'Runners',
                content: <React.Fragment>
                    Runners will attempt to steal from Corporations (<a href='#runs'>page XX</a>) or take on other work
                    (<a href='#other-runner-actions'>page XX</a>)
                </React.Fragment>
            }
        ]}/>

        <p>
            The sub games are explained in more detail in <a href='#subgames'>chapter 3</a>.
        </p>

        <h4 className="text-xl" id="team-time">
            Team Time
        </h4>

        <p>
            Team time is the chance for Control to catch up and update the various resource trackers. During this
            time, <em>all</em>players must return to their team channels and remain there until the end of the phase.
            Control will do different things for different players.
        </p>

        <h5 className='text-lg' id='corporate-players'>
            Corporate Players
        </h5>

        <p>
            Control will update the following variables
            <Footnote name={footnoteCount++}>
                There is absolutely no defence for using the word variable here. I should have used trackers instead.
            </Footnote> for each Corporation in turn. They will also inform you of any
            commands or feedback from your board of directors.
        </p>

        <h6 className="font-bold" id='income'>
            Income
        </h6>

        <p>
            Your Income is based in part on your stock price, which will hopefully rise as the game continues. Your
            stock price can rise for all sorts of reasons, for example:
            <Footnote name={footnoteCount++}>
                Examples are invaluable, both to players and Control. They give the sense of what they need to do to
                affect things, and it should hopefully make it clear how they&apos;ll be rewarded.
                <br/>
                <br/>
                Not included here is the sense of how much movement should be expected - make it clear to your Control
                team the magnitude of these tracks (is 3 a large amount? Is 10?)
            </Footnote>
        </p>

        <IndentedUl>
            <li>
                You successfully negotiated a contract with the UK government to supply the civil service with androids
                to man the phone lines.
            </li>
            <li>
                You have recently started selling a new line of security systems.
            </li>
            <li>
                You have begun a <span className="line-through">propaganda</span> publicity campaign to highlight the
                good that your company does.
                <Footnote name={footnoteCount++}>
                    I am strongly of the belief that putting jokes in your examples is beneficial to all parties,
                    especially you as the designer, because these things take an age to write as it is so you may as
                    well make yourself laugh in the process.
                </Footnote>
            </li>
        </IndentedUl>

        <p>
            Of course, your Income could fall if bad things start happening to your company - perhaps you built the
            androids cheaply to maximise your profits leading to the government utilising a penalty clause in the
            contract to cancel the rest of the order and buy from a competitor, or your stock certificates have been
            stolen from your Corporate facilities.
        </p>

        <p>
            As would be expected, the more Income you have, the more money you will receive each turn. After Income is
            updated, your team’s spreadsheet will be updated with the money for the turn.
        </p>

        <p>
            A Corporation’s Income is considered to be Public knowledge as it is directly linked to your stock price,
            but your current assets - including the amount of money your Corporation has - are considered Secret.
            <Footnote name={footnoteCount++}>
                I think the reason I did this was so you could <span className="italic">sort of</span> work out how much
                money someone had while planning your assault on them but it&apos;d always be fluffy. It probably works
                but I
                don&apos;t think it really needs including to this level.
            </Footnote>
        </p>

        <p>
            As your Income is linked to your stock price, keep in mind that your stock price is heavily influenced by
            your general reputation - the stories run by the press may have a small impact on your Income.
            <Footnote name={footnoteCount++}>
                For me, a megagame runs on two layers, the narrative layer and the mechanical layer. The narrative layer
                is the &quot;fluff&quot; around players actions - for example the above examples are basically all fluff
                - and the mechanical layer is where the rules lie.
                <br/>
                <br/>
                The narrative layer is more interesting - that&apos;s where the stories are after all - but the game
                doesn&apos;t
                work without both of them. It&apos;s usually pretty easy to make the mechanical layer interact with the
                narrative layer, but vice versa can sometimes be challenging, especially if players don&apos;t realise
                it&apos;s
                an option.
                <br/>
                <br/>
                Here, I&apos;m calling out that the press (who are almost always entirely on the narrative layer) can do
                useful things for you. Again, this comes out from the fact this was originally written for a
                non-megagaming audience who might not appreciate the power of the press.
            </Footnote>
        </p>

        <h6 className="font-bold" id='political-will'>
            Political Will
        </h6>

        <p>
            Political Will represents how much your Corporation is trusted and respected by the council members that are
            not represented by players. The more Political Will you have, the more sway you have in council decisions
            <Footnote name={footnoteCount++}>
                I think this is a really good mechanic and more Council games should include something like it. More on
                my feelings about designing Council games later
            </Footnote>
            . Similar to Income, Political Will rises and falls based on your actions. For example:
        </p>
        <IndentedUl>
            <li>
                You create a strategic partnership with another Corporation, where you provide the software and they
                provide the hardware for a new series of military bots.
            </li>
            <li>
                You agree to move out of a certain market in return for another Corporation moving out of a different
                one.
            </li>
        </IndentedUl>

        <p>
            Keeping your word is its own currency. Reneging on deals that have been made just because they weren&apos;t
            officially binding will lead to you having a reputation for being untrustworthy, whereas keeping your word
            will foster cooperation.
            <Footnote name={footnoteCount++}>
                I was attempting to discourage people from being complete and utter arseholes here.
            </Footnote>
        </p>

        <p>
            There is a difference between trustworthiness and being a pushover - having a strict stance in negotiations
            to protect your bottom line is to be expected and will not be penalised (indeed, not doing so would be
            looked down on by your board).
            <Footnote name={footnoteCount++}>
                I wanted to be clear about how Control would enforce this mechanic. It wasn&apos;t about you always
                getting your way or surrendering to bad deals so you could say &quot;Look at how good I am at working
                together&quot;.
            </Footnote>
        </p>

        <p>
            Press may also have an effect on your Political Will - if they continually run stories about you being
            untrustworthy, don’t be surprised to see this drop!
        </p>
        <h5 id='runners'>
            Runners
        </h5>

        <p>
            Control will update the following variables for you. They will also inform you of any of the goings on in
            Procatorion that you need to be aware of.
        </p>

        <h6 className="font-bold" id='gang-notoriety'>
            Gang Notoriety
        </h6>

        <p>
            Each runner is affiliated with a gang. The more Notoriety your gang has, the more people know who you are
            and respect you. As members of your gang successfully complete runs or perform other actions, the Notoriety
            of your gang will go up.

        </p>
        <p>
            Although being known for completing runs is the main way for your Notoriety to increase, other actions could
            have a positive impact on your Notoriety:
        </p>

        <IndentedUl>
            <li>
                You prevent “law enforcement” from extorting some local businesses
            </li>
            <li>
                You scavenge some parts during a run and build some new technology that you can use on future runs
            </li>
        </IndentedUl>

        <p>
            Being in a well-known gang may confer certain benefits, as dictated by Control when the time calls for it.
            If you believe that your Notoriety should have an effect on a certain interaction, make the case with
            Control.
            <Footnote name={footnoteCount++}>
                Notoriety is the old trick of having a tracker that is entirely meaningless to the game, but it does
                give people a way of comparing themselves to someone which is primarily useful for the friend / rival
                mechanic. I did want to allow people to use it if they wanted to, so included this text here. In
                practice, I don&apos;t think anyone ever did?
                <br/>
                <br/>
                Be careful with trackers like this. Add too many and players will be overwhelmed. However, this is a
                nice layer of spice that can be used to fuel a lot of role-playing.
            </Footnote>
        </p>

        <p>
            Press players also have a significant impact on Notoriety - if the press are giving lots of good stories
            about you or your gang, then you can expect your Notoriety to rise. Likewise, if they consistently run bad
            stories then your Notoriety will fall. For example:
        </p>

        <IndentedUl>
            <li>
                The Business Times running a story about how your gang has caused major havoc for
                one of the Corporations, increasing your Notoriety.
            </li>
            <li>
                Th3 Undergr0und runs a story about how everyone in your gang left another one in the
                lurch, decreasing your Notoriety.
                <Footnote name={footnoteCount++}>
                    Note that these examples use the two different press teams - The Business Times is the Corp
                    newsletter, Th3 Undergr0und is the Runner newsletter - and show how a story in the Business Times
                    that reports something different can be used to affect notoriety.
                </Footnote>
            </li>
        </IndentedUl>

        <h6 className="font-bold" id='wounds-and-tags'>
            Wounds and Tags
        </h6>

        <p>
            During Team Time, you recover one Wound for free (you may do this manually by updating your spreadsheet).
            <Footnote name={footnoteCount++}>
                If a played <em>can</em> do something themselves, then just let them. Doing this for 16 players would be
                a nightmare.
            </Footnote>
        </p>

        <p>
            Tags are harder to remove without taking drastic actions. You may choose to pay 3 credits to Control to
            remove a single Tag during Team Time.
        </p>

        <h5 className='text-lg' id='other-variables'>
            Variables
        </h5>

        <p>
            There are various other variables that exist in this world. Some of these will be updated during Team Time,
            while others will be updated as and when Control deems it appropriate.
        </p>

        <h6 className="font-bold" id='stability'>
            Stability
        </h6>

        <p>
            Procatorion is very much an experiment by the UK Government. The wording of the Megacorp Act includes
            provisions for the UK Government to retake Procatorion if it the Corporations are causing problems.
        </p>

        <p>
            As the day goes on, various actions will cause this to rise and fall. If this drops to 0, then the UK
            Government will begin taking steps to close down Procatorion
            <Footnote name={footnoteCount++}>
                This is another old megagame design trick - add a tracker where it is implied bad things will happen if
                it hits 0, and watch players scramble about to try and raise it when it gets low so you never need to
                worry about what you should do if it does.
                <br/>
                <br/>
                I&apos;m being slightly facetious here (I did have a rough plan to enact if Stability dropped like a
                stone), but unless your game is about the tracker hitting 0 then you can likely get away with not
                writing that situation.
            </Footnote>
            . For example:
        </p>
        <IndentedUl>
            <li>
                An undercover journalist writes up an expose on the weapons that a Corporation is building which have
                been exported to a country that has a reputation for suppression of speech. Stability decreases from 6
                to 4, as questions are asked in Parliament.
                <Footnote name={footnoteCount++}>
                    I include the scale of these changes here instead of handwaving them like I normally do - I thought
                    it was important that players understood the scale of the actions.
                </Footnote>
            </li>
            <li>
                The Council of Procatorion begin live streaming their debates, and they become a regular fixture on the
                evening news. The decorum and respect that the members show for each other is a stark contrast to the UK
                Government, and Stability rises from 6 to 7.
            </li>
        </IndentedUl>

        <p>
            It is an open secret that the UK Government are trying to avoid taking an active interest in Procatorion
            unless they have to. The UK Government are willing to take a risk that the illegality and subsequent bad
            press that they have to endure will be worth it to bring the economy back.
            <Footnote name={footnoteCount++}>
                This is me saying that the game is not about the tracker hitting 0, and that players can get away with a
                bit of shady behaviour.
            </Footnote>
        </p>

        <h6 className="font-bold" id='civil-unrest'>
            Civil Unrest
        </h6>

        <p>
            Although Procatorion is not a direct democracy like the rest of the UK, the needs and wants of the general
            populace are not to be ignored. The Council of Procatorion have been given leeway to be the centre of all
            power and make decisions, but only CEOs of large companies have seats at the council.
        </p>

        <p>
            If decisions are made by the CEOs which make the general populace unhappy, then Civil Unrest will increase,
            which may have negative effects on the Stability of Procatorion (and in extreme cases, riots may occur). On
            the other hand, getting the populace on side may help convince the UK Government to repeat the experiment
            and to keep their hands off Procatorion.
            <Footnote name={footnoteCount++}>
                Looking back on this, Stability and Civil Unrest as so linked that having two separate trackers was a
                bit messy. What I really wanted was a way of showing unhappiness which would then affect the Stability
                tracker later.
            </Footnote>
        </p>

        <h3 className="text-2xl" id='subgames'>
            Sub-games
        </h3>

        <p>
            The various sub games are described in depth here.
        </p>

        <h4 className="text-xl" id='council'>
            Council
        </h4>

        <p>
            The Council is split into two sections - the establishing of the agenda to be discussed (at the beginning of
            the Setup Phase) and subsequent voting (during the Action Phase).
            <Footnote name={footnoteCount++}>
                I have a couple of strong opinions on councils. They&apos;re a standard megagame trope to fill out the
                time for a group of players, but they regularly don&apos;t provide a fun time and get isolated from the
                rest of the game.
                <br/>
                <br/>
                Isolation is a key thing to worry about when it comes to councils - if you need one for any reason (and
                they <em>are</em> good!), try to make sure your council has answers to the following questions:
                <br/>
                1) Does your council have a mechanical backing? If not, then it&apos;s easy for the loud and obnoxious
                players to stomp over everyone else. Running Hot has political will, which means that your power ebbs
                and flows during the game.
                <br/>
                2) Is it easy to stonewall the session? If so, then people will have a bad time because they&apos;re
                unable to do anything - and in this game all they <em>can</em> do is be on the council! Running Hot
                solves this by forcing a decision at the end of each turn.
                <br/>
                3) Are their decisions meaningful? If the effects of the Council aren&apos;t felt in the rest of the
                game, then essentially you&apos;ve locked someone in a room for 20 minutes and waved some sparklers at
                them. The rules don&apos;t enforce this, but the agendas in game do. It&apos;s also an explicit part of
                Council Control&apos;s brief to inform us of those game state changes
                <br/>
                4) Does the Council happen at the same speed at the rest of the game? If not, then immediately number 3
                is out. There&apos;s an in-built lag between an event happening in game and the Council making a
                decision, so make sure your Council is as fast, <em>if not faster</em>, than the rest of the game.
                Running Hot&apos;s solution is to brief Council Control to force agendas onto the mat.
            </Footnote>
        </p>

        <h5 className="text-lg" id='establishing-the-agenda'>
            Establishing the Agenda
        </h5>

        <p>
            At the beginning of the Setup Phase, each CEO player will take their place on the Corporate Council to
            discuss any current affairs and vote on the future of Procatorion. Control will begin by drawing 3 cards
            from the agenda deck and handing them to the Chair
            <Footnote name={`Footnote ${designerCount++}`}>
                The Chair of the Council rotates from turn to turn - this order will be announced by Council Control on
                the day.
            </Footnote>
            . The Chair chooses two of the agenda cards to be voted upon (the other is discarded).
        </p>
        <p>
            These are read out to the rest of the Council and left in the Council Chamber to be discussed. Players may
            then leave the Council Chamber at will, or they may wish to stay and begin a round table discussion about
            another aspect. However, 5 minutes after the phase has started the Council will go into recess and
            players <em>must</em>leave the Council Chamber.
            <Footnote name={footnoteCount++}>
                A subtly important rule. Councils can get very isolated from the rest of the game for multiple reasons.
                Especially online, players being stuck in a council chamber means that their team can&apos;t find them
                to discuss plans, and they&apos;re not available for any other diplomatic choices that need making.
                <br/>
                <br/>
                If you&apos;re writing a council game, consider including an enforced recess.
            </Footnote>
        </p>

        <h5 className="text-lg" id='voting'>
            Voting
        </h5>
        <p>
            During the Action Phase, the Council will then vote on the two agenda cards. To vote, write down the amount
            of Political Will you have and which way you are voting and submit it to the Chair
            <Footnote name={`Footnote ${designerCount++}`}>
                If an agenda has multiple resolutions, then players may split their Political Will as they see fit
                <Footnote name={footnoteCount++}>
                    An absolutely stupid rule, that I should never have written. It is just too complicated.
                </Footnote>
            </Footnote>
            - do this by typing it into the agenda channel. Votes are resolved by a simple majority, with ties
            being resolved by the Chair.
        </p>
        <p>
            The Chair will, by default, reveal how each Corporation voted. Certain agendas may be treated as requiring a
            confidential approach, in which case the chair can state that they will withhold the vote’s breakdown
            <Footnote name={`Footnote ${designerCount++}`}>
                The chair will still receive the individual breakdowns, and may pass information to other players as
                they see fit
            </Footnote>
            . This must be done <em>before </em>any votes are submitted - if any player has submitted votes publicly the
            vote <em>must</em>remain Public. Council members may of course petition the chair to make the vote secret.
        </p>
        <p>
            Although attendance at the Council is not technically mandatory, it is considered to be a greatly
            disrespectful action to not take your seat at the Council. Failing to appear promptly for either phase
            will have a negative impact on your Political Will.
            <Footnote name={footnoteCount++}>
                It never happened, but basically not showing up on time would signify that you didn&apos;t care, so
                people in turn didn&apos;t care about you
            </Footnote>
        </p>
        <h5 className="text-lg" id='custom-agendas'>
            Custom Agendas
        </h5>
        <p>
            Players may craft custom agenda items during the Setup Phase. To do so, send a message to Council Control
            with your agenda items and the resolutions. They may add any additional remarks as they see fit. If both the
            player and Control are in agreement with the content, then the player can submit this to the Chair.
        </p>

        <p>
            The Chair has the following options:
        </p>
        <DescriptionList list={[
            {
                title: 'Accept as an urgent item',
                content: <p>
                    The item is to be considered of utmost importance, and must be voted upon this turn. Add the card to
                    the list of cards that must be voted upon this turn. There may only be a maximum of 5 agenda items
                    to be voted upon - if 5 are already up for vote this turn, this option cannot be taken.
                </p>
            },
            {
                title: 'Accept as an important item',
                content: <p>
                    The Chair does not believe the item should be voted upon urgently, but should be considered for
                    future debate. At the beginning of the Setup Phase, the Chair may choose one item that was submitted
                    previously to be added to the list of cards that must be voted upon.
                </p>
            },
            {
                title: 'Reject the card',
                content: <p>
                    The Chair does not believe the item should be voted upon at all. The player who submitted the card
                    receives it back - they may submit it to a future Chair.
                </p>
            }
        ]}/>

        <h5 id='amending-agendas'>
            Amending Agendas
        </h5>

        <p>
            During the Setup Phase, the Chair may modify any resolutions mentioned on a card
            <Footnote name={`Footnote ${designerCount++}`}>
                Other players may of course petition the chair to make a change
            </Footnote>.
            The modifications to the resolutions can take whichever form you wish:
        </p>
        <IndentedUl>
            <li>
                You can choose to add a new resolution to the list of options. Each agenda may have a maximum of 5
                resolutions.
            </li>
            <li>
                You may choose to remove an existing resolution from the list of options. An agenda card cannot have
                less than 2 resolutions.
            </li>
            <li>
                You may modify an existing resolution to have different wording.
            </li>
        </IndentedUl>

        <p>
            Any changes that the Chair wishes to make must be signed off by Council Control.
            <Footnote name={footnoteCount++}>
                It&apos;s important to say that players can&apos;t just do what they want, especially in a council.
            </Footnote>
        </p>

        <h4 className="text-xl">
            Research
        </h4>

        <p>
            This subgame is for research players. During the Setup Phase the researchers will spend any research points
            that they have to create new technologies, and in the Action Phase will earn research points.
            <Footnote name={footnoteCount++}>
                Some of the wording for this rulebook is clunky and very much written like a board game. It&apos;s <span
                className="italic">fine</span>, but I could probably have written something better
            </Footnote>
        </p>

        <h5 className="text-lg" id='earning-research'>
            Earning research
        </h5>
        <p>
            During the Action Phase, research players should make their way to the research channel and Roll20 interface
            to play the research game. The object of the game is to create “equations” using their research deck and a
            collection of public cards.
        </p>
        <p>
            Each player draws 5 cards from their private research deck, and 6 cards are dealt out to a public pool. A
            turn order will be decided by Research Control randomly
            <Footnote name={`Footnote ${designerCount++}`}>
                If you feel you have some effect that will affect turn order, inform Research Control
                <Footnote name={footnoteCount++}>
                    Note that this is a regular instruction to players - if you think that you should be able to break
                    the rules because of something, let us know! We&apos;ve probably forgotten.
                </Footnote>
            </Footnote>
            . Players then begin playing, trying to make a balanced equation using at least one card from their hand and
            as many cards as they like from the public pool.
        </p>

        <p>
            When your turn begins, you attempt to make an equation. To make an equation you must make two sets of cards
            where:
        </p>
        <IndentedUl>
            <li>
                All the cards in a set have the same type of research (
                <FontAwesomeIcon icon={faLeaf}/> / <FontAwesomeIcon icon={faCog}/> /
                <FontAwesomeIcon icon={faBrain}/> / <FontAwesomeIcon icon={faCalculator}/>). Some cards are marked as
                wild and can be used as any type; and
            </li>
            <li>
                The number of cards in the first set is the same as the number of cards in the second set.
            </li>
        </IndentedUl>

        <p>
            For example, the following can be treated as equations:
            <Footnote name={footnoteCount++}>
                This mechanic is really simple, but difficult to write down in words. The examples here try to make that
                clear.
            </Footnote>
        </p>

        <IndentedUl>
            <li>
                7 <FontAwesomeIcon icon={faLeaf}/> / 3 <FontAwesomeIcon icon={faCalculator}/>
            </li>
            <li>
                6 <FontAwesomeIcon icon={faLeaf}/> 1 <FontAwesomeIcon icon={faLeaf}/> /
                3 <FontAwesomeIcon icon={faCalculator}/> 9 <FontAwesomeIcon icon={faCalculator}/>
            </li>
            <li>
                7 <FontAwesomeIcon icon={faLeaf}/> 8 <FontAwesomeIcon icon={faLeaf}/> /
                5 <FontAwesomeIcon icon={faCalculator}/> 10 <FontAwesomeIcon icon={faCalculator}/>
            </li>
        </IndentedUl>

        <p>
            If you successfully create an equation, then:
        </p>

        <IndentedUl className='itemize1'>
            <li>
                You draw cards from your deck to replace any used from your hand
            </li>
            <li>
                For each card from the public pool that was used, draw a card from the public deck and place into the
                pool.
            </li>
            <li>
                You score your equation. <em>Scoring can and should be done while other players are taking their
                turns.</em>
                <Footnote name={footnoteCount++}>
                    Where possible, let things happen simultaneously. Timing for a megagame is tight at the best of
                    times, so try and get the small speed ups where you can.
                </Footnote>
                <IndentedUl>
                    <li>
                        For each equation, you earn research points in one of the suits that you used to make the
                        equation (your choice if more than one), equal to the sum of the card values of that set. For
                        example:
                        <DescriptionList list={[
                            {
                                title: <React.Fragment>
                                    3<FontAwesomeIcon icon={faCalculator}/> / 3<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                                content: <React.Fragment>
                                    Either 3<FontAwesomeIcon icon={faCalculator}/> or 3<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                            },
                            {
                                title: <React.Fragment>
                                    1<FontAwesomeIcon icon={faCalculator}/>2<FontAwesomeIcon icon={faCalculator}/> /
                                    3<FontAwesomeIcon icon={faLeaf}/>4<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                                content: <React.Fragment>
                                    Either 3<FontAwesomeIcon icon={faCalculator}/> or 7<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                            },
                            {
                                title: <React.Fragment>
                                    1<FontAwesomeIcon icon={faCalculator}/>3<FontAwesomeIcon icon={faCalculator}/> /
                                    2<FontAwesomeIcon icon={faLeaf}/>2<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                                content: <React.Fragment>
                                    Either 4<FontAwesomeIcon icon={faCalculator}/> or 4<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>
                            },
                            {
                                title: <React.Fragment>
                                    1<FontAwesomeIcon icon={faCalculator}/> 1<FontAwesomeIcon icon={faCalculator}/> /
                                    12<FontAwesomeIcon icon={faLeaf}/>4<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                                content: <React.Fragment>
                                    Either 2<FontAwesomeIcon icon={faCalculator}/> or 16<FontAwesomeIcon icon={faLeaf}/>
                                </React.Fragment>,
                            }
                        ]}/>
                    </li>
                    <li>
                        For each “balanced” equation (i.e. both sides of the equation have the same total sum) you
                        receive bonus research points depending on how many cards used to make the equation is:
                        <IndentedUl>
                            <li>
                                1 on both sides: 1 bonus research points
                            </li>
                            <li>
                                2 on both sides: 3 bonus research points
                            </li>
                            <li>
                                3 on both sides: 6 bonus research points
                            </li>
                            <li>
                                4 on both sides: 10 bonus research points
                            </li>
                            <li>
                                And so on
                            </li>
                        </IndentedUl>
                        <p>
                            You may take these bonus research points in any combination of suits that you used to create
                            that equation.
                        </p>
                    </li>
                </IndentedUl>
            </li>
        </IndentedUl>

        <p>
            You continue to play turns in the research game until either:
        </p>

        <IndentedUl>
            <li>
                You have no cards left in your deck when you try to draw up your hand limit at the end of your turn. You
                may choose to leave the research channel if you wish (e.g. to speak to another player - though most are
                likely to be resolving some action at the time!)
            </li>
            <li>
                The phase end is called. If it is currently your turn, this is equivalent to your timer running out.
            </li>
        </IndentedUl>

        <h5 className="text-lg" id='spending-research-points'>
            Spending Research Points
        </h5>

        <p>
            After earning research points in the Action Phase, you may then spend research points to climb the tech
            tree. Each Corporation will receive their own tech tree at the beginning of the game, which will contain
            various research possibilities for you to pursue
            <Footnote name={`Footnote ${designerCount++}`}>
                As each Corporation has slightly different focuses the tech trees will be different, though there are
                some technologies common to all Corporations
            </Footnote>
            . Each item is made up of several attributes:
        </p>

        <DescriptionList list={[
            {
                title: 'Name',
                content: 'The name of the research (for example, “Laser Porridge”)'
            },
            {
                title: 'Description',
                content: 'A brief description explaining what the research proposition is (for example, “Test whether a laser could be used to heat up porridge safely”)'
            },
            {
                title: 'Cost',
                content: ' How much the research will cost, in the 4 types of research points.'
            },
            {
                title: 'Prerequisites',
                content: 'Prerequisite technologies, if any.',
            },
            {
                title: 'Required Facilities',
                content: 'If a specific Facility will be required to house the resulting technology'
            }
        ]}/>

        <p>
            During the Setup Phase, you may spend the research points specified by updating your spreadsheet. You must
            then place this in one of your Facilities.
            <Footnote name={`Footnote ${designerCount++}`}>
                If you do not have any Facilities that this technology can be placed in, you may not research it
            </Footnote>
        </p>

        <p>
            Each Facility can only store a certain number of technologies, equal to 2 multiplied by the number of
            Corporate Facilities you have. If your Facilities are full, you will need to build more before you can
            research more technologies.
        </p>

        <p>
            Each technology will have a different benefit to you. For example, if you are the first to create “Self
            heating porridge”, then you can begin cornering the market in that which will surely Boost your profits. If
            you focus instead on security then the fruits of your labours can be used to protect your Facilities and
            potentially even your rivals if they’re willing to pay for the schematics.
        </p>

        <h5 className="text-lg" id='deck-customisation'>
            Deck Customisation
        </h5>

        <p>
            Each Corporation’s research deck begins as a fairly basic deck. You may instead spend your research points
            on adding cards to your deck or upgrading your existing cards. This will allow you to have a slightly more
            control over your research focus - for example filling your deck with more <FontAwesomeIcon
            icon={faLeaf}/> cards will make it easier to gain <FontAwesomeIcon icon={faLeaf}/> research points, or
            upgrading your existing cards might mean they provide more research points when used in an equation.
        </p>

        <p>
            The costs for this are denoted in your tech tree, and should be handled as if you are researching any other
            technology.
        </p>

        <h5 className='text-lg' id='custom-technologies'>
            Custom Technologies
        </h5>

        <p>
            The tech tree is not considered the totality of the possible research available to the players. You may
            build custom research proposals by speaking to Research Control. They will set a cost and it is will be
            added to your tech tree.
            <Footnote name={footnoteCount++}>
                Another case of nudging players into researching their own things.
            </Footnote>
        </p>

        <h5 className='text-lg' id='sharing-research-points-technologies'>
            Sharing research points / Technologies
        </h5>

        <p>
            Players may freely trade their research points between different Corporations. Whilst the amount of research
            points a Corporation have is semi-secret, players may trade however they wish (whether that be for other
            research points or money), by inputting it as a transaction in your spreadsheets.
        </p>

        <p>
            Players may also share technologies with other Corporations by speaking to Research Control.
        </p>

        <h5 className='text-lg' id='copying-stealing-destroying-technologies'>
            Copying / Stealing / Destroying Technologies
        </h5>

        <p>
            Technologies may be destroyed or stolen from other Corporations. As technologies are stored in Facilities, a
            Run can be initiated against the Facility in question. A Runner may then make a copy of the technology card,
            destroy it or steal it.
            <Footnote name={footnoteCount++}>
                Why is this included here? Partly so they appreciate the risk to their tech and the benefits of stealing
                tech from your opponents. In hindsight, it can probably go in the bin.
            </Footnote>
        </p>

        <IndentedUl>
            <li>
                If the card is copied, the copy can then be stored in a Facility
                <Footnote name={footnoteCount++}>
                    This does count as a technology when considering the number of technologies that a Facility can hold
                </Footnote>, and can be traded in to Research Control for a discount on the research cost (as decided
                by the strength of the copy)
            </li>
            <li>
                If the card is destroyed, the card can no longer be used by the Corporation who owned it (though they
                may be able to salvage their research afterwards).
            </li>
            <li>
                If the card is stolen, the Corporation that had the technology can no longer use it. The Runner can give
                this to a Corporation - the Corporation that now has the card must store it in their Facilities, and it
                can be shown to Research Control for a 50% discount on the research cost (rounding the resulting cost
                up).
            </li>
        </IndentedUl>

        <p>
            Copying technology is easier than stealing or destroying it, and stealing/destroying technologies require
            slightly different niche skill sets and gear - expect Runners to charge more for those services. For more
            details, see <a href='#successful-runs'>Successful Runs</a>
        </p>

        <h5 className='text-lg' id='split-technologies'>
            Split Technologies
        </h5>

        <p>
            Some technologies are split over multiple cards. These technologies are treated differently:
            <Footnote name={footnoteCount++}>
                This is a special case for 4-5 cards in the game, and this should just be included on those cards.
                Absolutely no point putting it in the rulebook.
            </Footnote>
        </p>

        <IndentedUl>
            <li>
                The Corporation that owns this technology can use it as long as they have at least one of the pieces for
                this technology
            </li>
            <li>
                If another Corporation steals or copies the technology, then they cannot use the technology until they
                collect all the pieces and research it
            </li>
        </IndentedUl>

        <h4 className='text-xl' id='facility-defence'>
            Facility Defence
            <Footnote name={footnoteCount++}>
                This is one of the largest bits of the rulebook, and is the bit I&apos;m both incredibly proud of and
                also think needs a real rework. It&apos;s so long and complicated and chunky and that kind of gets in
                the way of the rest of the game
            </Footnote>
        </h4>

        <p>
            Security players are primarily concerned with making sure that the research and technologies that their
            colleagues have built are kept safe from prying eyes. During the Setup Phase, Security players will create
            the defences that Runners will be attempting to break through. During the Action Phase, they will be able to
            make some additional decisions against the Runners based on the Protection Cards that they have installed
            (see <a href='#runs'>page XX</a>).
        </p>

        <p>
            Each Corporation will begin with a number of Facilities and some basic Protection Cards.
        </p>

        <h5 className='text-lg' id='facility-types'>
            Facility Types
        </h5>

        <p>
            Each Facility has a type
            <Footnote name={`Footnote ${designerCount++}`}>
                More Facility types may be researched during the game
            </Footnote>:
        </p>

        <DescriptionList list={[
            {
                title: 'Research',
                content: 'The more Research Facilities you have, the easier it will be for your research colleagues to research technologies. Certain technologies need to be housed here, specifically ones that would require precise conditions to keep them stable.'
            },
            {
                title: 'Security',
                content: 'The more Security Facilities you have, the easier it is for you to protect other Facilities. The more security Facilities you have, the more cards you can install in each of your Facilities. Military technologies will likely need to be housed here.'
            },
            {
                title: 'Corporate',
                content: 'This Facility is equivalent to your headquarters. The more Corporate Facilities you have, the higher your Income and Political Will is and the more technologies can be stored at each Facility .'
            }
        ]}/>

        <p>
            Facilities take a turn to build. To build a new Facility, the CEO must add a transaction for the cost of the
            Facility during the Setup Phase and inform your Control who will begin building the new Facility. It will
            become available during the next Setup Phase.
        </p>

        <h5 className='text-lg' id='protection-cards'>
            Protection Cards
        </h5>

        <p>
            Protection Cards are an abstraction of various methods of defending your Facilities. Cards are either
            “physical” defences such as guards or doors, or are “cyber” defences. A Protection Card has the following
            characteristics:
        </p>

        <DescriptionList list={[
            {
                title: "Cost",
                content: "The cost of buying this item",
            },
            {
                title: "Type",
                content: "The type (“physical” / “cyber”)",
            },
            {
                title: "Challenge",
                content: "Which skill a Runner will need to use to break this, and a difficulty. The higher the difficulty, the more dice you will roll",
            },
            {
                title: "Consequence",
                content: "The consequence to a Runner for not breaking this",
            },
            {
                title: "Charge",
                content: "An additional consequence you may force the Runner to pay if the Runner does not succeed",
            },
        ]}/>

        <p>
            The various effects are covered on <a href='#glossary'>page 77</a>.
        </p>

        <h5 className='text-lg' id='buying-cards'>
            Buying Cards
        </h5>

        <p>
            Security players will receive a list of cards that will available purchase at the start of the game.
            These will broadly fall in the following categories:
        </p>

        <IndentedUl>
            <li>
                Protection Cards that are available now
            </li>
            <li>
                Protection Cards that are rumoured to be in progress (and will become available later in the game)
            </li>
            <li>
                Protection Cards that require specialised research (and thus will not be available for general sale)
            </li>
        </IndentedUl>

        <p>
            Other Protection Cards may exist, but will only become available after certain game conditions have
            passed.
        </p>

        <p>
            There are two methods for obtaining Protection Cards:
        </p>

        <h6 id='corporation-shop'>
            Corporation Shop
        </h6>

        <p>
            The Corporation shop will be open during the Setup Phase. Control will announce the cards available for
            sale in the relevant Discord channel. These can be bought on a first come first served basis.
            <Footnote name={footnoteCount++}>
                An important rule in any megagame design is to add &quot;levers&quot; in the game, so that Control
                can help or hinder players as needed.
                <br/>
                <br/>
                Running Hot doesn&apos;t have a lot of these - it definitely needs more.
            </Footnote>
        </p>

        <p>
            Control may also decide to auction Protection Cards - in those cases the Security player who pays the
            most will receive a copy of the card.
        </p>

        <h6 id='research-cards'>
            Research Cards
        </h6>

        <p>
            As part of the research that your research player is doing, they may uncover new Protection Cards.
            Researching a new Protection Card will grant you one copy of that Protection Card for free. You can install
            or trade these cards as you wish.
            <Footnote name={footnoteCount++}>
                This is one of the ways that the game feeds into itself, and encourages the sort of conversation you
                want between a team (&quot;I&apos;ll keep your things safe, but I need some better gear!&quot;)
            </Footnote>
        </p>

        <p>
            You may also research that technology again (at a discount), which will allow you to gain more copies of
            that Protection Card.
        </p>

        <h5 className='text-lg' id='installing-protection-cards'>
            Installing Protection Cards
        </h5>

        <p>
            You may install a limited number of Protection Cards into each of your Facilities. By default a Facility may
            have 3 “physical” and 3 “cyber” Protection Cards. For each Security Facility you have, you may install 1
            more of each type of Protection Card in any given Facility you own.
        </p>
        <p>
            Installing a Protection Card into your Facility is free, but it must go on
            the <em>outside</em>of your Facility (if you have 2 cards and wish to install a 3rd, then this card will be
            encountered by the Runners first).
            <Footnote name={`Footnote ${designerCount++}`}>
                You should add this at the highest numbered layer on the spreadsheet.
            </Footnote>
            . However, you are only allowed <em>one</em>copy of each Protection Card (by card title) in a Facility.
        </p>
        <p>
            <strong>The order of installed Protection Cards is important and may not be changed without payment</strong>.
            If you wish to reorder your Protection Cards, you must pay 1 Credit for each Protection Card you wish to
            move. For example, if your Protection Cards are currently ordered A, B, C, and you wish to move A to the
            end, so that the order is B, C, A, the cost is one Credit, but if you wish to move both Protection Cards A
            and C, so that the order becomes C, B, A, the cost would be two Credits.
            <Footnote name={footnoteCount++}>
                This is a really fiddly rule that partly exists as a bit of a money sink, but mainly so that one of the
                currencies in the game (information) remains stable. If people were allowed to move things around then
                the information from your previous run is useless.
            </Footnote>
        </p>
        <p>
            You may also remove Protection Cards from your Facilities. On each turn, the first card you remove from a
            Facility is free - every subsequent card from that Facility costs 1 Credit.
            <Footnote name={footnoteCount++}>
                Here, losing that information is fine. The game has become &quot;easier&quot; for a Runner (in theory),
                and it allowed you to put something new behind your first protection card for free.
            </Footnote>
        </p>

        <p>
            For the purposes of installation, your “cyber” defences are considered separately from your “physical”
            defences - installing a new “cyber” card places it at the outermost “cyber” slot, installing a new
            “physical” card places it at the outermost “physical” slot. Runners will encounter your “physical”
            protections first before your “cyber” protections.
        </p>

        <h5 className='text-lg' id='directing-security'>
            Directing Security
        </h5>

        <p>
            During the Setup Phase, Security players should decide where they will be Directing Security and set a
            security budget for each of your Facilities. To Direct Security, check the &quot;Directing
            Security&quot; box on the Main tab of your spreadsheet in the row containing the desired Facility
            <Footnote name={footnoteCount++}>
                Another incredibly fiddly rule, that I don&apos;t think was necessarily followed. I like the decision it
                offers though.
            </Footnote>
        </p>

        <p>
            Directing Security at a Facility has two main benefits:
        </p>

        <IndentedUl>
            <li>Any “Charge” consequences may be used</li>
            <li>You may “Boost” the strength of a Protection Card</li>
        </IndentedUl>

        <p>
            Any portion of your security budget that is not spent is returned to you at the end of the Action Phase. To
            set a security budget, fill out your Facility spreadsheet with the appropriate value.
        </p>

        <h4 className='text-xl' id='runs'>
            Runs
            <Footnote name={footnoteCount++}>
                Argh. These rules are also incredibly long and complex, even though they boil down to a very simple set
                of rules. It&apos;s the best part of the game though, which is even more infuriating.
            </Footnote>
        </h4>
        <p>
            This is the primary conflict for Runners and Corporate players. The aim is for the Runners to get through
            the Facility, first breaking through the layers of physical security, then through the cyber security.
        </p>
        <p>
            Runs can be conducted by a single Runner or by a group of Runners. The more Runners there are, the easier it
            is for the defences to be broken though of course any rewards will need to be split. If a group of Runners
            are joining together to break into a Facility, then they must appoint a Run Leader (if the run is being
            conducted by a single Runner, they are considered the Run Leader).
            <Footnote name={footnoteCount++}>
                There are <strong>way</strong> too many keywords in this game, and almost all of them come from the run
                mechanic. This is the issue with stealing Android: Netrunner as a basis
            </Footnote>
        </p>

        <h5 className='text-lg' id='facility-choice'>
            Facility Choice
        </h5>
        <p>
            At the beginning of the Action Phase, Runners will make a decision about which Facility they are running
            against. To do this, in the <code>#run-organisation channel</code> use
            the <code>!run-Facility</code> command.
        </p>
        <p>
            Multiple groups may run against the same Facility, though the slower of the two groups may find that the
            Facility defences are already warmed up or the items they are looking for have already been stolen. Groups
            may voluntarily cede their run to the other group (or be otherwise monetarily convinced), if not then the
            Runs are ordered using the following priority
            <Footnote name={`Footnote ${designerCount++}`}>
                Players may have in game effects that they feel would affect this priority - if so ask Facility Control
            </Footnote>
            <Footnote name={footnoteCount++}>
                The number of times this came up is almost zero. People usually just work together, even if they
                weren&apos;t going to.
            </Footnote>:
        </p>
        <IndentedOl>
            <li>
                The group with the fewest people goes first
            </li>
            <li>
                The group with the most players from the gang with the highest Notoriety
            </li>
            <li>
                The group with the highest combined Brute
            </li>
            <li>
                The group with the highest combined Hack
            </li>
            <li>
                Whichever group’s Run Leader has the highest Brute
            </li>
            <li>
                Whichever group’s Run Leader has the highest Hack
            </li>
            <li>
                Whichever group’s Run Leader rolls the highest number on a d8
            </li>
        </IndentedOl>

        <p>
            After the Facilities to Run against are chosen, the Runners will go to each Facility and try to break
            through the security. The Run is considered successful if the Runners break through all the Protection Cards
            (first the physical, then the cyber). If they do not, then they are unsuccessful.
        </p>

        <p>
            At the beginning of the Run, Alerts are generated based on the number of Runners and the amount of Tags they
            have:
        </p>

        <IndentedUl>
            <li>
                For each Tag that opposing Runners have, an Alert is generated
                <Footnote name={footnoteCount++}>
                    Thematically, the tag means that they know where you are and can see you coming
                </Footnote>
            </li>
            <li>
                A number of Alerts based on the number of Runners in the group
                <DescriptionList list={[
                    {
                        title: "Single Runner",
                        content: "No bonus",
                    },
                    {
                        title: "2 Runners",
                        content: "1 Alert",
                    },
                    {
                        title: "3 Runners",
                        content: "2 Alert",
                    },
                    {
                        title: "4 Runners",
                        content: "4 Alert",
                    },
                    {
                        title: "5 Runners",
                        content: "7 Alert",
                    },
                    {
                        title: "6 Runners",
                        content: "11 Alert",
                    },
                    {
                        title: "More Runners",
                        content: "This will be calculated automatically by the spreadsheet",
                    },
                ]}/>
            </li>
        </IndentedUl>

        <h5 className='subsubsectionHead' id='items'>
            Items
        </h5>

        <p>
            Runners may use items to assist them during runs. These fall into 3 categories:
        </p>

        <DescriptionList list={[
            {
                title: 'Permanent',
                content: <React.Fragment>
                    These items must be equipped at the start of a run by playing it
                    using the <code>!play</code> command.
                    Your equipment is also limited:
                    <IndentedUl>
                        <li>
                            You may only equip 3 permanent items
                        </li>
                        <li>
                            You may only equip one copy of each card (by title)
                        </li>
                    </IndentedUl>
                </React.Fragment>
            },
            {
                title: 'This run',
                content: <React.Fragment>
                    This card’s effect lasts for the duration of the run. Afterwards, delete the card from your
                    spreadsheet. These can be used as you encounter Protection Cards.
                </React.Fragment>
            },
            {
                title: 'Single use',
                content: <React.Fragment>
                    This card’s effect is immediately applied. Afterwards, delete the card from your spreadsheet. These
                    can be used as you encounter Protection Cards.
                </React.Fragment>
            },
        ]}/>


        <h5 className='text-lg' id='run-steps'>
            Run Steps
        </h5>

        <p>
            A Run is made up of the following steps, repeated until either there are no more Protection Cards for the
            Runners to break or the Runners choose to back out
            <Footnote name={`Footnote ${designerCount++}`}>
                The number of Protection Cards that a Facility contains is Secret
            </Footnote>.
        </p>

        <IndentedUl>
            <li>Activate</li>
            <li>Challenge</li>
            <li>Consequence</li>
            <li>Breather</li>
        </IndentedUl>

        <p className='indent'>
            Each Runner in the Runner group may use <em>one</em> card (either a “This run” or “Single use”) during
            these steps. For example:
        </p>

        <IndentedUl>
            <li>
                Ryan is running solo. During the Activate step, Ryan uses a “Boost” card. They can not use another card
                until the next Activate step.
            </li>
            <li>
                Adal, Erin and John
                <Footnote name={footnoteCount++}>
                    Yes, this <em>is</em> a reference to the
                    podcast <a href="https://www.heyriddleriddle.com/" target="_blank" rel="noopener noreferrer">
                    Hey Riddle Riddle
                </a>
                </Footnote> are running as a group of three. During the Challenge step, Erin uses a “Surge”
                card, but still fails the check. During the Consequence step, Adal plays a “Flare” card to avoid the
                Tag. Neither of them can play any more cards until the next Activate step, though John can still play a
                card in the Breather step if he wishes.
            </li>
        </IndentedUl>

        <p>
            Some Protection Cards may have ambiguous targets (for example, a Protection Card may target the Runner with
            the most Tags). In these cases, unless otherwise specified the Run Leader makes the final decision.
            <Footnote name={footnoteCount++}>
                Another interesting rule, that never gets activated. The Run Leader makes all the decisions, but in
                practice it&apos;s a democracy. This exists so that we can try and hurry people along though.
            </Footnote>
        </p>

        <h6 id='activate'>
            Activate
        </h6>
        <p>
            At the beginning of the Action Phase, all Protection Cards are Inactive. Protections card become Active when
            the Runner(s) reach that card during a run.
        </p>
        <p>
            To activate a Protection Card, use the <code>!play</code> command to display the card to the Runners.
            Activating a physical Protection Card has no base cost, but activating a cyber Protection Card costs the
            number of already active cyber Protection Cards (so the first cyber Protection Card is free, the second
            costs 1, the third costs 2 and so on).
            <Footnote name={footnoteCount++}>
                There is way too much maths in this game, because it was written by me, and I did a degree in Maths.
                Having said that, the maths that does exist is fairly simple to calculate, but the amount is too much
                for a megagame.
            </Footnote>
        </p>
        <p>
            <em>Any activated Protection Cards remain active until the end of the Action Phase</em>. If there are
            multiple groups running against the same Facility, later groups will face the same cards which may have
            already been Activated and/or Boosted.
            <Footnote name={footnoteCount++}>
                This is probably why nobody ever took it in turns and grouped up.
            </Footnote>
        </p>

        <p>
            If the security player is Directing Security from this Facility, they may choose whether they wish to
            activate the current Protection Card. If they are not Directing Security, then they will attempt to Activate
            this card - if they are unable to pay the cost from the budget provided at the beginning of the Action Phase
            then the card will remain Inactive.
        </p>

        <p>
            The challenge strength can increase during the Run:
        </p>

        <IndentedUl>
            <li>
                For each 2 Active Protection Cards already passed by the Runners, the challenge strength is increased by
                1. For example:
                <IndentedUl>
                    <li>
                        The first and second active Protection Cards receives no bonus strength
                    </li>
                    <li>
                        The third receives 1 bonus strength (as the Runners have now passed 2 Protection Cards)
                    </li>
                    <li>
                        The fourth also receives 1 bonus strength (as the Runners have passed 3 Protection Cards, not 4)
                    </li>
                    <li>
                        The fifth and sixth active Protection Card receives 2 bonus strength (as the Runners have now
                        passed 4 Protection Cards)
                    </li>
                </IndentedUl>
                <Footnote name={footnoteCount++}>
                    This is the first number that a player has to keep in their head when it comes to calculating
                    strength.
                </Footnote>
            </li>
            <li>
                As the number of Alerts rises, the Protection Card strength increases.
                <IndentedUl>
                    <li>
                        At one Alert, the strength is increased by 1
                    </li>
                    <li>
                        At three Alerts (ie, 2 more), the strength is increased by 2
                    </li>
                    <li>
                        At six Alerts, the strength is increased by 3
                    </li>
                    <li>
                        And so on
                    </li>
                    <Footnote name={footnoteCount++}>
                        This is the second number that a player has to keep in their head when it comes to calculating
                        strength, and it scales differently from the first.
                    </Footnote>
                </IndentedUl>
            </li>
            <li>
                If the Security player is Directing Security from this Facility and the Protection Card is Active, they
                may choose to Boost the challenge strength of this card. The first Boost of each card costs 1 Credit,
                the second Boost costs 2 Credits, the third Boost costs 3 Credits and so on. Each Boost increases the
                challenge strength by 1 for the rest of this phase.
                <Footnote name={footnoteCount++}>
                    This is the third, and it also involves a decision on top of that. Too many moving parts by half.
                </Footnote>
            </li>
        </IndentedUl>

        <h6 id='challenge'>
            Challenge
        </h6>

        <p>
            If the Protection Card is Active, then the Runners attempt to break the Protection. If it is not, then they
            move on to the Breather step.
            <Footnote name={footnoteCount++}>
                So not only have we potentially got a complicated maths problem to solve, we have a bit of jumping
                around to do in the rulebook! Yay!
                <br/>
                <br/>
                This is <em>such</em> a good mechanic, but I think the game&apos;s success has come despite how messy
                this is to explain, and because I built a bot and a spreadsheet to handle it for online play.
            </Footnote>
        </p>
        <p>
            To break the protection, the Run Leader rolls dice equal to their skill that is being used to break the card
            in question and counts the number of dice that score a 5 or higher. If the Run Leader has at least one Wound
            then they roll d6s, otherwise they roll d8s.
        </p>
        <p>
            If there are other Runners taking part in the run, then they add more dice to the pool. If they are not
            Wounded, they add half their skill to the pool (rounding down)
            <Footnote name={footnoteCount++}>
                Even more maths, again saved by computers.
            </Footnote>
            . If they are Wounded, they add a quarter of their skill to the pool (rounding <em>up</em>
            <Footnote name={footnoteCount++}>
                A decision taken for balance reasons - if you had a skill of 3 and got wounded you then provided
                nothing. I want to playtest changes to this, though it would require a rebalance.
            </Footnote>
            ).
        </p>

        <p>
            At the same time, the Security player rolls a number of d8s equal to the Challenge strength and counts the
            number of dice that score a 5 or higher.
        </p>

        <h6 id='consequences'>
            Consequences
        </h6>

        <p>
            If the Run Leader rolls more successes than the Security player
            <Footnote name={`Footnote ${designerCount++}`}>
                In the case of a tie, then the Security player wins
                <Footnote name={footnoteCount++}>
                    A decision taken to buff the corporations - though having said that I have no idea which side has
                    turned out to be stronger in play. See [{footnoteCount++}] for why.
                </Footnote>
            </Footnote> then they are successful and move to the Breather step. If they do not, then the Runner(s) take
            the consequence.
            <Footnote name={footnoteCount}>
                This mechanic is <em>incredibly</em> swingy. It was intentional - I wanted to simulate the fact that
                sometimes luck plays a part in these sorts of scenarios. One side could roll 3 dice and beat the side
                rolling 10. They shouldn&apos;t, but they can! It mostly balances out equally, but it means that
                some people just hit a brick wall really hard when they weren&apos;t expecting it.
            </Footnote>
        </p>

        <p>
            The Protection Card may have an optional “Charge” ability. If the Security player is Directing Security from
            this Facility then they pay the designated “Charge” cost to add the additional consequences.
        </p>

        <p>
            Unless the Protection Card states otherwise, the consequence must be taken by a single player, decided by
            the Run Leader. The consequences are usually one (or more) of the following:
        </p>

        <DescriptionList list={[
            {
                title: "Alert",
                content: <React.Fragment>
                    Each alert is converted into a temporary Credit that can be used to activate/Boost/charge other
                    Protection Cards. Alerts also increase the strength of Protection Cards.
                </React.Fragment>,
            },
            {
                title: "Tag",
                content: <React.Fragment>
                    For any future runs, a Tag generates additional Alerts. Tags also mean that Corporation players may
                    be able to take out of run actions against you.
                    <Footnote name={footnoteCount++}>
                        I regularly get asked what an out of run action is, and my answer has always been &quot;Whatever
                        you want it to be&quot;. Perhaps it should have some examples.
                    </Footnote>
                </React.Fragment>,
            },
            {
                title: "Wound",
                content: <React.Fragment>
                    Your dice pool is made up of d6s (instead of d8s) or add a quarter of your skill (instead of half)
                    to the dice pool. If you have Wounds equal to or greater than your Body, you are incapacitated,
                    instantly leave the Run (with no notoriety effect) and any permanent Equipment that you played on
                    this run will be given to the Security player of the Corporation you are Running against.
                </React.Fragment>,
            },
            {
                title: "Retry",
                content: <React.Fragment>
                    After the Breather step, you move back to the <span className='italic'>Activate </span>step.
                </React.Fragment>,
            },
            {
                title: "End the Run",
                content: <React.Fragment>
                    The Run is immediately treated as unsuccessful. If you wish, you may instead take Wounds and Tags to
                    replace with a <span className='italic'>Retry </span>effect. For each “End the Run” that you have
                    ignored (including this one), you take 1 Wound, 1 Tag and 1 Alert.
                    <Footnote name={footnoteCount++}>
                        This tries to prevent a brick wall by giving you a tantalising option to push your luck. It came
                        about from listening to the <a href="https://on.soundcloud.com/rnmJ" target="_blank"
                                                       rel="noopener noreferrer">
                        Mirrorshades AAR</a>.
                    </Footnote>
                </React.Fragment>,
            },
        ]}/>

        <p>
            Note that unless a Protection Card has an “End the Run” consequence the Runners will move to the Breather
            step.
        </p>

        <h6 id='breather'>
            Breather
        </h6>

        <p>
            This allows the Runners to consider whether they wish to continue or not. Each Runner, starting with the Run
            Leader may take this opportunity to leave the run. If all Runners have left (be that voluntarily or due to
            incapacitation) then the run is treated as unsuccessful.
        </p>

        <p>
            Leaving a Run when the rest of the group continue may have an effect on your gang’s Notoriety but does have
            the added benefit that you’re still alive. You should weigh these two options up.
            <Footnote name={footnoteCount++}>
                Another good joke from me.
            </Footnote>
        </p>

        <p>
            If the Run Leader decides to leave the run, a new Run Leader is chosen. If one cannot be chosen
            democratically, then it should be chosen randomly.
        </p>

        <h5 className='text-lg' id='successful-runs'>
            Successful Runs
        </h5>

        <p>
            If the run was successful, then the Runner(s) may access anything stored in the Facility.
        </p>

        <p>
            The Runners access cards stored in the Facility, depending on the number of Runners in the group. For each
            Runner in the group, they receive one access.
            <Footnote name={`Footnote ${designerCount++}`}>
                Some equipment cards may provide a Runner with more accesses
            </Footnote>
            <Footnote name={footnoteCount++}>
                Still not happy with this rule. It lets everyone do what they want to do, but they don&apos;t punished
                for setting off every alarm as they go in. Something that I want to tweak for a future run I think.
            </Footnote>
        </p>
        <p>
            To access a technology, choose a card from the selection installed in the Facility. The Security
            player/Control will reveal it, and the Run Leader will then have 3 options.
            <Footnote name={`Footnote ${designerCount}`}>
                These choices are kept Secret from the Security player, unless they are Directing Security from this
                Facility.
            </Footnote>
        </p>

        <IndentedOl>
            <li>Copy the card</li>
            <li>Steal the card</li>
            <li>Destroy the card</li>
        </IndentedOl>

        <p>
            Each action will take a skill check (explained below). If the skill check fails, then the card goes back to
            the list of cards you may access. You may attempt to access it again.
        </p>

        <p>
            Runners may have received information about the location of a certain technology. If a Runner has a
            “Technology Location” card from control then one of their accesses can be to use this card. If the
            technology in question is in the Facility, they access the card. If not (either because the information was
            wrong or the technology has moved), the access is wasted.
        </p>

        <h6 id='copying-technologies'>
            Copying technologies
        </h6>

        <p>
            This is treated similar to a Protection Card challenge, where the dice pool is equal to your full skill
            level (the combination of your Brawn and Hack) - other Runners may add their ability scores as before (if
            they are not Wounded they add half, if they are then they add quarter). Unlike Protection Cards, there is no
            opposing roll or consequence for failure. The more successes you roll, the better the copy is.
        </p>

        <IndentedUl>
            <li>
                If you roll no successes, your copy attempt fails
            </li>
            <li>
                If you roll some successes, you create a “weak” copy that gives a 25% discount to anyone who wishes to
                research this technology
            </li>
            <li>
                If you roll four successes, you create a “good” copy that gives a 50% discount to anyone who wishes to
                research this technology
            </li>
        </IndentedUl>

        <p>
            No matter the outcome, the card is returned to the list of cards that you access. If you wish to create
            multiple copies of a technology then you must access the card multiple times.
        </p>

        <h6 id='destroying-technologies'>
            Destroying Technologies
        </h6>

        <p>
            Anyone can attempt to destroy a technology, though only those with specialist equipment or skills will be
            able to fully succeed.
        </p>

        <p>
            The Run Leader and any other members of the group roll dice equal to their skill level and attempts to get
            successes.
        </p>

        <IndentedUl>
            <li>
                If you roll two successes, you partially succeed (but leave enough traces for the Corporation to
                research this again at a hefty discount).
            </li>
            <li>
                If you roll four successes, you moderately succeed (but leave enough traces for the Corporation to
                research this again at a moderate discount)
            </li>
            <li>
                If you have destroy equipment/skills and you roll 8 successes you moderately succeed (but leave some
                traces that allow the Corp to research this again at a slight discount)
            </li>
            <li>
                If you have destroy equipment/skills and you roll 12 successes you overly succeed and destroy the
                technology and all useful traces.
            </li>
        </IndentedUl>

        <h6 id='stealing-technologies'>
            Stealing Technologies
        </h6>

        <p>
            Stealing technologies is hardest thing to do. To steal a technology, one of the Runners in the group must
            have a Steal ability or have brought gear that can be used to steal technologies.
        </p>

        <p>
            The Run Leader and any other members of the group roll dice equal to their skill level and attempt to beat
            the “Steal” score of the technology. If they succeed, the Run Leader receives the technology card.
        </p>

        <h6 id='stealing-credits-from-facilities'>
            Stealing Credits from Facilities
        </h6>

        <p>
            Each Facility will also have a “Credits” card. Accessing this card gives the run leader a number of Credits
            related to the number of Protection Cards that were installed (<em>not </em>activated) in the Facility:
        </p>

        <DescriptionList list={[
            {
                title: "5 cards or less",
                content: <React.Fragment>
                    The number of cards

                </React.Fragment>,
            },
            {
                title: "6 cards",
                content: <React.Fragment>
                    7 Credits

                </React.Fragment>,
            },
            {
                title: "7 cards",
                content: <React.Fragment>
                    8 Credits

                </React.Fragment>,
            },
            {
                title: "8 cards",
                content: <React.Fragment>
                    10 Credits


                </React.Fragment>,
            },
            {
                title: "9 cards",
                content: <React.Fragment>
                    12 Credits

                </React.Fragment>,
            },
            {
                title: "10 cards",
                content: <React.Fragment>
                    15 Credits

                </React.Fragment>,
            },
            {
                title: "11+ cards",
                content: <React.Fragment>
                    An additional 3 Credits for each card over 10 (so 11 gives you
                    18, 12 gives you 21 and
                    so on)
                </React.Fragment>,
            },
        ]}/>

        <p>
            You also receive a number of Credits related to the number of technologies (including the Credits card)
            stored in this Facility:
        </p>

        <DescriptionList list={[
            {
                title: "1 technology",
                content: <React.Fragment>
                    0

                </React.Fragment>,
            },
            {
                title: "2 technologies",
                content: <React.Fragment>
                    1

                </React.Fragment>,
            },
            {
                title: "3 technologies",
                content: <React.Fragment>
                    3

                </React.Fragment>,
            },
            {
                title: "4 technologies",
                content: <React.Fragment>
                    6


                </React.Fragment>,
            },
            {
                title: "5 technologies",
                content: <React.Fragment>
                    10
                </React.Fragment>,
            },
        ]}/>

        <p>
            And so on.
            <Footnote name={footnoteCount++}>
                Too 👏 Much 👏 Maths
            </Footnote>
        </p>

        <h6 id='facilityspecific-effects'>
            Facility-Specific Effects
        </h6>

        <p>
            Runners may use one of their accesses to activate a special effect of the Facility:
        </p>

        <DescriptionList list={[
            {
                title: "Research",
                content: <React.Fragment>
                    You may secretly choose a Facility and be told which technologies are stored there
                </React.Fragment>,
            },
            {
                title: "Security",
                content: <React.Fragment>
                    You may either (1) secretly choose a Facility and spy on its security layout or (2) receive a
                    blackmail file from the vault. If you choose to spy on a Facility, select a Facility and Control
                    will tell you which Protection Cards are in the Facility and you may choose to look at up to 3
                    cards. A blackmail file may have plot information for you to act upon, or can be sold to a
                    Corporation at an agreed-upon price.
                </React.Fragment>,
            },
            {
                title: "Corporate",
                content: <React.Fragment>
                    You may steal either a stock certificate from the Corporation. Stock certificates may harm the
                    Corporation’s income, or give you a passive income, and can be sold to Corporations or other
                    characters.
                    <Footnote name={footnoteCount++}>
                        Everyone loves these, and basically didn&apos;t care about the rest of the options
                    </Footnote>
                </React.Fragment>,
            },
        ]}/>

        <p>
            Other Facility types may be researched during the game. The effect for new Facility types is not revealed to
            a Runner until they complete a successful run against them (though Runners can share the results of their
            “research”).
        </p>

        <h5 className='text-lg' id='timing'>
            Timing
        </h5>

        <p>
            A run must be completed during the Action Phase - if the end of phase is called and you have not yet been
            successful then your run is treated as unsuccessful. With that in mind, you should take steps to speed up
            the Facility game where possible:
            <Footnote name={footnoteCount++}>
                It is a short timeframe to do these actions, and I didn&apos;t want people to stop the runners by just
                taking forever.
            </Footnote>
        </p>

        <IndentedUl>
            <li>
                Quickly decide which Runner in your group will take the consequence.
            </li>
            <li>
                Calculate how much your skills will add to the dice pool beforehand if you are not the run leader (there
                will be helper sheets available on the day).
            </li>
            <li>
                Security players should decide budgets at the beginning of the phase as quickly as possible.
            </li>
            <li>
                Security players should not linger over charge or Boost decisions if they are Directing Security which
                would end up delaying Runners.
            </li>
        </IndentedUl>

        <h4 className='text-xl' id='other-runner-actions'>
            Other Runner actions
            <Footnote name={footnoteCount++}>
                All of these options are less interesting than doing a run - but I felt people should have the options
            </Footnote>
        </h4>

        <p>
            Runners may take on other work or perform other actions instead. This is a list of generic actions that all
            Runners are able to take part in - there may be other actions unveiled during the game that you may be able
            to join in with (and of course you can always create new actions by speaking to Control).To perform any
            actions, use the relevant channel in the Runner-actions category to notify Runner Control.
        </p>

        <h5 className='text-lg' id='mercenary-work'>
            Mercenary work
        </h5>

        <p>
            Although most of the work that Corporations will give you will be in the form of Runs against a Facility,
            there is always other work available. Since there is no dedicated police force, Runners may choose to take
            part in general “peace keeping”.
        </p>

        <p>
            To do so, roll your Brawn ability. Similar to a Run challenge, you roll d8s if you are not Wounded (d6s if
            you are) and count any dice where you roll a 5 or more. For each success, you will receive some Credits
            depending on the Civil Unrest in Procatorion.
            <Footnote name={`Footnote ${designerCount++}`}>
                This amount will be Public knowledge
            </Footnote>
        </p>

        <p>
            You may choose to group up and do mercenary work together. If you do so then unlike a Run Challenge, you all
            roll your Brawn abilities separately and share the Credits between you equally (rounding <strong>up</strong>).
        </p>

        <h5 className='text-lg' id='contract-work'>
            Contract work
            <Footnote name={footnoteCount++}>
                This has literally never come up in any of the games, so it might not survive the next version.
            </Footnote>
        </h5>

        <p>
            Sometimes a Corporation may require some contract work to help build their networks, design websites or
            similar. This works similar as Mercenary work, though the amount of money will have been negotiated up
            front.
        </p>

        <p>
            To do so, you roll the ability in question and try to get as many successes as required. The contract will
            require a number of successes - if you roll that many successes then return the contract to the relevant
            person who will pay you the required amount. If you fail, then mark the number of successes that you created
            - you can retry on the next turn assuming that the contract is still available.
        </p>

        <p>
            You may choose to group up and do contract work. Unlike a run challenge, you roll your abilities separately.
        </p>

        <h5 className='text-lg' id='recovery-actions'>
            Recovery Actions
        </h5>

        <p>
            If you did not perform any other actions this turn, you may take a
            recovery action.
        </p>

        <p>
            At the beginning of the game, you will have few options for recovering - as the game goes on then more
            recovery options may become available to you (or options may be removed):
        </p>
        <DescriptionList list={[
            {
                title: "NHS - free",
                content: <React.Fragment>
                    At the beginning of the game the
                    <abbr className="cursor-help" title="National Health Service">NHS</abbr> is still active in
                    Procatorion. You recover 1 Wound for free. For each other Wound that you have, roll a d6 and attempt
                    to roll greater than or equal to the number of dice you rolled (for each success, you recover a
                    Wound). For example:
                    <IndentedUl>
                        <li>
                            You have 1 Wound. You recover the Wound for free.
                        </li>
                        <li>
                            You have 3 Wounds. You recover 1 Wound automatically and roll 2 dice, recovering a Wound for
                            each dice that you rolled a 2 or higher.
                        </li>
                        <li>
                            You have 5 Wounds. You recover 1 Wound automatically and roll 4 dice, recovering a Wound for
                            each dice that you rolled a 4 or higher.
                        </li>
                        <li>
                            You have 7 Wounds. You recover 1 Wound automatically and roll 6 dice, recovering a Wound for
                            each dice that you rolled a 6 or higher.
                        </li>
                    </IndentedUl>
                    You may optionally choose to roll fewer dice for a higher chance of recovering more Wounds.
                </React.Fragment>
            },
            {
                title: "Private Healthcare - 3 Credits per Wound",
                content: <React.Fragment>
                    If you’re willing to pay, you can pay to recover as many Wounds as you like.
                </React.Fragment>,
            },
            {
                title: "Safe house - free",
                content: <React.Fragment>
                    Sometimes, you need to lay low to avoid a Corporation’s retribution. A safe house will remove a
                    single Tag.
                </React.Fragment>,
            },
            {
                title: "Identity Scrub - 3 Credits per Tag",
                content: <React.Fragment>
                    If you’ve got too many Tags that you need to remove quickly, then you may pay to remove as many Tags
                    as you like
                </React.Fragment>,
            },
        ]}/>

        <h3 className='text-2xl' id='acknowledgements'>
            Acknowledgements
            <Footnote name={footnoteCount++}>
                Thank the people that helped you! There are probably loads of them that did.
            </Footnote>
        </h3>

        <p>
            A designed game is never the direct result of a single person. Although I can take credit for the idea, it
            would be remiss of me to not mention few people
        </p>

        <DescriptionList list={[
            {
                title: "John Mizon",
                content: <React.Fragment>
                    For the help with wording to encourage player creativity, since I was stuck for a decent period with
                    trying to make that work

                </React.Fragment>,
            },
            {
                title: "Alex Beck",
                content: <React.Fragment>
                    Alex Beck is the designer for Mirrorshades, with which this game shares a theme. Although I’ve not
                    played Mirrorshades, <a href="https://bit.ly/2lKrs9n" rel="noreferrer" target="_blank">the AAR from
                    Becky Ladley</a> and <a href="https://bit.ly/2kbixxC" rel="noreferrer" target="_blank">Last Turn
                    Madness podcast episode</a> gave me some clear indications about what problems the structure of the
                    game can have, which prevented me from going too far down a dangerous rabbit hole.
                </React.Fragment>,
            },
            {
                title: "The Sheffield Nationals Committee",
                content: <React.Fragment>
                    This was a crazy idea that was greenlit by Lucie and Alex just after the game passed the first play
                    test. I’m indebted to them for letting me try this!
                </React.Fragment>,
            },
            {
                title: "The playtesting team",
                content: <React.Fragment>
                    This game would almost certainly have been a mess without play testers. Special thanks to Adam,
                    Josh, Harry and Peter for their initial playtest suggestions, and Jerry and Oliver for their further
                    feedback at later stages.
                </React.Fragment>,
            },
            {
                title: "Pennine Megagames",
                content: <React.Fragment>
                    The Pennine Megagame team were an invaluable resource in finding potential logistical problems with
                    the various games, as well as giving great suggestions during playtesting.
                </React.Fragment>,
            },
            {
                title: "Daniel White",
                content: <React.Fragment>
                    For a significant amount of proofreading.
                </React.Fragment>,
            },
            {
                title: "Suit Iconography",
                content: <React.Fragment>
                    The symbols are used from Font Awesome, which is licensed under a Creative Commons Attribution 4.0
                    International license. <a href="https://fontawesome.com/license" rel="noreferrer" target="_blank">You
                    can find the licence at https://fontawesome.com/license</a>.
                </React.Fragment>,
            },
        ]}/>

        <h3 className='text-2xl' id='glossary'>
            A. Glossary
            <Footnote name={footnoteCount++}>
                One might argue that if your megagame rulebook requires a glossary, you have gone too far.
            </Footnote>
        </h3>

        <p>
            This section is a quick explanation of various terms used in this rulebook.
        </p>
        <DescriptionList list={[
            {
                title: "Active (Protection Card)",
                content: <React.Fragment>
                    This protection can be encountered by a Runner. A Protection Card begins <span
                    className='font-bold'>Inactive</span>, and is usually Activated when the Runner encounters it.
                </React.Fragment>,
            },
            {
                title: "Alert",
                content: <React.Fragment>
                    For each Alert, the security player receives 1 temporary credit. These Alerts and temporary credits
                    are removed at the end of the Run
                </React.Fragment>,
            },
            {
                title: "Boost",
                content: <React.Fragment>
                    If a Security player is directing security at the Facility that this Protection Card is defending
                    then they may increase the challenge cost of this card.
                </React.Fragment>,
            },
            {
                title: "Corporate player",
                content: <React.Fragment>
                    A player with a CEO, security or research role.
                </React.Fragment>,
            },
            {
                title: "Council",
                content: <React.Fragment>
                    The decision making body for Procatorion. The CEO players will spend their time discussing any laws
                    that will apply to Procatorion.
                </React.Fragment>,
            },
            {
                title: "Council Chamber",
                content: <React.Fragment>
                    The area where the Council meets.
                </React.Fragment>,
            },
            {
                title: "Charge",
                content: <React.Fragment>
                    During a run, if the runner(s) fail to break a Protection Card with a Charge effect and the opposing
                    security player is directing security at that location, the Security player may pay the indicated
                    cost to also give the Charge consequence to the runner(s).
                </React.Fragment>,
            },
            {
                title: "Pacital",
                content: <React.Fragment>
                    The US mega-corp experiment
                </React.Fragment>,
            },
            {
                title: "Directing Security",
                content: <React.Fragment>
                    The security player has chosen to take an explicit interest in this facility’s defence. They will be
                    able to <span className='font-bold'>Boost </span>or <span className='font-bold'>Charge </span>Protection
                    cards.
                </React.Fragment>,
            },
            {
                title: "End the Run",
                content: <React.Fragment>
                    The Runners are unsuccessful in their Run. They <span className='italic'>may </span>choose to
                    instead take one each of Wound, Tag and Alert.
                </React.Fragment>,
            },
            {
                title: "Facility",
                content: <React.Fragment>
                    A location owned by a corporation. This will house Technology Cards and be defended by Protection
                    Cards
                </React.Fragment>,
            },
            {
                title: "Inactive (Protection Card)",
                content: <React.Fragment>
                    This protection can not be encountered by a Runner.
                </React.Fragment>,
            },
            {
                title: "Income",
                content: <React.Fragment>
                    The amount of credits you receive each turn.
                </React.Fragment>,
            },
            {
                title: "Notoriety",
                content: <React.Fragment>
                    A measure of how well-known and successful your gang is.
                </React.Fragment>,
            },
            {
                title: "Protection Card",
                content: <React.Fragment>
                    A defence installed by a security player to protect a facility. Runners face these during the Run
                    sub-game
                </React.Fragment>,
            },
            {
                title: "Procatorion",
                content: <React.Fragment>
                    The setting for Running Hot - a city state inside Britain.
                </React.Fragment>,
            },
            {
                title: "Political Will",
                content: <React.Fragment>
                    The amount of &quot;sway&quot; you have within the Council. The higher your Political Will, the more
                    votes you have in the Council.
                </React.Fragment>,
            },
            {
                title: "Public (knowledge)",
                content: <React.Fragment>
                    All other players can see this information directly (either by in game notifications or asking
                    Control).
                </React.Fragment>,
            },
            {
                title: "Research",
                content: <React.Fragment>
                    A line of inquiry that a research player may dedicate resources to in order to produce a Technology
                    Card.
                </React.Fragment>,
            },
            {
                title: "Run",
                content: <React.Fragment>
                    An action taken against a Facility by a Runner.
                </React.Fragment>,
            },
            {
                title: "Runner",
                content: <React.Fragment>
                    A member of one of the gangs inside Pacital.
                </React.Fragment>,
            },
            {
                title: "research points",
                content: <React.Fragment>
                    A specific currency used by research players to buy Technology Cards.
                </React.Fragment>,
            },
            {
                title: "Secret (knowledge)",
                content: <React.Fragment>
                    This information may never be explicitly confirmed with other players (by showing tokens etc).
                    Players may discuss this information but are not bound to be truthful.
                </React.Fragment>,
            },
            {
                title: "Semi-Public (knowledge)",
                content: <React.Fragment>
                    This information is considered <span className='font-bold'>public </span>to some players, and <span
                    className='font-bold'>secret </span>to others.
                </React.Fragment>,
            },
            {
                title: "Semi-Secret (knowledge)",
                content: <React.Fragment>
                    This information is considered <span className='font-bold'>secret </span>to other players. However,
                    it may be revealed and confirmed with the relevant tokens if a player so wishes.
                </React.Fragment>,
            },
            {
                title: "Stability",
                content: <React.Fragment>
                    How secure and stable Procatorion is. If this drops to zero, the British Government will begin
                    taking steps to shut down Procatorion.
                </React.Fragment>,
            },
            {
                title: "Tag",
                content: <React.Fragment>
                    At the beginning of each Run, each Tag present will generate one temporary Credit for the security
                    player. These credits disappear at the end of the Run. Corporations may use Tags to take out of run
                    actions against specific Runners.
                </React.Fragment>,
            },
            {
                title: "Technology Card",
                content: <React.Fragment>
                    A card which may provide the Corporation with a new Protection Card or provide some other benefit.
                    These are normally stored within a Facility.
                </React.Fragment>,
            },
            {
                title: "Wound",
                content: <React.Fragment>
                    While the Runner has at least one Wound, they roll a d6 instead of a d8
                </React.Fragment>,
            },
        ]}/>

        <Footnote name={footnoteCount++}>
            This is a 30 page rulebook that has <strong>absolutely no images</strong>. Do not do what I do, it is
            categorically stupid.
        </Footnote>
    </React.Fragment>
}
