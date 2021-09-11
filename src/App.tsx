import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, useParams} from "react-router-dom";
import {Footer} from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import {Games} from "./Pages/Games";
import {SingleGame} from "./Pages/SingleGame";
import Planning from './Pages/Planning';
import Contact from './Pages/Contact';
import CodeOfConduct from "./Pages/CodeOfConduct";
import AboutMegagames from "./Pages/AboutMegagames";
import {NoMatch} from "./components/NoMatch";

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
                    <Route path="/about-megagames">
                        <AboutMegagames />
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

export default App;
