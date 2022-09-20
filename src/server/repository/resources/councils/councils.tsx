import React from "react";
import {Footnote} from "../../../../components/DesignerResource";
import Image from "next/image";

import elporiaLogo from "./game-logo.png";
import linkImage from "./links.png";
import wealthImage from "./wealth.png";
import mightImage from "./might.png";
import magicImage from "./magic.png";
import DescriptionList from "../../../../components/DescriptionList";

export function Councils() {
    let footnoteCount = 1;

    return <React.Fragment>
        <div className="text-center">
            <div className="flex justify-center justify-items-center py-2">
                <div className="w-2/4">
                    <Image layout="responsive" src={elporiaLogo} alt="The Councils of Elporia logo"
                           title="The Councils of Elporia logo"/>
                </div>
            </div>
            <h2 className="text-center text-2xl">A Megagame of Collaborative
                Worldbuilding &amp; Politicking</h2>
            <p className="font-bold">Based on As Thou Commands by Peter Nixon</p>
            <p className="font-bold">Game Design: Benjamin Kanelos</p>
            <p className="italic">Symbols from TheNounProject: kareemov1000, Hassan Ali, Sergey Demushkin,
                Rainbow Designs, texar tantular, hand shake by Robert Bjurshagen & Alina Oleynik.</p>
        </div>
        <h3 className="py-2 text-center text-4xl">
            Player Handbook
            <Footnote name={footnoteCount++}>
                I usually make 2 handbooks: 1 for players and 1 for control team members. Think of it like a D&D
                Player Handbook and Dungeon Master Guide: The players need to know how to play, the control team
                needs to know what is expected of them and the broad outline of what
                is &apos;in&apos; and &apos;out&apos; of bounds.
            </Footnote>
        </h3>
        <p className="italic">
            Centuries of war between the factions of the Elpor Basin has finally ended. With the Elporian Pact
            signed, there is finally a chance for peace! Now comes the hard part… Building a unified Kingdom
            from the ruins of war while working alongside your rivals whom you were fighting with until
            recently. Things were simpler when ‘might makes right’, but perhaps there are small victories to be
            won through diplomacy? Besides, the old adage, “The enemy of my enemy is my friend,” still holds
            true, right? A handshake here, a side-eye there, and hopefully you’ll come out ahead!
            <Footnote name={footnoteCount++}>
                I always find it useful to open with some light table-setting. Getting players into the
                headspace of the game will help get them excited to play and <em>hopefully</em> encourage them
                to read the rulebook.
            </Footnote>
        </p>
        <p>
            <em>The Councils of Elporia</em> is a rules-light mass player experience (megagame) where the
            players collectively generate and rule a Kingdom. Players will have a large say over the broader
            narrative universe, but their choices will be constrained by some light rules and edits by
            moderators to enforce tonal homogeneity. <em>The Councils of Elporia</em> aims to be a collaborative
            storytelling experience all players can enjoy.
        </p>
        <p>
            Each player will procedurally generate and rule over a fictional Province. These Provinces comprise
            an entire medieval-fantasy Kingdom, and players’ decisions will have impacts both near and far.
            Players will alternate between drafting narrative elements for their Province, and then
            participating in council sessions. In the Council sessions, players will attempt to negotiate
            beneficial outcomes to thorny issues bedeviling the Kingdom.
            <Footnote name={footnoteCount++}>
                In teaching a lesson you&apos;re supposed to tell the student what you are about to teach before
                teaching the lesson. Giving a loose framework onto which the players will add their in-depth
                learning is best practice. I usually include a broad overview for this purpose. Also, this
                passage will come in handy whenever an event organizer asks you for a description.
            </Footnote>
        </p>
        <h4 className="text-xl">
            Contents
            <Footnote name={footnoteCount++}>
                Unfortunately, not every player will read your rulebook, but a Table of Contents is handy for
                those who do. It gives them an idea of how much reading is coming and a quick way to refer back
                once they have read it. This is handy when brushing up on rules before a game (if a player read
                it well before the event) or if a player needs to look up a rule during the game itself.
            </Footnote>
        </h4>
        <ol className="list-decimal">
            <li>
                <a href="#tech-platforms">Tech Platforms</a>
                <Footnote name="Editor Note">
                    This document has been ported <a target="_blank"
                                                     rel="noreferrer"
                                                     href="https://docs.google.com/document/d/1tDdGl5KITU3hXNeRhroC37qvzvzNDnucOaoZ7IHZtg0/edit?usp=sharing"
                >
                    from the original Google Document
                </a>, which includes page numbers etc, which are lost in this format.
                </Footnote>
            </li>
            <li><a href="#tonal-guide">Tonal Guide (High-Fantasy Medieval)</a></li>
            <li>
                <a href="#elpor-basin">The Elpor Basin</a>
                <ol className="ml-4 list-inside list-disc">
                    <li><a href="#councils">The Councils of Elporia</a></li>
                </ol>
            </li>
            <li>
                <a href="#player-safety">Player Safety and Inclusion</a>
                <ol className="ml-4 list-inside list-disc">
                    <li>
                        <a href="#controversial">Potentially Controversial Topics</a>
                    </li>
                    <li>
                        <a href="#x-card">X-Card System</a>
                    </li>
                </ol>
            </li>
            <li>
                <a href="#general-structure">
                    General Structure of <em>The Councils of Elporia</em>
                </a>
            </li>
            <li>
                <a href="#check-in">Check-in Instructions</a>
            </li>
            <li>
                <a href="#phase-1">Phase I. Draft Aspects</a>
                <ol className="ml-4 list-inside list-disc">
                    <li>
                        <a href="#linking">Linking Aspects</a>
                    </li>
                    <li>
                        <a href="#collecting">Collecting Resources</a>
                    </li>
                    <li>
                        <a href="#trading">
                            Trading Resources &amp; Forming Links
                        </a>
                    </li>
                </ol>
            </li>
            <li>
                <a href="#phase-2">
                    Phase II. Council Sessions
                </a>
                <ol className="ml-4 list-inside list-disc">
                    <li>
                        <a href="#voting">
                            The Voting Process
                        </a>
                    </li>
                    <li>
                        <a href="#consequences">
                            Voting Consequences
                        </a>
                    </li>
                    <li>
                        <a href="#non-council">
                            Non-Council Options
                        </a>
                    </li>
                </ol>
            </li>
        </ol>
        <h4 id="tech-platforms">
            Tech Platforms
            <Footnote name={footnoteCount++}>
                This is an online-only consideration, although you may want to warn players at in-person events
                about mobility requirements. Don&apos;t assume all your players are familiar with the technology
                they will be using, and make sure to include a primer if necessary.
            </Footnote>
        </h4>
        <p>
            <em>Councils of Elporia</em> uses Miro (browser-based app) for the shared game boards and Discord
            for text and voice communication. <strong>You must have access to both, and we highly recommend the
            use of a PC with a mouse.</strong> Please familiarize yourself with both apps prior to the game.</p>
        <p>
            Miro will be the shared game board. Be aware that any changes you make will be visible to all
            players. Try not to move / change elements you are not meant to. A quick primer on the basic
            commands you will be using:
        </p>
        <ul className="list-disc">
            <li>
                Pan the screen: Press and hold your center scroll wheel OR Use the arrow keys.
            </li>
            <li>
                Zoom: Spin your control wheel OR Ctrl + / -
            </li>
            <li>
                Edit an element: Use the ‘Select’ tool (press V) and then double-click the element.
            </li>
            <li>
                Delete an element: Use the ‘Select’ tool (press V), select the element, and press Delete.
            </li>
            <li>
                Move an element: Use the ‘Select’ tool (press V), select the element, drag and drop it by
                pressing and holding your left mouse button.
            </li>
            <li>
                Copy an element: Use the ‘Select’ tool (press V), select the element, and press Ctrl + D
                (Duplicate)
            </li>
            <li>
                Undo: If you make a mistake, press Ctrl + Z to undo.
            </li>
        </ul>
        <h4 id="tonal-guide">
            Tonal Guide (High-Fantasy Medieval)
            <Footnote name={footnoteCount++}>
                        <span className="block pb-2">
                            The tonal guide is meant to give players a guide to keeping the tone somewhat consistent.
                            It&apos;s no fun to tell a player mid-game that their character or actions are outside the
                            bounds of what is expected or accepted in the game. It&apos;s best to set expectations up
                            front.
                        </span>
                <span className="block pt-2">
                            A tonal guide may or may not belong in a rulebook. Some games have their own wiki where
                            players can delve into the world. Other games give background and flavor in the player
                            briefs. The Councils of Elporia did not have those options, so I included it here.
                        </span>
            </Footnote>
        </h4>
        <p className="font-bold">This is a high-fantasy medieval setting. (Dungeons and Dragons, Lord of the
            Rings, World of Warcraft, etc.) Here are important thematic notes to keep in mind for the event:</p>
        <ul className="list-disc">
            <li>
                There is a wide range of fantasy races and cultures. However, ‘fantasy racism’ will not be
                tolerated. Your character cannot dislike members of other races simply because they belong to
                that race.<br/>
                <strong>We will refer to races as ‘factions’ for the purposes of this game.</strong>
            </li>
            <li>
                Only players of a specific faction are allowed to say what their faction’s appearance and
                customs are. If two (or more) players share a faction, they <strong>must</strong> agree on
                in-game lore related to their faction before it can become canon (with approval from their
                Control).<br/>
                <div className="italic">Example: John is an elf. He says elves are small trickster fey with the
                    innate magical ability to cause feelings of merriment in those around them. Jane isn’t an
                    elf. She <strong>cannot</strong> change elves in this world to be tall, unnaturally
                    beautiful, and long lived… she must defer to John’s description.
                </div>
            </li>
            <li>
                Magic is commonplace, but only practiced by those who have received training. While magic is
                powerful, it is not omnipotent. Multiple forms of magic can exist within the narrative.
            </li>
            <li>
                Players should not incorporate pre-existing media (<i>Game of Thrones, Lord of the Rings,
                etc.</i>) into the narrative.
            </li>
        </ul>
        <h4 id="elpor-basin">
            The Elpor Basin
            <Footnote name={footnoteCount++}>
                All my comments about the Tonal Guide go for the setting as well. If it can be handled elsewhere
                it <em>may</em> be best as to keep the rulebook short, sweet, and only handling the rules the
                players need to know.
            </Footnote>
        </h4>
        <p>
            The Elpor Basin is home to a plenitude of different factions and geographies. Unfortunately, this
            has not led to prosperity. Each faction has at some time sought to dominate the Elpor Basin. Thus,
            for as long as anyone can remember, the Elpor Basin has always been at war. While small Kingdoms
            from each land would rise, the geographical layout and factional nature of its inhabitants always
            led to a quick downfall.
        </p>
        <DescriptionList list={[
            {
                title: "Plains of Duerbar",
                content: <React.Fragment>
                    The majority of the Elpor Basin is made up of the Plains of Duerbar. These fertile rolling hills are
                    home
                    to <strong>humans</strong>, <strong>hobbits</strong>, <strong>centaurs</strong>, <strong>orcs</strong>,
                    and <strong>giants</strong>. The Plains of Duerbar have no defensible chokepoint, so no great
                    settlements of any kind were ever established.
                </React.Fragment>
            },
            {
                title: "Glimline Forests",
                content: <React.Fragment>
                    The Elpor Basin is dotted with great stands of towering trees. These Glimline Forests are home
                    to <strong>elves</strong>, <strong>treefolk</strong>, <strong>satyrs</strong>, <strong>fairies</strong>,
                    and <strong>unicorns</strong>. The Glimline Forests are separated by great distances, making it
                    impossible for one faction to rule them all.
                </React.Fragment>
            },
            {
                title: "Mountains of Skaar",
                content: <React.Fragment>
                    Surrounding the Elpor Basin on three sides are the Mountains of Skaar. These treacherous cliffs are
                    home
                    to <strong>dragonborn</strong>, <strong>avian</strong>, <strong>gargoyles</strong>, <strong>ettercaps</strong>,
                    and <strong>sphinx</strong>. Being a thin line of a mountain range surrounding the Basin, the length
                    of the territory is interminable making it impractical for any ruler to control it in its entirety.
                </React.Fragment>
            },
            {
                title: "Underland",
                content: <React.Fragment>
                    Under the entire Elpor Basin lies the Underland, a vast network of caves home
                    to <strong>dwarves</strong>, <strong>goblins</strong>, <strong>myconids</strong>, <strong>minotaurs</strong>,
                    and <strong>formians</strong>. The Underland connects to all other regions, making it impossible to
                    form any real border to defend.
                </React.Fragment>
            },
            {
                title: " Silver Coast (may not occur in playtest)",
                content: <React.Fragment>
                    The Elpor Basin empties into the Silver Sea on one side. This forms the Silver Coast which is
                    populated
                    by <strong>merfolk</strong>, <strong>reptilians</strong>, <strong>tortles</strong>, <strong>slimelings</strong>,
                    and <strong>crabfolk</strong>. The residents of the Silver Coast were never adept enough and
                    travelling inland, so any of their threats were pushed back to the sea.
                </React.Fragment>
            },
        ]}/>
        <p>
            The world outside the Elpor Basin is largely a mystery to the basin’s residents. Every now and again
            rumors, merchants, and delegations make their way into Elpor Basin… but the all consuming wars turn
            most of the Factions’ attention inwards.
        </p>
        <h5 id="councils">
            The Councils of Elporia
        </h5>
        <p>
            Over generations it has become clear that no faction will ever control the territory in its
            entirety.
            After centuries of war, it finally seems the time for diplomacy has arisen. After plenty of
            consternation and political wrangling, each faction selected a leader to send to council to form a
            new allied government. Past borders were dissolved. Promises to share resources were made. Truces
            were struck between old enemies. Thus the Elporian Pact was signed, ratified, and a new Kingdom was
            born! Now comes the hard part of integration and administration. 3 main legislative bodies were
            formed by the Pact:
        </p>
        <ul className="list-disc">
            <li>
                <strong>Hall of Champions:</strong> War has dominated the Elpor Basin for centuries. For many,
                fighting is all they’ve ever known. Military leaders have been called to discuss the future for
                Elporia’s armed forces now that the war is over. While some advocate peaceful alternatives,
                there are those who still feel the call of glory in their bones and wish to expand the Kingdom’s
                borders beyond the Elpor Basin.
            </li>
            <li>
                <strong>Elporian Parliament:</strong> Different factions had their own forms of government and
                rule-of-law. Now it is time to come together and rule as one. Forging a unified domestic policy
                for such a wide a varied group of peoples has never been tried… or at least there are no
                surviving records of such a governing body. But now it’s time for the leaders to tackle the
                problems bubbling up for the fledgling Kingdom.
            </li>
            <li>
                <strong>Conference of Scholars:</strong> There were those who dedicated themselves to discovery
                and magic even while the fighting raged around them. Now without the omnipresent threat of
                violence, scholarly opportunities abound with the new cultural exchange between factions.
                Unfortunately, not all agree on the moral and ethical ramifications of these discoveries. What
                should or should not be allowed in the Kingdom is hotly debated.
            </li>
        </ul>
        <p>For the purposes of this game:</p>

        <ul className="list-disc">
            <li>
                No players are traitors to the Kingdom. All players are working towards the good of the Kingdom,
                although you are likely to have differences of opinion on what exactly that means.
            </li>
            <li>
                A new government will not be established. Players will <strong
                className="underline">NOT</strong> be allowed to leave the Kingdom or otherwise lead a political
                revolution. While certain factions will have their power wax and wane, there will be no coups
                requiring Control to create a new government.
                <Footnote name={footnoteCount++}>
                    I put this warning in here just to keep players from going &apos;off book&apos; in ways that
                    would have hurt the game experience I was aiming for. If there are lines you don&apos;t want
                    crossed, consider warning players against such behavior.
                </Footnote>
            </li>
        </ul>
        <h4 id="player-safety">
            Player Safety and Inclusion
            <Footnote name={footnoteCount++}>
                I give full credit to Peter Nixon for conceiving and developing the first inclusion guide. His work in
                &quot;As Thou Commands&quot; is far more extensive than what I have edited down in here.
                <br/>
                <br/>
                Megagaming (and all activities in life) should be shared by <strong>everyone</strong> who wishes to
                partake in a respectful manner. By putting down a guide here, you are making sure that players are aware
                of your stance and are less likely to balk if you have to make the decision to remove a player.
            </Footnote>
        </h4>
        <p>
            <em>The Councils of Elporia</em> aims to be an inclusive experience
        </p>

        <ul className="list-disc">
            <li>
                All races and genders will be treated equally. The societal roles for various groups will not be
                featured as a point of debate in the gameplay.
            </li>
            <li>
                Homosexual relationships will be considered normal and acceptable for obvious contemporary reasons.
                Inheritance issues and dynastic crises stemming from homosexual relations should be pro-actively
                considered by players and may be leveraged as story beats to move plotlines forward by the moderators.
            </li>
            <li>
                As always, do your best to respect the pronouns and titles of others. If in doubt, consider using a
                player’s title (Count, Baron, etc.) in place of their gendered pronoun (Sir, Madam, etc.)
            </li>
            <li>
                <strong>Control reserves the right to remove players.</strong>
                <Footnote name={footnoteCount++}>
                    1000% this. Make sure your <strong>whole</strong> Control team knows this.
                </Footnote>
            </li>
        </ul>

        <h5 id="controversial">Potentially Controversial Topics</h5>

        <p>
            It’s impossible to avoid every potentially controversial topic, but Control has been instructed to handle
            these topics with care:
        </p>

        <ul className="list-disc">
            <li>
                In general, violence will be nondescript unless significantly relevant to the narrative. Torture will be
                avoided as a topic of conversation.
            </li>
            <li>
                Diplomatic (arranged) marriages may be utilized to cement house relations and may be used to fuel
                narrative elements (<i>Sir John is betrothed to Marquess Jennifer but loves Sir Jack</i>).
            </li>
            <li>
                As always, do your best to respect the pronouns and titles of others. If in doubt, consider using a
                player’s title (Count, Baron, etc.) in place of their gendered pronoun (Sir, Madam, etc.)
            </li>
            <li>
                Serfdom and the overall poor treatment of peasants may be leveraged for narrative elements, but the
                grand view that feudal aristocracies are inherently evil or that serfdom is a vile system will not be
                presented.
            </li>
            <li>
                Chattel slavery, harems, prisoner labor, and other forms of bondage (besides serfdom) will not be
                incorporated into the event narrative in ways that puts any players in the position of benefitting from
                such practices or having to defend those practices in debate.
            </li>
            <li>
                There will be no real-world religions in the game, although we realize fictional religions always have
                contemporary counterparts. Players will be given leeway in how they create and cast various religious
                groups in the game world. However, Control will be on guard to moderate the discussions and keep players
                from overly characterizing religious communities as evil or from having contemporary bigotries be
                injected into the game.
                <br/>
                <strong>Pro-tip for uncertain players:</strong> Referring to other religious groups simply
                as <strong>‘Barbarians’</strong>, <strong>‘Heathens’</strong> or <strong>‘Heretics’</strong> is enough
                in terms of justifying your actions against a rival religious community. There is no need to elaborate
                on why you dislike those of the rival religion’s way of life or philosophical underpinnings.
            </li>
        </ul>

        <h5 id="x-card">
            X-Card System
            <Footnote name={footnoteCount++}>
                X-cards can be controversial, because some folk believe that even having such a system encourages game
                masters to travel closer to edgier topics thinking that players will use the X-card to push back... but
                some players don&apos;t want to be &apos;unfun&apos; and use it. This can potentially lead to the
                opposite of the intent of the system.
                <br/>
                <br/>
                I think X-cards are a useful (albeit flawed) tool to give players an easy way out of an uncomfortable
                situation. If a better system is developed, I will implement it in future games. As Control, your goal
                is to try and make sure that situation doesn&apos;t arise in the first place.
            </Footnote>
        </h5>

        <p>
            Players will have the ability to object to ongoing evolving narrative elements which may make them
            uncomfortable using an X-card system. A card with an X on it will be present for all players to gesture to.
            <strong>
                If a player gestures to that card, then the current narrative element being discussed will be skipped
                ASAP and without question. Because we are playing digitally, players may need to privately message or
                publicly signal Control to skip a topic.
            </strong>
        </p>

        <h4 id="general-structure">
            General Structure of <em>The Councils of Elporia</em>
            <Footnote name={footnoteCount++}>
                Whew. That was a <strong>lot</strong> of rulebook that didn&apos;t really have rules for the game in
                there. I
                put this in here to refresh players on the structure of the game before I dove right in to the rules
                themselves.
            </Footnote>
        </h4>

        <p>
            The Kingdom is composed of Provinces, which are overseen by Faction Leaders represented by the Players. All
            players will start on equal footing.
        </p>

        <p>The role of the players and Control in The Councils of Elporia:</p>

        <ul className="list-disc">
            <li>
                <strong>Faction Leaders:</strong>
                (up to 5 per Province) The players who draft Aspects and vote on Dilemmas to try and protect their
                interests and push forward their goals.
            </li>
            <li>
                <strong>Province Control:</strong>
                (1 per Province) There will be 1 Control for each Province to lead the drafting sessions. The Province
                Control players will lead Dilemmas, formation of Links, and Player-Driven Narratives.
            </li>
            <li>
                <strong>Head Control:</strong>
                (1) The lead Control who will manage the overarching game.
                <Footnote name={footnoteCount++}>
                    Most of this content would have been in a player brief if this game had one. Instead, it made its
                    way to this handbook. Some games keep this information secret and let the size and scope of the game
                    be a discovery for the players. At the very minimum, players should be aware of who is on the
                    Control team and who they should contact if they have a problem.
                </Footnote>
            </li>
        </ul>

        <p>Each round will consist of 2 phases and generall be 1 hours long:</p>

        <ol className="list-decimal">
            <li>
                <strong>Draft Aspects:</strong>
                (20-30 minutes) Players will select Aspects for their Faction via a snake draft (a draft that goes in
                opposite order each cycle). These Aspects will give the players access to Resources, potential narrative
                Links, or special abilities. Players will fill in descriptive text for each Aspect they choose, slowly
                building and filling in the details of the world. After drafting, players will collect Resources from
                their Province board.
            </li>
            <li>
                <strong>Council Sessions:</strong>
                (20-30 minutes) Players will use their Resources to vote on options choosing policies or resolving
                dilemmas presented by Control. The results of these choices can have repercussions on individual
                Aspects, a Province, or the entire Kingdom. Players can also use this time to form Links with players in
                other Provinces and participate in Player-Driven Narratives. After the Dilemmas, players will gather
                together to hear the consequences of their decisions.
            </li>
        </ol>

        <p>
            The game is designed to be 4 rounds long after which Control will convene and decide the ultimate fate of
            your Kingdom. Each round is roughly equivalent to five years in-game.
            <Footnote name={footnoteCount++}>
                I generally start my rules by diagramming a turn. This gives players context about when things will be
                happening and when they will be taking certain actions.
            </Footnote>
        </p>

        <h4 id="check-in">
            Check-in Instructions
            <Footnote name={footnoteCount++}>
                Have something you want your players to do when they start? Put it in the rulebook. I&apos;ve found
                players miss check-in instructions if it&apos;s the first message on a Discord channel that gets buried
                by all the player join messages. This section can be cut for in-person games as generally you&apos;ll
                have someone working a check-in table to handle this.
            </Footnote>
        </h4>

        <p>
            When you join the Discord server, please indicate which Province you would like to join and let Control know
            if you wish to play with another player. Your Province’s text channel will have a link to your Province’s
            Miro page. Claim one of the five boards and fill in the relevant information. Choose a faction to represent.
            Players are encouraged to play as different factions, but can be the same faction upon request. Please
            change your Nickname on the Discord server to your character name and faction.
        </p>

        <p>
            For example:
        </p>

        <ul className="list-disc">
            <li>Crag Skullcrusher-Orc [He/Him]</li>
            <li>Countess Florin-Elf [She/Her]</li>
            <li>Lightfoot - Centaur [They/Them]</li>
        </ul>

        <h4 id="phase-1">
            Phase I. Draft Aspects
            <Footnote name={footnoteCount++}>
                We&apos;re on... checks tab... page 5 and we&apos;re finally getting to the rules? Yes. Remember that
                table on contents? This is where it comes in handy, because players on game day will need to know how
                much they can skip to if they want to get right to the meat of the game.
                <br/>
                <br/>
                Also, remember that Megagaming is still quite nascent and you&apos;re going to need to do more
                explaining of what exactly is to be expected to get a layman on board.
            </Footnote>
        </h4>

        <p>
            During Asset drafting, you must remain in your Provinces’s Discord Voice channels. You can move to back
            rooms, but only to speak with other members of your Province. You cannot send private messages (PMs) to
            other players, although <strong>you can PM Control at any time</strong>.
            <Footnote name={footnoteCount++}>
                Each phase of gameplay should tell the player:<br/>
                &bull; Where they should and should not be. <br/>
                &bull; Who they can and cannot communicate with. <br/>
                &bull; What they can do during this phase. <br/>
            </Footnote>
        </p>

        <p>
            Players will draft Aspects of their Faction by selecting an Aspect from the tableau. Once an Aspect is
            selected, Control will mark it with the player’s color and
            <strong>no other player can select that Aspect</strong>.
            Aspects confer some benefit upon the player who selected it.
            <Footnote name={footnoteCount++}>
                Rules, rules, rules... There isn&apos;t much here for you if you aren&apos;t looking to play Councils of
                Elporia. Writing rules is hard that takes a lot of practice. My topline advice is:
                <br/>
                &bull; Nail down your keywords before you write <strong>any</strong> rules. Keep use of those keywords
                consistent.
                <br/>
                &bull; Try to teach the game aloud before writing anything. See what rules you forgot or had to
                double-back to. Record yourself and play it back to yourself if that helps.
                <br/>
                &bull; Write an outline first. It&apos;s easier to adjust the flow of information if they aren&apos;t
                full paragraphs.
                <br/>
                &bull; If the game feels like there are too many rules... there might be too many rules. Think about
                ways to change the design so there are fewer rules, edge-cases, or exceptions.
                <br/>
                &bull; When you&apos;re done, have someone else read your rules and then try to teach the game back to
                you. This will point out spots where you weren&apos;t clear enough or they misunderstood your rules.
            </Footnote>

        </p>

        <ul className="list-disc">
            <li>
                Some Aspects will have a Resource symbol on them. These Aspects will generate Resources for the player
                at the end of <em>every</em> Phase I.
            </li>
            <li>
                Some Aspects tell the player to take something. Players receive that benefit once at the time the Aspect
                is selected.
            </li>
            <li>
                Some Aspects will offer a player a choice between benefits, which must be chosen at the same time the
                Aspect is selected. Delete the unselected option.
            </li>
            <li>
                All Aspects will have an <i>italicized prompt</i> on them which the player should answer by deleting
                this text and answering the prompt on the card. The answers to the prompts are canon and will be the
                primary method of generating the collective narrative content for the game.
            </li>
        </ul>

        <p>
            In the first round, a player will randomly be given the Leader token, represented by the crest of your
            Province. The player with the Leader token will make a draft selection first, followed by the
            next <u>clockwise</u> player. Drafting assets occurs as a “snake draft”, meaning the draft proceeds with
            players selecting their picks in clockwise order until the last player drafts their pick. Then the draft
            order reverses (<u>counterclockwise</u>) and starts with the player who picked last in the previous round.
            <strong>
                Each player can only have 1 Aspect per row, but can pick from any legal spot on the board (they do not
                have to draft from the top row down)
            </strong>.
        </p>

        <p>
            When drafting, players are encouraged to discuss and share their visions for their Province in a
            collaborative manner, but to also keep peer pressure to a minimum. When drafting, players do not need to
            wait for the previous player to finish their writing prompt before they pick their draft pick and Control
            may politely push players to draft asset cards in a brisk manner. Players can also use this time to Link
            their Aspects.
        </p>

        <h5 id="linking">
            Linking Aspects
        </h5>

        <p>
            Players are encouraged to come up with ways their Aspects relate with each other. Here are some ideas:
        </p>

        <ul className="list-disc">
            <li>
                Player A’s <em>Paladins</em> feature prominently in holy texts sacred to Player B’s <em>Glory</em>.
            </li>
            <li>
                A <em>Manufacturing District</em> from Player A produces paper which is prized by
                the <em>Library</em> of Player B.
            </li>
            <li>
                Player A patronizes a <em>Large Corps of Knights</em> which frequently train at Player B’s <em>Training
                Grounds</em>.
            </li>
        </ul>

        <p>For narrative purposes, relating Aspects can stretch to multiple players and between Provinces:</p>

        <ul className="list-disc">
            <li>
                Player A’s <em>Alchemists</em> work in player B’s <em>Laboratory</em> to produce fairy dust which is
                transported by Player C’s <em>Merchants</em> to a neighboring Province where they are stored in Player
                D’s Storehouse before being sold to Player E’s <em>Wizards</em> for use in spells.
            </li>
        </ul>

        <p>
            <strong>
                To make such a relationship official, a player can spend a Link Token to form a Link between two
                Aspects.
            </strong>
        </p>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            <div className="self-center text-center">
                <Image src={linkImage} width={50} height={50} alt="Icon used for a link" title="Icon used for a link"/>
            </div>
            <div className="colspan-3 md:col-span-5 lg:col-span-11">
                <p>
                    When a player chooses an Aspect that gives them a Link Token, they add it to their player board.
                </p>
                <p>
                    Link Tokens do not need to be spent the moment they are acquired.
                </p>
                <p>
                    <strong>
                        Link Tokens are not Resources. They cannot be used to vote, but they can be traded.
                    </strong>
                </p>
            </div>
        </div>

        <p>
            If Control approves a Link, they will draw the Link and label it. When forming a Link:
        </p>

        <ul>
            <li>
                A single Aspect can have up to 4 different Links.
            </li>
            <li>
                Links must be between different players (a player cannot Link their own Aspects). Both players whose
                Aspects will be Linked must agree to the Link.
            </li>
            <li>
                Only one player of the two Linked Aspects has to spend a Link Token.
            </li>
            <li>
                <strong>When forming a Link, both players gain 2 Resources</strong>.
                Control will pick the type(s) of Resources gained.
            </li>
        </ul>

        <h5 id="collecting">Collecting Resources</h5>

        <p>
            After Drafting, players will collect Resources. Each symbol on an Aspect a player has drafted will create 1
            matching Resource. There are 3 Resources in the game: <span className="text-orange-500">Wealth</span>
            , <span className="text-red-800">Might</span>, and <span className="text-purple-700">Magic</span>.
            While all these Resources can all be used to vote on options during the Council Sessions, players can earn
            these Resources in different ways and they may have different effects at various points of the game.
        </p>

        <div className="grid grid-cols-4 gap-2 md:grid-cols-6 lg:grid-cols-12">
            <div className="text-center">
                <div>
                    <Image src={wealthImage} width="50" height="50" alt="Icon used for wealth"
                           title="Icon used for wealth"/>
                </div>
                <span className="text-orange-500">Wealth</span>
            </div>
            <p className="colspan-3 self-center md:col-span-5 lg:col-span-11">
                Represents material assets and other objects of quantifiable value
            </p>
            <div className="text-center">
                <div>
                    <Image src={mightImage} width="50" height="50" alt="Icon used for might"
                           title="Icon used for might"/>
                </div>
                <span className="text-red-800">Might</span>
            </div>
            <p className="colspan-3 self-center md:col-span-5 lg:col-span-11">
                Represents military power and the ability to accomplish things through acts of violence.
            </p>
            <div className="text-center">
                <div>
                    <Image src={magicImage} width="50" height="50" alt="Icon used for magic"
                           title="Icon used for magic"/>
                </div>
                <span className="text-purple-700">Magic</span>
            </div>
            <div className="colspan-3 self-center md:col-span-5 lg:col-span-11">
                Represents magical abilities and spellcraft.
            </div>

        </div>

        <h5 id="trading">
            Trading Resources &amp; Forming Links
        </h5>

        <p>
            <em>The Councils of Elporia</em> is meant to be a game of diplomacy, negotiations, and backstabbing. As part
            of this, players can trade with one another or establish links at any time they share the same voice
            channel. <strong>Players can trade Resources and Link Tokens, but cannot trade Aspects</strong>. If players
            have the Resources to complete an agreed upon trade, they must do so immediately. However, if the trade is
            for future Resources, the player does not have to honor the deal in the future.
        </p>

        <h4 id="phase-2">
            Phase II. Council Sessions
            <Footnote name={footnoteCount++}>
                Note that I teach my games based off the timing of a turn. I find that players will learn the rules
                better if the rules follow the general flow of a game... teach the concepts in relation to the time when
                a player will need to know that concept.
            </Footnote>
            <Footnote name="Designer Note">
                For those in the board game community, this section was inspired by The King’s Dilemma. The actual
                mechanics, however, are different in many ways, as those who are familiar with The King’s Dilemma will
                notice.
            </Footnote>
        </h4>

        <p>
            <strong>
                Each player can pick a single Council Session they would like to attend and enter that Council’s Voice
                Channel on Discord. Once you enter a Council session for the round, you cannot enter a different Council
                that round. You can attend a different Council in the following rounds.
            </strong>
        </p>

        <p>
            During this phase, players are free to move between their chosen Council’s Voice Channel, their Province’s
            Voice Channel, the Inter-Province Link Voice Channel, and the Player-Driven Narrative Voice Channel.
        </p>

        <p>
            In the Council Voice Channel, the players will meet to discuss and debate the pressing issues facing the
            Kingdom. Control will present a dilemma that will likely have far-reaching effects. Some example dilemmas
            include:
        </p>

        <ul className="list-disc">
            <li>
                A controversial religious figure has been touring the Kingdom and engaging in debates with local clergy.
                Should we allow these debates to occur?
            </li>
            <li>
                A neighboring Kingdom is asking our Kingdom for military assistance. Should we send aid?
            </li>
            <li>
                A fire swept through the Plains of Duerbar. Should the Kingdom compensate the landlords?
            </li>
        </ul>

        <p>
            Along with presenting the dilemma, Control will present the potential options to the dilemma which will be
            voted on by the players (voting process described below). Players vote by spending Resources.
        </p>

        <p>
            Creative solutions or options in addressing certain dilemmas can be proposed by players but require the
            approval of Control. This is <u><strong>not</strong></u> meant to allow players to find a convenient
            ‘middle-ground’ option, which is often unrealistic. The goal of the game is to debate and negotiate tough
            and oftentimes binary decisions, and Control will push players to do so. Player-proposed solutions can only
            be proposed before voting on the options begins.
        </p>

        <h5 id="voting">
            The Voting Process
        </h5>

        <p>
            Players are encouraged to have a brief open-ended discussion / negotiation about the dilemma. Players can
            dedicate resources to a vote at any time. To do so, players write their name in the ledger and indicate how
            many Resources of each type they would like to dedicate. <strong>Players can only add Resources, and cannot
            remove them once dedicated to a voting option. Players cannot vote with more than 5 Resources.</strong> A
            player can vote for more than one option. A player can abstain from the voting by not dedicating any
            Resources.
        </p>

        <p>
            Control will set a secret timer (roughly 5 minutes) and will warn players when the voting is closing. Once
            closed, players cannot add any additional Resources and the results are tallied. The option with the most
            Resources wins. If there is a tie, the player who dedicated the most Resources breaks the tie. If there is
            still a tie, Control will break the tie.
        </p>

        <ul>
            <li>
                <strong>For the winning option:</strong> The Resources used to vote for the Option are spent. Each
                player who dedicated Resources to the winning option removes that many Resources from their player mat.
            </li>
            <li>
                <strong>For the losing option(s):</strong> The Resources used to vote for the Option are not spent. Each
                player who dedicated Resources to the losing option(s) leaves their player mat unchanged.
            </li>
        </ul>

        <p>
            Control will note which option won. They will adjudicate the consequences of the winning option at the end
            of the Dilemma Phase. They will then announce the next dilemma or inform the players if that was the final
            dilemma of the Council Session.
        </p>

        <h5 id="consequences">
            Voting Consequences
        </h5>

        <p>
            At the end of the Dilemma phase, all players should gather in the Kingdom-Wide Announcements Channel where
            Control will adjudicate the consequences of the Dilemmas. There may be positive or negative effects. For
            example:
        </p>

        <ul>
            <li>
                The controversial religious figure was allowed to tour the Kingdom, upsetting the local clergy. Each
                player with the Cleric or Paladins Aspect loses 1 Resource. Each player with the Knowledge Aspect gains
                1 Resource.
            </li>
            <li>
                The Council decides to aid the neighboring Kingdom by going to war. Each player with the Glory Aspect
                gains 2 <span className="text-red-800">Might</span> Resources.
            </li>
            <li>
                The Council decided the Kingdom should compensate landowners on the Plains of Duerbar following the
                fire. Each Province other than the Plains of Duerbar must lose 1 <span
                className="text-orange-500">Wealth</span>, and each Player in the Plains of Duerbar Province gains
                1 <span className="text-orange-500">Wealth</span> Resource.
            </li>
        </ul>

        <p>
            <strong>
                If a player is directly Linked to an affected Aspect, they share that benefit or loss. These benefits or
                losses do not continue to chain through Links.
            </strong>
        </p>

        <h5 id="non-council">
            Non-Council Options
        </h5>

        <p>
            Players do not need to stay in a Council session the entire time. Players are free to move to other voice
            channels as long as it is not a different Council or Province from their own. You can do the following
            during this phase:
        </p>

        <ul className="list-disc">
            <li>
                <strong>Share information and discuss matters of concern.</strong> Players can use this time to gather
                information on the happenings and development of the Kingdom outside of their Province.
            </li>
            <li>
                <strong>Trade Resources and establish Inter-Province Links.</strong> Players can trade Resources with
                one another. As Control is not managing player Resources, we ask that you do not cheat and give yourself
                Resources. Players can also establish Links between Aspects in different Provinces. If they agree to
                form a Link, they should go to the Narratives & Links voice channel where a member of Control can Link
                their Aspects in Miro.
            </li>
            <li>
                <strong>Spend Resources for a Player-Driven Narrative.</strong> Players can meet in the Narratives &
                Links voice channel with Control and propose narrative effects they would like to see. Control will
                determine what Resources are required for such an effect, whether the proposed event is successful, and
                what (if any) effect it has.
                <br/>
                <i>
                    For example: A player wants to open diplomatic relations with the Barbarian Savages, so they send a
                    ship bearing gifts. Control asks them to spend 2 Wealth tells the player they will have to wait
                    until a later round to find out if and how the gifts were received.
                </i>
            </li>
            <li>
                <strong>Take a break IRL.</strong> There will be an in-game break for all players (most likely between
                rounds 2 and 3). However, remember that participating in the Council is not mandatory. Feel free to step
                away from your computer and stretch if you need to.
            </li>
        </ul>

        <p>
            <Footnote name={footnoteCount++}>
                And we&apos;re done! Turns out there are only 3 pages of rules in this 8 page handbook... And
                that&apos;s pretty typical of my handbooks. I know I&apos;ve been sloppy calling this both a rulebook
                and a handbook, but you can see I&apos;ve leaned harder into this being a handbook that has rules in it.
                Feel free to find your own style and way of distributing information.
            </Footnote>
        </p>

    </React.Fragment>
}
