import React, { Component } from 'react';
import Navigation from '../common/Navigation';
import './CustomersCreate.css';
import {checkAuth} from '../../utils/check-auth';

class Customers extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        checkAuth(this.props.history, this.props);
    }

    componentWillReceiveProps (newProps) {
        checkAuth(this.props.history, newProps);
    }

    render() {

        return (
            <div className="Customers">
                <Navigation {...this.props} />
                Customers...
            </div>
        );
    }
}

export default Customers;
