import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import { Games } from "./Pages/Games";
import { SingleGame } from "./Pages/SingleGame";
import Planning from './Pages/Planning';
import Contact from './Pages/Contact';
import CodeOfConduct from "./Pages/CodeOfConduct";
import AboutMegagames from "./Pages/AboutMegagames";
import { NoMatch } from "./components/NoMatch";
import * as paths from "./utils/path";

function WrappedSingleGame() {
    const game = useParams<{ game: string }>()["game"];

    return <SingleGame game={game} />;
}

class App extends Component<{}> {
    render() {
        return <BrowserRouter>
            <Header />
            <main className='flex-1 flex flex-col'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path={paths.gameList.pattern}>
                        <Games />
                    </Route>
                    <Route path={paths.singleGame.pattern}>
                        <WrappedSingleGame />
                    </Route>
                    <Route path={paths.planning.pattern}>
                        <Planning />
                    </Route>
                    <Route path={paths.contact.pattern}>
                        <Contact />
                    </Route>
                    <Route path={paths.codeOfConduct.pattern}>
                        <CodeOfConduct />
                    </Route>
                    <Route path={paths.aboutMegagames.pattern}>
                        <AboutMegagames />
                    </Route>
                    <Route path="*">
                        <NoMatch />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    }
}

export default App;
