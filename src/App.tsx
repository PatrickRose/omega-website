import React, {Component, Fragment} from 'react';
import {BrowserRouter, Link, Route, Switch, useParams} from "react-router-dom";
import {Footer} from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import {Hero, HeroHeading} from "./components/Hero";
import {Games} from "./Pages/Games";
import {SingleGame} from "./Pages/SingleGame";
import Planning from './Pages/Planning';
import Contact from './Pages/Contact';
import CodeOfConduct from "./Pages/CodeOfConduct";

function WrappedSingleGame() {
    const game = useParams<{game:string}>()["game"];

    return <SingleGame game={game } />;
}

class App extends Component<{}> {
    render() {
        return <BrowserRouter>
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
                    <Route path="/planning">
                        <Planning />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/code-of-conduct">
                        <CodeOfConduct />
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </BrowserRouter>
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
