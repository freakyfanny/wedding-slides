import React from 'react';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Instagram from './Instagram';
import Header from './Header';
import Login from './Login';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            {/* <Header/>
            <Login/> */}
            <Switch>
            <Route exact path="/" component={App} />
            <Route path="/instagram" component={Instagram} />
            <Route path="*" component={App} />
            </Switch>
            <div>Footer</div>
        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
