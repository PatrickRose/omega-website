import React, { useId, useState } from "react";
import { Hero, HeroHeading, MainContent } from "./Hero";
import { Game } from "../types/types";
import Link from "next/link";
import Image, { ImageProps } from "next/legacy/image";

type GameID =
    | "councils-of-elporia"
    | "gods-wars"
    | "tempest"
    | "running-hot"
    | "red-planet-rising"
    | "aftermath"
    | "pitching-rubric"
    | "successful-pitches";

type BaseResourceProps = {
    id: GameID;
    gameName: string;
    type: Game["type"];
    designerName: string;
    details: React.ReactNode;
};

type SiteResource = BaseResourceProps & {
    resourceType: "site";
    content: React.ReactNode;
};

type ExternalResource = BaseResourceProps & {
    resourceType: "external" | "pitch-doc";
    link: string;
};

export type GameResourceProps = SiteResource | ExternalResource;

export function Footnote({
    name,
    children
}: {
    name: string | number;
    children: React.ReactNode;
}) {
    const [display, setDisplay] = useState<boolean>(false);

    const id = useId();

    return (
        <React.Fragment>
            <button
                className="btn-link ml-1 px-1 text-sm"
                onClick={() => setDisplay(!display)}
                aria-controls={id}
            >
                [{name}]
            </button>
            <span
                className={`${
                    display ? "" : "hidden"
                } p-2 text-center block text-base bg-omega-dark text-omega-light not-italic`}
                id={id}
            >
                {children}
            </span>
        </React.Fragment>
    );
}

export function GameImage({
    image,
    alt
}: {
    image: ImageProps["src"];
    alt: string;
}) {
    return (
        <div className="flex justify-center justify-items-center py-2">
            <div className="md:w-3/4 lg:w-1/2">
                <Image
                    src={image}
                    alt={alt}
                />
            </div>
        </div>
    );
}

export default function DesignerResource({
    resource
}: {
    resource: GameResourceProps;
}) {
    return (
        <React.Fragment>
            <Hero>
                <HeroHeading>{resource.gameName}</HeroHeading>
                <p className="pb-8 text-center text-xl font-bold">
                    {resource.designerName}
                </p>
            </Hero>
            <MainContent>
                <div className="resource-details">{resource.details}</div>
                <hr className="py-2" />
                <div className="resource-details">
                    {resource.resourceType != "site" ? (
                        <Link href={resource.link}>
                            This resource is hosted externally
                        </Link>
                    ) : (
                        resource.content
                    )}
                </div>
            </MainContent>
        </React.Fragment>
    );
}
