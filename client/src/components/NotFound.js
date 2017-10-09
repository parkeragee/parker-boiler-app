import React, { Component } from 'react';
import Navigation from './common/Navigation';

class NotFound extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <Navigation {...this.props} />
                 <b>{this.props.location.pathname}</b> - Not Found
            </div>
        );
    }
}

export default NotFound;
