import React from "react";
import { Either, isLeft } from "fp-ts/Either";
import { PodcastEpisode } from "../../types/types";
import Link from "next/link";
import { Hero, HeroHeading, MainContent } from "../../components/Hero";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { MakeLeft } from "../../utils/io-ts-helpers";
import { getPodcastRepo } from "../../server/repository/podcast";
import { getStringFromOmegaDate } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons/faRss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type CatcherFeedProps = { link: string; description: string; icon: IconProp };
const FEED_LINKS: CatcherFeedProps[] = [
    {
        link: "/podcast/feed",
        description: "RSS feed",
        icon: faRss
    }
];

function CatcherFeed({ link, description, icon }: CatcherFeedProps) {
    return (
        (<Link href={link} title={description} className="p-4">

            <FontAwesomeIcon
                icon={icon}
                size="2x"
            />

        </Link>)
    );
}

function PodcastEpisode(props: PodcastEpisode) {
    return (
        <li className="py-2">
            <h2 className="hover:text-omega text-2xl">
                <Link href={props.link}>
                    {props.title}
                </Link>
            </h2>
            <p>{getStringFromOmegaDate(props.date)}</p>
            <p className="mt-1 pb-2">{props.description}</p>
            <audio
                src={props.audioLink}
                controls={true}
            />
        </li>
    );
}

type PodcastListParams = {
    podcastList: Either<false, PodcastEpisode[]>;
};

function PodcastList(props: PodcastListParams) {
    let podcastEpisodes;

    if (isLeft(props.podcastList)) {
        return (
            <React.Fragment>
                <p className="py-2">
                    Looks like an error occurred while getting the list of
                    podcast episodes.
                </p>
                <p className="py-2">
                    Try refreshing your browser and trying again. If that
                    doesn&apos;t work,{" "}
                    <Link href="contact">

                            send the webmaster a message through the contact
                            page

                    </Link>
                </p>
            </React.Fragment>
        );
    } else {
        podcastEpisodes = props.podcastList.right;
    }

    return (
        <React.Fragment>
            <ul>
                {podcastEpisodes.map((value) => (
                    <PodcastEpisode
                        key={value.number}
                        {...value}
                    />
                ))}
            </ul>
        </React.Fragment>
    );
}

export const getStaticProps: GetStaticProps<{
    podcastList: Either<false, PodcastEpisode[]>;
}> = async () => {
    const podcastRepo = getPodcastRepo();

    if (isLeft(podcastRepo)) {
        return {
            props: { podcastList: MakeLeft(false) }
        };
    }

    const podcastList = await podcastRepo.right.all();

    return {
        props: {
            podcastList: podcastList
        },
        revalidate: 3600
    };
};

export default function Podcast(
    props: InferGetStaticPropsType<typeof getStaticProps>
) {
    const podcastList = props.podcastList;

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>
                    Control Panel - a Play-by-Email Megagame Podcast
                </HeroHeading>
                <p className="pb-2 text-center">
                    Interested in the Play-by-Email games that OMEGA put on?
                    Join Steph, Stu and Kyle as they discuss Play-by-Email games
                    in depth, from how to play them, to how to create them to
                    the stories they&apos;ve picked up along the way!
                </p>
            </Hero>
            <MainContent>
                <div className="flex justify-center pb-2">
                    {FEED_LINKS.map((feedLink) => (
                        <CatcherFeed
                            key={feedLink.link}
                            link={feedLink.link}
                            description={feedLink.description}
                            icon={feedLink.icon}
                        />
                    ))}
                </div>
                <div className="flex-1">
                    <PodcastList podcastList={podcastList} />
                </div>
            </MainContent>
        </React.Fragment>
    );
}
