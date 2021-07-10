import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import { Footer } from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';

class App extends Component<{}> {
    render() {
        return <Fragment>
            <Header />
            <main className='flex-1 flex flex-col'>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Fragment>
    }
}

function NoMatch() {
    return (
        <div>
            <h3>
                Sorry, that page wasn't found!
            </h3>
        </div>
    );
}

export default App;
