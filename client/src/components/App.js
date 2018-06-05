import React, { Component } from 'react';
import './App.css';
import {login, createAccount, resetPassword} from '../actions/user';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: '',
            data: null,
            loggedIn: false,
            formMode: 'login',
        };
    }

    componentWillMount() {
        const token = localStorage.getItem('id_token');
        if (token && token !== undefined) {
            return this.props.history.push('/dashboard');
        }
    }

    componentWillReceiveProps (newProps) {
        const {currentUser} = newProps;

        if (currentUser && currentUser.error) {
            alert(currentUser.message);
            return false;
        }

        if (currentUser !== null) {
            localStorage.setItem('id_token', currentUser.id_token);
            localStorage.setItem('user', JSON.stringify(currentUser.user));
            this.props.history.push('/dashboard');
        }
    }

    handleEmail (value) {
        this.setState({email: value});
    }

    handlePassword (value) {
        this.setState({password: value});
    }

    handleConfirmPassword (value) {
        this.setState({confirmPassword: value});
    }

    handleLogin() {
        const credentials = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.dispatch(login(credentials));
    }

    handleGet() {
        this.props.history.push('/dashboard');
    }

    handleKeyUp (e) {
        if (e.keyCode === 13) {
            this.state.formMode === 'login' ? this.handleLogin() : this.handleCreateAccount();
        }
    }

    handleCreateAccount() {
        if (this.state.password !== this.state.confirmPassword) {
            return alert('Passwords must be the same');
        }

        const credentials = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.dispatch(createAccount(credentials));
    }

    toggleFormMode() {
        const newState = this.state.formMode === 'login' ? 'create' : 'login';
        this.setState({formMode: newState});
    }

    handleForgotPassword() {
        this.setState({formMode: 'forgotPassword'});
    }

    handleResetPassword() {
        const credentials = {
            email: this.state.email,
            password: this.state.password,
        };

        this.props.dispatch(resetPassword(credentials));
    }

    handleButtonClick() {
        const { formMode } = this.state;

        if (formMode === 'login') {
            this.handleLogin();
        } else if (formMode === 'create') {
            this.handleCreateAccount();
        } else if (formMode === 'forgotPassword') {
            this.handleResetPassword();
        }
    }

    render() {
        const buttonText = {
            'login': 'Login',
            'create': 'Create an account',
            'forgotPassword': 'Reset password',
        }[this.state.formMode];

        return (
            <div className="App">
                <div className="login-form">
                    <input autoFocus='autoFocus' onKeyUp={e => this.handleKeyUp(e)} placeholder="Email" autoComplete="on" value={this.state.email} onChange={e => this.handleEmail(e.target.value)} type="email"/><br/>
                    {this.state.formMode === 'create' || this.state.formMode === 'login' ?
                        (
                            <div>
                                <input onKeyUp={e => this.handleKeyUp(e)} placeholder="Password" value={this.state.password} onChange={e => this.handlePassword(e.target.value)} type="password"/>
                                <br/>
                            </div>
                        ) : null
                    }
                    {this.state.formMode === 'create' ?
                        (
                            <div>
                                <input onKeyUp={e => this.handleKeyUp(e)} placeholder="Confirm password" value={this.state.confirmPassword} onChange={e => this.handleConfirmPassword(e.target.value)} type="password"/>
                                <br/>
                            </div>
                        ) : null
                    }
                    <button className="btn" onClick={() => this.handleButtonClick()}>{buttonText}</button>
                    {this.state.formMode === 'login' ?
                        (
                            <span className="alt-action">
                                <span onClick={() => this.toggleFormMode()}>Create an account</span>&nbsp;|&nbsp;
                                <span onClick={() => this.handleForgotPassword()}>Forgot password?</span>
                            </span>
                        ) : (
                            <span className="alt-action" onClick={() => this.toggleFormMode()}><span>Login</span></span>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default App;
