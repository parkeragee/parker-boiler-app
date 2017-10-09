import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './App';
import Dashboard from './Dashboard';
import Account from './account/Account';
import Customers from './customers';
import Schedule from './Schedule';
import CustomersCreate from './customers/CustomersCreate';
import NotFound from './NotFound';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={props => (<App {...this.props}/>)}/>
                <Route exact path='/dashboard' render={props => (<Dashboard {...this.props}/>)}/>
                <Route exact path='/customers' render={props => (<Customers {...this.props}/>)}/>
                <Route exact path='/customers/create' render={props => (<CustomersCreate {...this.props}/>)}/>
                <Route exact path='/account' render={props => (<Account {...this.props}/>)}/>
                <Route exact path='/schedule' render={props => (<Schedule {...this.props}/>)}/>
                <Route render={props => (<NotFound {...this.props} />)} />
            </Switch>
        );
    }
}

export default Router;