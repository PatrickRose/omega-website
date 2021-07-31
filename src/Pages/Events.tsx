import React from "react";

import {OMEGAEvent} from "../types/types";
import {apiCall} from "../utils/api";
import {EventAPIDecode} from "../types/io-ts-def";
import {Hero, HeroHeading} from "../components/Hero";
import {GameEventList} from "../components/GameEventList";

type EventState = {
    fetched: boolean,
    eventList: OMEGAEvent[],
}
type EventProps = {}

export class Events extends React.Component<EventProps, EventState> {
    private controller?: AbortController;

    constructor(props: EventProps) {
        super(props);

        this.state = {
            fetched: false,
            eventList: [],
        };
    }

    componentDidMount() {
        this.getAllEvents();
    }

    componentWillUnmount() {
        this.controller?.abort();
    }

    private getAllEvents() {
        this.controller?.abort();

        this.controller = new AbortController();

        const api = apiCall('events', this.controller);

        api.then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }

            return response.json();
        }).then(value => {
                if (!EventAPIDecode.is(value)) {
                    throw new Error('API response wasn\'t right? ' + JSON.stringify(value))
                }

                value.events.sort((a, b): number => {
                    const aDate = a.date;
                    const bDate = b.date;

                    let keys: (keyof typeof aDate)[] = ['year', 'month', 'day'];

                    for (let key of keys) {
                        if (aDate[key] !== bDate[key]) {
                            return aDate[key] - bDate[key]
                        }
                    }

                    return 0;
                });

                this.setState({
                    fetched: true,
                    eventList: value.events
                });
            }
        );
    }

    render() {
        const {eventList, fetched} = this.state;

        return <React.Fragment>
            <Hero>
                <HeroHeading>Upcoming events</HeroHeading>
            </Hero>
            <div className="p-4">
                <p>
                    OMEGA also runs events that are "megagame adjacent", ranging from playtests
                    to smaller activities that have megagame-like qualities.
                </p>

                <GameEventList
                    fetched={fetched}
                    list={eventList}
                />
            </div>
        </React.Fragment>;
    }
}
