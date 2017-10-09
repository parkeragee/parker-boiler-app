import React, {Component} from 'react';
import Navigation from './common/Navigation';
import {checkAuth} from '../utils/check-auth';
import {getAccount} from '../actions/accounts';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentWillMount() {
        checkAuth(this.props.history, this.props);

        if (this.props.account === null) {
            this.props.dispatch(getAccount());
        }
    }

    componentWillReceiveProps (newProps) {
        checkAuth(this.props.history, newProps);
    }

    handleNewCustomer() {
        this.props.history.push('/customers/create');
    }

    handleSetupAccount() {
        this.props.history.push('/account');
    }

    render() {
        const {account} = this.props;
        const hasAccount = account !== null && account.length > 0;

        return (
            <div>
                <Navigation {...this.props} />
                <div className="container">
                    {hasAccount ? `Hello, ${account[0].businessName}!` : null}
                    <div className="logout">
                        <button  className="btn" onClick={() => this.handleNewCustomer()}>Add new customer</button>
                        {!hasAccount ?
                            (
                                <button className="btn" onClick={() => this.handleSetupAccount()}>Setup your account</button>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;
