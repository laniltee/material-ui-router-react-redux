import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import LeftNavBar from './LeftNavBar';
import PaperExampleSimple from './PaperExampleSimple';
import DrawerSimpleExample from './DrawerSimpleExample';
import PaperExampleCircle from './PaperExampleCircle';
import CardExampleExpandable from './CardExampleExpandable';

import {Route, HashRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header/>

                    <div id={'layout'}>
                        <div id={'navBarWrapper'}>
                            <LeftNavBar/>
                        </div>
                        <div id={'layoutWrapper'}>
                            <Route exact path="/" component={PaperExampleSimple}/>
                            <Route path="/circle" component={PaperExampleCircle}/>
                            <Route path="/card" component={CardExampleExpandable}/>
                        </div>

                    </div>

                </div>
            </HashRouter>
        );
    }
}

export default App;
