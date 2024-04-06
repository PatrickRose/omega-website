import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React from "react";
import RESOURCES from "../../../server/repository/resources/memory";
import DesignerResource, {
    GameResourceProps
} from "../../../components/DesignerResource";

export default function DesignerResourcePage({
    params
}: {
    params: { id: keyof typeof RESOURCES };
}) {
    const details = RESOURCES[params.id];

    return <DesignerResource resource={details} />;
}

export function generateStaticParams(): { id: keyof typeof RESOURCES }[] {
    return Object.keys(RESOURCES).map((id) => {
        return { id: id as keyof typeof RESOURCES };
    });
}
