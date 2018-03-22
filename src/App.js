import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import LeftNavBar from './LeftNavBar';
import PaperExampleSimple from './PaperExampleSimple';
import PaperExampleCircle from './PaperExampleCircle';
import CardExampleExpandable from './CardExampleExpandable';

import {Route, HashRouter} from "react-router-dom";

import store from './store';
import {Provider} from 'react-redux';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div className="App">
                        <Header/>

                        <div className={'layout'}>
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
            </Provider>
        );
    }
}

export default App;
