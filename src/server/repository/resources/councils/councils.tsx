import React from "react";
import {Footnote} from "../../../../components/DesignerResource";
import Image from "next/image";
import ElporiaLogo from './game-logo.png';

export function Councils() {
    return <React.Fragment>
        <div className="text-center">
            <div className="flex justify-items-center justify-center py-2">
                <div className="w-2/4">
                    <Image layout="responsive" src={ElporiaLogo} alt="The Councils of Elporia logo"/>
                </div>
            </div>
            <h2 className="text-center text-2xl">A Megagame of Collaborative
                Worldbuilding &amp; Politicking</h2>
            <p className="font-bold">Based on As Thou Commands by Peter Nixon</p>
            <p className="font-bold">Game Design: Benjamin Kanelos</p>
            <p className="italic">Symbols from TheNounProject: kareemov1000, Hassan Ali, Sergey Demushkin,
                Rainbow Designs, texar tantular, hand shake by Robert Bjurshagen & Alina Oleynik.</p>
        </div>
        <h3 className="text-4xl text-center py-2">
            Player Handbook
            <Footnote name="a">
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
            <Footnote name="b">
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
            <Footnote name="c">
                In teaching a lesson you&apos;re supposed to tell the student what you are about to teach before
                teaching the lesson. Giving a loose framework onto which the players will add their in-depth
                learning is best practice. I usually include a broad overview for this purpose. Also, this
                passage will come in handy whenever an event organizer asks you for a description.
            </Footnote>
        </p>
        <h4 className="text-xl">
            Contents
            <Footnote name="d">
                Unfortunately, not every player will read your rulebook, but a Table of Contents is handy for
                those who do. It gives them an idea of how much reading is coming and a quick way to refer back
                once they have read it. This is handy when brushing up on rules before a game (if a player read
                it well before the event) or if a player needs to look up a rule during the game itself.
            </Footnote>
        </h4>
        <ol className="list-decimal list-inside py-2">
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
                <ol className="ml-4 list-disc list-inside">
                    <li><a href="#councils">The Councils of Elporia</a></li>
                </ol>
            </li>
            <li>
                <a href="#player-safety">Player Safety and Inclusion</a>
                <ol className="ml-4 list-disc list-inside">
                    <li>
                        <a href="#controversial">Potentially Controversial Topics</a>
                    </li>
                    <li>
                        <a href="#x-card">X-Card System</a>
                    </li>
                </ol>
            </li>
            <li>General Structure of The Councils of Elporia</li>
            <li>Check-in Instructions</li>
            <li>
                Phase I. Draft Aspects
                <ol className="ml-4 list-disc list-inside">
                    <li>Linking Aspects</li>
                    <li>Collecting Resources</li>
                    <li>Trading Resources &amp; Forming Links</li>
                </ol>
            </li>
            <li>
                Phase II. Council Sessions
                <ol className="ml-4 list-disc list-inside">
                    <li>The Voting Process</li>
                    <li>Voting Consequences</li>
                    <li>Non-Council Options</li>
                </ol>
            </li>
        </ol>
        <h4 className="text-xl" id="tech-platforms">
            Tech Platforms
            <Footnote name="e">
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
        <ul className="list-disc py-2 pl-6">
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
        <h4 className="text-xl" id="tonal-guide">
            Tonal Guide (High-Fantasy Medieval)
            <Footnote name="f">
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
        <ul className="list-disc py-2 pl-6">
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
        <h4 className="text-xl" id="elpor-basin">
            The Elpor Basin
            <Footnote name="g">
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
        <dl className="sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12">
            <dt className="font-bold lg:col-span-2 sm:text-right pr-4">
                Plains of Duerbar
            </dt>
            <dd className="sm:col-span-3 md:col-span-5 lg:col-span-10">
                The majority of the Elpor Basin is made up of the Plains of Duerbar. These fertile rolling hills
                are home
                to <strong>humans</strong>, <strong>hobbits</strong>, <strong>centaurs</strong>, <strong>orcs</strong>,
                and <strong>giants</strong>. The Plains of Duerbar have no defensible chokepoint, so no great
                settlements of any kind were ever established.
            </dd>
            <dt className="font-bold lg:col-span-2 sm:text-right pr-4">
                Glimline Forests
            </dt>
            <dd className="sm:col-span-3 md:col-span-5 lg:col-span-10">
                The Elpor Basin is dotted with great stands of towering trees. These Glimline Forests are home
                to <strong>elves</strong>, <strong>treefolk</strong>, <strong>satyrs</strong>, <strong>fairies</strong>,
                and <strong>unicorns</strong>. The Glimline Forests are separated by great distances, making it
                impossible for one faction to rule them all.
            </dd>
            <dt className="font-bold lg:col-span-2 sm:text-right pr-4">
                Mountains of Skaar
            </dt>
            <dd className="sm:col-span-3 md:col-span-5 lg:col-span-10">
                Surrounding the Elpor Basin on three sides are the Mountains of Skaar. These treacherous cliffs
                are home
                to <strong>dragonborn</strong>, <strong>avian</strong>, <strong>gargoyles</strong>, <strong>ettercaps</strong>,
                and <strong>sphinx</strong>. Being a thin line of a mountain range surrounding the Basin, the
                length of the territory is interminable making it impractical for any ruler to control it in its
                entirety.
            </dd>
            <dt className="font-bold lg:col-span-2 sm:text-right pr-4">
                Underland
            </dt>
            <dd className="sm:col-span-3 md:col-span-5 lg:col-span-10">
                Under the entire Elpor Basin lies the Underland, a vast network of caves home
                to <strong>dwarves</strong>, <strong>goblins</strong>, <strong>myconids</strong>, <strong>minotaurs</strong>,
                and <strong>formians</strong>. The Underland connects to all other regions, making it impossible
                to form any real border to defend.
            </dd>
            <dt className="font-bold lg:col-span-2 sm:text-right pr-4">
                Silver Coast (may not occur in playtest)
            </dt>
            <dd className="sm:col-span-3 md:col-span-5 lg:col-span-10">
                The Elpor Basin empties into the Silver Sea on one side. This forms the Silver Coast which is
                populated
                by <strong>merfolk</strong>, <strong>reptilians</strong>, <strong>tortles</strong>, <strong>slimelings</strong>,
                and <strong>crabfolk</strong>. The residents of the Silver Coast were never adept enough and
                travelling inland, so any of their threats were pushed back to the sea.
            </dd>
        </dl>
        <p>
            The world outside the Elpor Basin is largely a mystery to the basin’s residents. Every now and again
            rumors, merchants, and delegations make their way into Elpor Basin… but the all consuming wars turn
            most of the Factions’ attention inwards.
        </p>
        <h5 className="text-lg" id="councils">
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
        <ul className="list-disc py-2 pl-6">
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

        <ul className="list-disc py-2 pl-6">
            <li>
                No players are traitors to the Kingdom. All players are working towards the good of the Kingdom,
                although you are likely to have differences of opinion on what exactly that means.
            </li>
            <li>
                A new government will not be established. Players will <strong
                className="underline">NOT</strong> be allowed to leave the Kingdom or otherwise lead a political
                revolution. While certain factions will have their power wax and wane, there will be no coups
                requiring Control to create a new government.
                <Footnote name="h">
                    I put this warning in here just to keep players from going &apos;off book&apos; in ways that
                    would have hurt the game experience I was aiming for. If there are lines you don&apos;t want
                    crossed, consider warning players against such behavior.
                </Footnote>
            </li>
        </ul>
    </React.Fragment>
}
