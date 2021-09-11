import React, {Fragment} from "react";
import {Hero, HeroHeading} from "./Hero";
import {Link} from "react-router-dom";

export function NoMatch() {
    return (
        <Fragment>
            <Hero>
                <HeroHeading>
                    Sorry, that page wasn't found!
                </HeroHeading>
            </Hero>
            <div className="p-4">
                <p>
                    Looks like you might have got lost somewhere! It happens to the best of us.
                </p>
                <p>
                    Try going back in your browser and trying again. If that doesn't work, <Link to="contact">send the
                    webmaster a message through the contact page</Link>
                </p>
            </div>
        </Fragment>
    );
}
