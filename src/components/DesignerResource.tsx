import React, {useId, useState} from "react";
import {Hero, HeroHeading, MainContent} from "./Hero";
import {Game} from "../types/types";
import Link from "next/link";

type GameID = 'councils-of-elporia'

type BaseResourceProps = {
    id: GameID,
    gameName: string,
    type: Game["type"],
    designerName: string,
    details: React.ReactNode
}

type SiteResource = BaseResourceProps & {
    resourceType: 'site',
    content: React.ReactNode
}

type ExternalResource = BaseResourceProps & {
    resourceType: 'external',
    link: string,
}

export type GameResourceProps = SiteResource | ExternalResource;

export function Footnote({name, children}: {name: string, children: React.ReactNode}) {
    const [display, setDisplay] = useState<boolean>(false);

    const id = useId();

    return <React.Fragment>
        <button
            className="ml-1 text-sm btn-link rounded-none"
            onClick={() => setDisplay(!display)}
            aria-controls={id}
        >
            [{name}]
        </button>
        <span
            className={`${display ? '' : 'hidden'} p-2 text-center block text-base bg-omega-dark text-omega-light not-italic`}
            id={id}
        >
            {children}
        </span>
    </React.Fragment>
}

export default function DesignerResource({resource}: {resource: GameResourceProps}) {
    return <React.Fragment>
        <Hero>
            <HeroHeading>{resource.gameName}</HeroHeading>
            <p className="text-center font-bold pb-8 text-xl">
                {resource.designerName}
            </p>
        </Hero>
        <MainContent>
            <div className="resource-details">
                {resource.details}
            </div>
            <hr className="py-2"/>
            <div className="resource-details">
                {
                    resource.resourceType == 'external'
                        ? <Link href={resource.link}>This resource is hosted externally</Link>
                        : resource.content
                }
            </div>
        </MainContent>
    </React.Fragment>;
}
