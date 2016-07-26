import React from 'react';

export default class Register extends React.Component {
  render() {
    return(
      <div className="row register">
        <h4>Register</h4>
        <div className="input-field col l12">
          <input id="referralName" type="text" class="validate"/>
          <label for="referralName">Referral Name</label>
        </div>
        <div className="input-field col l12">
          <input id="firstName" type="text" class="validate"/>
          <label for="firstName">First Name</label>
        </div>
        <div className="input-field col l12">
          <input id="lastName" type="text" class="validate"/>
          <label for="lastName">Last Name</label>
        </div>
        <div className="input-field col l12">
          <input id="username" type="text" class="validate"/>
          <label for="username">Username</label>
        </div>
        <div className="input-field col l12">
          <input id="password" type="password" class="validate"/>
          <label for="password">Password</label>
        </div>
        <div className="input-field col l12">
          <input id="tranactionPin" type="text" class="validate"/>
          <label for="tranactionPin">Tranaction Pin</label>
        </div>
        <div className="input-field col l12">
          <input id="email" type="email" class="validate"/>
          <label for="email">Email</label>
        </div>
        <div className="input-field col l12 btn-submit">
          <a className="waves-effect waves-light btn">Submit</a>
        </div>
      </div>
    )
  }
}
