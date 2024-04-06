import React, { Fragment } from "react";
import { Hero, HeroHeading, MainContent } from "./Hero";
import Link from "next/link";

export function NoMatch() {
    return (
        <Fragment>
            <Hero>
                <HeroHeading>Sorry, that page wasn&apos;t found!</HeroHeading>
            </Hero>
            <MainContent>
                <p>
                    Looks like you might have got lost somewhere! It happens to
                    the best of us.
                </p>
                <p>
                    Try going back in your browser and trying again. If that
                    doesn&apos;t work,{" "}
                    <Link href="/contact">
                        send the webmaster a message through the contact page
                    </Link>
                </p>
            </MainContent>
        </Fragment>
    );
}
