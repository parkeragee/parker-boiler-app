import React, { Component } from 'react';
import './CustomersCreate.css';
import {checkAuth} from '../../utils/check-auth';

class CustomersCreate extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // checkAuth(this.props.history, this.props);
    }

    componentWillReceiveProps (newProps) {
        // checkAuth(this.props.history, newProps);
    }

    render() {

        return (
            <div className="CustomersCreate">
                Create new customer
                <div className="customer-form">
                    <input className="input" type="text" placeholder="First name" />
                    <input className="input" type="text" placeholder="Last name" />
                    <input className="input" type="text" placeholder="Email address" />
                    <input className="input" type="text" placeholder="Phone number" />
                    <input className="input" type="text" placeholder="Street address" />
                    <input className="input" type="text" placeholder="City" />
                    <input className="input" type="text" placeholder="State" />
                    <input className="input" type="text" placeholder="Zip code" />
                    <span id="add-custom-field">Add custom field</span>
                </div>
            </div>
        );
    }
}

export default CustomersCreate;
