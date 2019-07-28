import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

class Login extends Component {

  constructor(props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  onLogout() {
    window.sessionStorage.setItem('user_email', "");
    window.sessionStorage.setItem('user_phone', "");
    window.sessionStorage.setItem('user_name', "");
    window.sessionStorage.setItem('contact_name', "");
    window.sessionStorage.setItem('contact_phone', "");
    this.props.history.push('/discover')
  }

  render() {
    let email = window.sessionStorage.getItem('user_email');
    let phone = window.sessionStorage.getItem('user_phone');
    let name = window.sessionStorage.getItem('user_name');
    let contact_name = window.sessionStorage.getItem('contact_name');
    let contact_phone = window.sessionStorage.getItem('contact_phone');
    return (
        <div>

<h3>{name}</h3>

<h3>{email}</h3>
<br/>
<h2>Emergency Contact</h2>
<h3>{contact_name}: {contact_phone}</h3>
<h4>Check-in</h4>
<h3>{phone}</h3>

<button onClick={this.onLogout}>Logout</button>
<br/>
<Link to={'/login'} className="nav-link">Login</Link>
<br/>
<Link to={'/register'} className="nav-link">Register</Link>

        </div>
    );
  }
}

export default Login;