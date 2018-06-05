import React, { Component } from 'react';
import Navigation from '../common/Navigation';
import {saveAccount} from '../../actions/accounts';

class Account extends Component {

    constructor(props) {
        super(props);
        this.state = {
            businessName: '',
            website: '',
            phoneNumber: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
        };
    }

    componentWillReceiveProps (newProps) {
        if (newProps.account !== null && newProps.account.length > 0) {
            this.props.history.push('/dashboard');
        }
    }

    handleSaveAccount() {
        checkAuth(this.props.history, this.props);
        this.props.dispatch(saveAccount(this.state));
    }

    handleInputChange (stateType, e) {
        this.setState({[stateType]: e.target.value});
    }

    render() {
        let {account} = this.props;
        account = account && account.length > 0 ? account[0] : '';

        return (
            <div>
                <Navigation {...this.props} />
                <div className="CustomersCreate">
                    Setup your account
                    <div className="customer-form">
                        <div className="field">
                            <label className="label">Business name</label>
                            <div className="control">
                                <input value={account.businessName} onChange={e => this.handleInputChange('businessName', e)} className="input" type="text" placeholder="Business name" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Website</label>
                            <div className="control">
                                <input value={account.website} onChange={e => this.handleInputChange('website', e)} className="input" type="text" placeholder="Website" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Phone number</label>
                            <div className="control">
                                <input value={account.phoneNumber} onChange={e => this.handleInputChange('phoneNumber', e)} className="input" type="text" placeholder="Phone number" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Address</label>
                            <div className="control">
                                <input value={account.address} onChange={e => this.handleInputChange('address', e)} className="input" type="text" placeholder="Street address" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">City</label>
                            <div className="control">
                                <input value={account.city} onChange={e => this.handleInputChange('city', e)} className="input" type="text" placeholder="City" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">State</label>
                            <div className="control">
                                <input value={account.state} onChange={e => this.handleInputChange('state', e)} className="input" type="text" placeholder="State" />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Zip code</label>
                            <div className="control">
                                <input value={account.zipCode} onChange={e => this.handleInputChange('zipCode', e)} className="input" type="text" placeholder="Zip code" />
                            </div>
                        </div>
                        <button className="btn" onClick={() => this.handleSaveAccount()}>Save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Account;
