import React, { Component } from 'react';
import './App.css';

const API_URL = window.location.host.includes('localhost') ? 'http://localhost:3001' : 'https://calm-mesa-90138.herokuapp.com';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      data: null,
      loggedIn: false,
    };
  }

  handleEmail (value) {
    this.setState({email: value});
  }

  handlePassword (value) {
    this.setState({password: value});
  }

  handleLogout() {
    localStorage.removeItem('id_token');
    this.setState({data: null, loggedIn: false});
  }

  handleLogin() {
    fetch(`${API_URL}/api/users/authenticate`, {
      method: 'POST',
      body: JSON.stringify({email: this.state.email, password: this.state.password}),
    }).then(response => {
      return response.json();
    }).then(data => {
      if (data.id_token) {
        localStorage.setItem("id_token", data.id_token);
        this.setState({email: '', password: '', loggedIn: true});
      }
    });
  }

  handleGet() {
    const id_token = localStorage.getItem('id_token');

    fetch(`${API_URL}/api/users`, {
      headers: new Headers({'Authorization': `Bearer ${id_token}`})
    }).then(resp => {
      if (resp.status > 400 && resp.status < 402) {
        localStorage.removeItem('id_token');
        this.setState({loggedIn: false});
      }
      return resp.json();
    }).then(data => {
      this.setState({data: JSON.stringify(data)});
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.loggedIn ?
          (
            <div>
              <button className="error" onClick={() => this.handleLogout()}>Log out</button>
              <br/>
              <button className="default" onClick={() => this.handleGet()}>GET USERS</button>
              <br/>
              <code>
                {this.state.data}
              </code>
            </div>
          ) : (
            <div className="login-form">
              <img className="logo" src="../../logo.png" alt=""/>
              <input placeholder="Email" autoComplete="on" value={this.state.email} onChange={e => this.handleEmail(e.target.value)} type="email"/><br/>
              <input placeholder="Password" value={this.state.password} onChange={e => this.handlePassword(e.target.value)} type="password"/><br/>
              <button onClick={() => this.handleLogin()}>Login</button>
            </div>
          )
        }
        <br />
      </div>
    );
  }
}

export default App;
