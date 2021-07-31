import React, {ReactElement} from "react";
import {Circle, TextRow} from "./Placeholders";
import {Game, OMEGAEvent} from "../types/types";
import {faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons/faEnvelopeOpenText";
import {faDesktop} from "@fortawesome/free-solid-svg-icons/faDesktop";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import {getStringFromGameDate} from "../utils";
import {EventDecode, GameDecode} from "../types/io-ts-def";
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {faCalendar} from "@fortawesome/free-solid-svg-icons/faCalendar";

const icons = {
    'Play-By-Email': faEnvelopeOpenText,
    'Online game': faDesktop
}

abstract class MegagameList<T> extends React.Component<T> {
    render() {

        return <li className="grid sm:grid-cols-12 grid-cols-5 gap-4 pb-4">
            <div className="col-span-1 text-center flex flex-col justify-center items-center">
                {this.getIcon()}
            </div>
            <div className="sm:col-span-11 col-span-4">
                <h2 className="text-2xl hover:text-omega">
                    {this.getHeading()}
                </h2>
                {this.getSubtitle()}
                {this.getDate()}
                {this.getPreamble()}
            </div>
        </li>
    }

    protected abstract getPreamble(): ReactElement;

    protected abstract getSubtitle(): ReactElement;

    protected abstract getDate(): ReactElement;

    protected abstract getHeading(): ReactElement;

    protected abstract getIcon(): ReactElement;
}

class UnfetchedMegagame extends MegagameList<{ key: number }> {

    protected getIcon(): React.ReactElement {
        return <Circle className="bg-gray-500"/>;
    }

    protected getDate(): React.ReactElement {
        return <div className="w-1/4"><TextRow className="bg-gray-500 mb-2 h-3" height={false}/></div>;
    }

    protected getHeading(): React.ReactElement {
        return <div className="w-2/4"><TextRow className="bg-gray-500 mb-2"/></div>;
    }

    protected getSubtitle(): React.ReactElement {
        return <div className="w-2/6"><TextRow className="bg-gray-500 mb-2 h-3" height={false}/></div>;
    }

    protected getPreamble(): React.ReactElement {
        return <div className="w-5/6">
            {
                (new Array(3))
                    .fill(null)
                    .map((value, index) => <TextRow key={index} className="bg-gray-500 mb-2 h-4" height={false}/>)
            }
        </div>;
    }

}

abstract class Fetched<T extends {value: (Game|OMEGAEvent)}> extends MegagameList<T>{

    protected getIcon(): ReactElement {
        return <FontAwesomeIcon icon={this.getFAIcon()} title={this.getIconTitle()} className="h-full text-5xl"/>;
    }

    protected getHeading(): React.ReactElement {
        return <Link to={this.getLinkHref()}>{this.props.value.name}</Link>;
    }

    protected getDate(): React.ReactElement {
        let jsDate = getStringFromGameDate(this.props.value.date);
        return <p>{jsDate}</p>;
    }

    protected getPreamble() {
        return <p>{this.props.value.preamble}</p>;
    }

    protected abstract getFAIcon(): IconDefinition;

    protected abstract getIconTitle(): string;

    protected abstract getLinkHref(): string;
}

class FetchedMegagame extends Fetched<{value:Game}> {
    protected getLinkHref(): string  {
        return `/games/${this.props.value.id}`;
    }

    protected getIconTitle(): string {
        return this.props.value.type;
    }

    protected getFAIcon(): IconDefinition {
        return icons[this.props.value.type];
    }

    protected getSubtitle(): React.ReactElement {
        return <p className="font-bold">
            {this.props.value.designer}
        </p>;
    }

}


class FetchedEvent extends Fetched<{value:OMEGAEvent}> {
    protected getLinkHref(): string  {
        return `/other-events/${this.props.value.id}`;
    }

    protected getSubtitle(): React.ReactElement {
        return <React.Fragment />;
    }

    protected getFAIcon(): IconDefinition {
        return faCalendar;
    }

    protected getIconTitle(): string {
        return "Event";
    }
}

type GameEventListParams = {
    list: (Game|OMEGAEvent)[],
    filter?: Game["type"],
    fetched: boolean
}


export function GameEventList(props: GameEventListParams) {
    const {fetched, filter} = props;

    let gameList: Array<Game | OMEGAEvent | number> = fetched
        ? props.list
        : [1, 2];

    return <React.Fragment>
        <ul>
            {
                gameList
                    // We filter on the client side because we're not going to have a lot of things to filter
                    .filter(
                        value => {
                            if (filter === undefined) {
                                return true;

                            }

                            if (typeof value === 'number') {
                                return true;
                            }

                            if (GameDecode.is(value)) {
                                return value.type === filter;
                            }

                            return true;
                        }
                    ).map(
                        value => {
                            if (typeof value === 'number') {
                                return <UnfetchedMegagame key={value}/>
                            }

                            if (GameDecode.is(value)) {
                                return <FetchedMegagame key={value.id} value={value}/>
                            }

                            if (EventDecode.is(value)) {
                                return <FetchedEvent key={value.id} value={value}/>
                            }

                            throw Error('Unknown value ' + value);
                        }
                    )
            }
        </ul>
    </React.Fragment>
}
