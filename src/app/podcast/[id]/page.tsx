import React from "react";
import { isLeft } from "fp-ts/Either";
import { PodcastEpisode } from "../../../types/types";
import Link from "next/link";
import { Hero, HeroHeading, MainContent } from "../../../components/Hero";
import {
    GetStaticPaths,
    GetStaticPathsResult,
    GetStaticProps,
    InferGetStaticPropsType
} from "next";
import { getPodcastRepo } from "../../../server/repository/podcast";
import { getStringFromOmegaDate } from "../../../utils";
import { notFound } from "next/navigation";

export const generateStaticParams = async function (): Promise<
    { id: string }[]
> {
    const repo = getPodcastRepo();

    if (isLeft(repo)) {
        return [];
    }

    const episodes = await repo.right.all();

    if (isLeft(episodes)) {
        return [];
    }

    return episodes.right.map((episode) => {
        return { id: `${episode.number}` };
    });
};

export default async function Podcast(props: {
    params: Promise<{ id: string }>;
}) {
    const params = await props.params;
    const repo = getPodcastRepo();

    if (isLeft(repo)) {
        notFound();
    }

    const podcastRet = await repo.right.get(params.id);

    if (isLeft(podcastRet)) {
        notFound();
    }

    const podcast = podcastRet.right;

    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>
                    Episode {podcast.number}: {podcast.title}
                </HeroHeading>
                <p className="pb-8 text-center font-bold">
                    {getStringFromOmegaDate(podcast.date)}
                </p>
            </Hero>
            <MainContent>
                <div className="flex justify-center">
                    <Link
                        href="/podcast"
                        className="btn-link my-4 px-4 py-2"
                    >
                        &laquo; Back to list of episodes
                    </Link>
                </div>
                <p>{podcast.description}</p>
                <p className="pt-4">
                    <Link href={podcast.link}>
                        Download the podcast episode here!
                    </Link>
                </p>
            </MainContent>
        </React.Fragment>
    );
}
