import React from "react";
import {Link} from "react-router-dom";
import {LinkDef} from "../utils/utils";
import {Hero, HeroHeading, MainContent} from "../components/Hero";
import {Game} from "../types/types";
import {apiCall} from "../utils/api";
import {UpcomingEventsAPIDecode} from "../types/io-ts-def";
import {TextRow} from "../components/Placeholders";

const homeLinks: LinkDef[] = [
    {
        linkPath: "games",
        linkText: "See our upcoming games, and book a space"
    },
    {
        linkPath: "about-megagames",
        linkText: "What is a megagame? Find out more!"
    },
    {
        linkPath: "planning",
        linkText: "Join our planning team, or pitch your game design"
    }
]

function HomePageLinks() {
    return <div className="flex justify-center pb-16 flex-col sm:flex-row">
        {
            homeLinks.map(value => <Link className="flex-1 flex justify-center flex-col sm:m-1 m-4 p-4 btn-link border-2"
                                         to={value.linkPath} key={value.linkText}>
                {value.linkText}
            </Link>)
        }
    </div>
}

type HomeState = {
    fetched: false | Game[]
}

type UpcomingEventTypes = Game | number;

abstract class UpcomingEvent<T extends UpcomingEventTypes> extends React.Component<{ value: T }> {
    render() {
        return <div className="flex-1 px-3">
            <h3 className="text-center text-xl pb-2">{this.getHeading()}</h3>
            {this.getSubtitle()}
        </div>
    }

    protected abstract getSubtitle(): React.ReactElement;

    protected abstract getHeading(): React.ReactElement;
}

class Megagame extends UpcomingEvent<Game> {
    protected getHeading(): React.ReactElement {
        const {value} = this.props;

        return <Link to={`/games/${value.id}`}>{value.name}</Link>;
    }

    protected getSubtitle(): React.ReactElement {
        const {value} = this.props;

        return <React.Fragment>
            <p>{value.preamble}</p>
            <div className="flex">
                <Link to={`/games/${value.id}`} className="btn-link m-4 p-4 w-full">Book a space</Link>
            </div>
        </React.Fragment>;
    }
}

class UnFetched extends UpcomingEvent<number> {
    protected getHeading(): React.ReactElement {
        return <div className="w-full"><TextRow className="bg-gray-500 mb-2"/></div>;
    }

    protected getSubtitle(): React.ReactElement {
        const repeat = [1, 2, 3]
        return <React.Fragment>
            {
                repeat.map(value => <div key={value} className="w-full"><TextRow className="bg-gray-500 mb-2 h-3"
                                                                                 height={false}/></div>)
            }
        </React.Fragment>;
    }
}

function UpcomingEvents(props: { events: false | Game[] }) {
    const toDisplay: UpcomingEventTypes[] = props.events || [1, 2, 3];

    let eventList;

    if (toDisplay.length === 0) {
        eventList = <div>
            <p>We don't have any upcoming events announced yet!</p>
            <p>However, feel free to look at <Link to={"/games#past"}>our past games</Link></p>
        </div>
    } else {
        eventList = <div className="lg:w-3/4 flex flex-col sm:flex-row"> {toDisplay.map(
            value => typeof value === 'number'
                ? <UnFetched value={value} key={value}/>
                : <Megagame value={value} key={value.id}/>
        )
        }
        </div>
    }


    return <div className="w-full flex p-4 justify-center">{eventList}</div>
}

export default class Home extends React.Component<{}, HomeState> {
    private controller: AbortController | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {fetched: false};
    }

    componentDidMount() {
        this.getUpcomingEvents();
    }

    private getUpcomingEvents() {
        const {controller, response: api} = apiCall('upcoming');

        this.controller = controller;

        api.then(response => {
            this.controller = undefined;
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return response.json();
        }).then(value => {
                if (!UpcomingEventsAPIDecode.is(value)) {
                    throw new Error('API response wasn\'t right? ' + JSON.stringify(value))
                }

                this.setState({fetched: value.events});
            }
        ).catch(
            reason => {
                if (!(reason instanceof DOMException)) {
                    this.setState({
                        fetched: []
                    })
                }
            }
        );
    }

    componentWillUnmount() {
        if (this.controller) {
            this.controller.abort();
        }
    }

    render() {
        const {fetched} = this.state;

        return <React.Fragment>
            <Hero>
                <HeroHeading>
                    OMEGA hosts and produces online megagames.
                </HeroHeading>
                <p className="text-xl pb-16">
                    From grand strategy to roleplay, economics to fireballs, our games blend serious
                    political simulation with emergent storytelling in settings both mundane and fantastical.
                </p>
                <HomePageLinks/>
            </Hero>
            <MainContent>
                <h2 className="text-2xl">Our next events</h2>
                <UpcomingEvents events={fetched}/>
            </MainContent>
        </React.Fragment>;
    }
}

