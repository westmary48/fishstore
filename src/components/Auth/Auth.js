import React from 'react';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (e) => {
    e.preventDefault();
    console.error('you clicked a button');
  }

  render() {
    return (
      <div className = "Auth">
      <h1>Auth</h1>
      <button className = "btn btn-secondary" onClick = {this.loginClickEvent}>Login with Google</button>
      </div>
    );
  }
}

export default Auth;
