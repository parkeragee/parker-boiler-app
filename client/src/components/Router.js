import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' render={props => (<SegmentOverview {...this.props}/>)}/>
            </Switch>
        );
    }
}

export default Router;