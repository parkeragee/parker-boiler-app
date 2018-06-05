import React, {Component} from 'react';
import {logout} from '../../actions/user';
import {checkAuth} from '../../utils/check-auth';
import {getAccount} from '../../actions/accounts';

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileMenuActive: false,
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

    handleRedirect (route) {
        return this.props.history.push(`/${route}`);
    }

    handleLogout() {
        this.props.dispatch(logout());
        localStorage.removeItem('id_token');
        localStorage.removeItem('user');
        return this.props.history.push(`/`);
    }

    handleMenuOpen() {
        const {mobileMenuActive} = this.state;
        this.setState({mobileMenuActive: !mobileMenuActive});
    }

    _checkActiveState (route) {
        let page = this.props.location.pathname;
        page = page.replace('/', '');
        return page === route;
    }

    render() {
        return (
            <nav className="navbar is-dark" aria-label="main navigation">
                <div className="navbar-brand">
                    <a onClick={() => this.handleRedirect('')} className="navbar-item">
                        <img src="//bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma"/>
                    </a>
                    <div onClick={() => this.handleMenuOpen()} className={`navbar-burger ${this.state.mobileMenuActive ? 'is-active' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className={`navbar-menu ${this.state.mobileMenuActive ? 'is-active' : ''}`}>
                    <div className="navbar-end">
                        <a onClick={() => this.handleRedirect('account')} className={`navbar-item${this._checkActiveState('account') ? ' is-active' : ''}`}><i className="fa fa-cog" aria-hidden="true"></i>&nbsp;Account</a>
                        <a onClick={() => this.handleLogout()} className="navbar-item"><i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;Logout</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
