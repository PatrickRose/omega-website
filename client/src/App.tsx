import React, {Component, Fragment} from 'react';
import {Link, Route, Switch, useParams} from "react-router-dom";
import {Footer} from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import {Hero, HeroHeading} from "./components/Hero";
import {Games} from "./Pages/Games";
import {SingleGame} from "./Pages/SingleGame";

function WrappedSingleGame() {
    const game = useParams<{game:string}>()["game"];

    return <SingleGame game={game } />;
}

class App extends Component<{}> {
    render() {
        return <Fragment>
            <Header/>
            <main className='flex-1 flex flex-col'>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/games">
                        <Games />
                    </Route>
                    <Route path="/games/:game">
                        <WrappedSingleGame />
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </Fragment>
    }
}

function NoMatch() {
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
                    Try going back in your browser and trying again. If that doesn't work, <Link to="contact">send the webmaster a message through the contact page</Link>
                </p>
            </div>
        </Fragment>
    );
}

export default App;
