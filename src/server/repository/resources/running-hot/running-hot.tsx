import React from "react";

import {GameImage, Footnote} from "../../../../components/DesignerResource";
import DescriptionList from "../../../../components/DescriptionList";

import runningHotLogo from "./game-logo.jpg";

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
                The rulebook is structured as general information, that then
                drills down into more specific information.
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
        </p>
        <h5 className='text-lg' id='reconnaissance'>
            Reconnaissance
        </h5>
        <p>
            Players with the “Reconnaissance” ability may also do recon work during the setup phase to investigate a
            facility or Corporation
            <Footnote name={`Designer note ${designerCount++}`}>
                The number of times a player may do that will be limited by the ability text
            </Footnote>
            . Their ability will specify any additional costs that need to be paid and how to perform the action.
            The basic types of reconnaissance are:
        </p>
        <DescriptionList list={[
            {
                title: "Facility protection",
                content: "You pick a facility. If your reconnaissance action is a success, you may look at a number of protection cards as specified by the ability"
            },
            {
                title: "Facility contents",
                content: "You pick a facility. If your reconnaissance action is a success, you may look at a number of technology cards installed in the facility and receive a “Technology Location” card for any technologies you access."
            },
            {
                title: "Research",
                content: "You specify a Corporation and a technology. If your reconnaissance action is a success you are told which facility that technology is stored in and receive a “Technology Location” card (less powerful reconnaissance actions will give a selection of facilities)."
            },
        ]}/>
        <p>
            Performing a reconnaissance action is also risky - if you don’t take care while investigating a facility
            then you might find that the relevant Security player has been informed about the breach and thus taken
            actions to make your information outdated. On the other hand, you might find that it’s much easier for you
            to hit your real target if Security think you’re going for something else.
        </p>
    </React.Fragment>
}
