import React from "react";
import {Hero, HeroHeading, MainContent} from "../../components/Hero";
import Link from "next/link";
import RESOURCES from "../../server/repository/resources/memory";
import {GameResourceProps} from "../../components/DesignerResource";

function Resource({resource}: { resource: GameResourceProps }) {
    const link = resource.resourceType == 'site'
        ? `/designer-resources/${resource.id}`
        : resource.link

    return <div className="py-4">
        <h2 className="text-2xl hover:text-omega">
            <Link href={link} target="_blank">
                {resource.gameName}
            </Link>
        </h2>
        <p className="font-bold py-2">
            {resource.designerName}
        </p>
        <div className="resource-details">
            {resource.details}
        </div>
    </div>
}

export default function DesignerResources() {
    const resources = RESOURCES;

    return <React.Fragment>
        <Hero>
            <HeroHeading>Designer Resources</HeroHeading>
        </Hero>
        <MainContent>
            <p className="py-1">
                At OMEGA, we&apos;re passionate about helping new designers develop their games into fully fledged
                designs
            </p>
            <p className="py-1">
                A number of designers have provided a copy of their rulebooks, and some have even annotated them to
                explain how the game worked, what their design process was and a discussion on how they wrote their
                rules.
            </p>
            {Object.entries(resources).map(([index, resource]) => <Resource resource={resource} key={index}/>)}
        </MainContent>
    </React.Fragment>;
}
