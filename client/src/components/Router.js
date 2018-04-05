import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import NotFound from './NotFound';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={props => (<App {...this.props}/>)}/>
                <Route exact path='/dashboard' render={props => (<Dashboard {...this.props}/>)}/>
                <Route render={props => (<NotFound {...this.props} />)} />
            </Switch>
        );
    }
}

export default Router;