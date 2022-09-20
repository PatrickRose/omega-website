import React from "react";
import {isLeft} from "fp-ts/Either";
import {PodcastEpisode} from "../../types/types";
import Link from "next/link";
import {Hero, HeroHeading, MainContent} from "../../components/Hero";
import {GetStaticPaths, GetStaticPathsResult, GetStaticProps, InferGetStaticPropsType} from "next";
import {getPodcastRepo} from "../../server/repository/podcast";
import {getStringFromOmegaDate} from "../../utils";

export const getStaticProps: GetStaticProps<{ podcast: PodcastEpisode }> = async (context) => {
    const repo = getPodcastRepo();

    if (isLeft(repo)) {
        return {
            notFound: true
        }
    }

    const id = context.params?.id;

    if (typeof id != 'string') {
        return {
            notFound: true
        };
    }

    const episode = await repo.right.get(id);

    if (isLeft(episode)) {
        return {
            notFound: true
        };
    }

    return {
        props: {podcast: episode.right}
    }
}

export const getStaticPaths: GetStaticPaths = async function () {
    const repo = getPodcastRepo();

    if (isLeft(repo)) {
        return {
            paths: [],
            fallback: 'blocking'
        }
    }

    const episodes = await repo.right.all();

    const paths: GetStaticPathsResult["paths"] = [];

    if (!isLeft(episodes)) {
        episodes.right.forEach(
            episode => {
                paths.push({
                    params: {id: `${episode.number}`}
                })
            }
        )
    }

    return {
        paths: paths,
        fallback: 'blocking'
    };
}

export default function Podcast(props: InferGetStaticPropsType<typeof getStaticProps>) {
    const podcast = props.podcast;

    return <React.Fragment>
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
                <Link href="/podcast">
                    <a className="btn-link my-4 px-4 py-2">
                        &laquo; Back to list of episodes
                    </a>
                </Link>
            </div>
            <p>
                {podcast.description}
            </p>
            <p className="pt-4">
                <Link href={podcast.link}>
                    Download the podcast episode here!
                </Link>
            </p>
        </MainContent>
    </React.Fragment>;
}
