import React from "react";
import { Hero, HeroHeading, MainContent } from "../../../components/Hero";
import Link from "next/link";

export default function GameStructure({
    heading,
    subHeading,
    mainContent
}: {
    heading: React.ReactElement;
    subHeading: React.ReactElement;
    mainContent: React.ReactElement;
}) {
    return (
        <React.Fragment>
            <Hero>
                <div className="text-center">
                    <HeroHeading
                        className="flex justify-center pb-3"
                        padding={false}
                    >
                        {heading}
                    </HeroHeading>
                    {subHeading}
                </div>
            </Hero>
            <MainContent>
                <div className="flex justify-center">
                    <Link
                        href="/games"
                        className="btn-link my-4 px-4 py-2"
                    >
                        &laquo; Back to games list
                    </Link>
                </div>
                {mainContent}
            </MainContent>
        </React.Fragment>
    );
}
