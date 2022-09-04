import {GetStaticPaths, GetStaticProps, InferGetStaticPropsType} from 'next';
import React from "react";
import RESOURCES from "../../server/repository/resources/memory";
import DesignerResource, {GameResourceProps} from "../../components/DesignerResource";

export default function DesignerResourcePage({id}: InferGetStaticPropsType<typeof getStaticProps>) {
    const details = RESOURCES[id];

    return <DesignerResource resource={details} />
}

export const getStaticProps: GetStaticProps<{id: GameResourceProps["id"]}> = async (context) => {
    const id = context?.params?.id;

    if (typeof id != 'string') {
        console.error(`Should not have called this page without a string. Params were: ${context?.params}`);
        return {
            notFound: true
        };
    }

    if (!(id in RESOURCES)) {
        return {
            notFound: true
        };

    }

    return {
        props: {id: id as GameResourceProps["id"]},
        // Long-lived cache of a week
        // We invalidate the cache when edited, so this is fine
        revalidate: 604800
    }
}


export const getStaticPaths: GetStaticPaths<InferGetStaticPropsType<typeof getStaticProps>> = async () => {
    const paths: { params: { id: GameResourceProps["id"] } }[] = [];

    Object.keys(RESOURCES).forEach(
        (id) => {
            paths.push({params: {id: id as GameResourceProps["id"]}})
        }
    );

    return {
        paths: paths,
        fallback: 'blocking',
    }
}
