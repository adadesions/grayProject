import React from 'react';

export default class Register extends React.Component {
  render() {
    return(
      <div className="row register">
        <h4>Register</h4>
        <div className="input-field col l12">
          <input id="referralID" type="text" className="validate"/>
          <label htmlFor="referralID">Referral ID</label>
        </div>
        <div className="input-field col l12">
          <input id="IdentificationNumber" type="number" className="validate"/>
          <label htmlFor="IdentificationNumber">Identification Number</label>
        </div>
        <div className="input-field col l12">
          <input id="firstName" type="text" className="validate"/>
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="input-field col l12">
          <input id="lastName" type="text" className="validate"/>
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="input-field col l12">
          <input id="username" type="text" className="validate"/>
          <label htmlFor="username">Username</label>
        </div>
        <div className="input-field col l12">
          <input id="password" type="password" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>
        <div className="input-field col l12">
          <input id="account number" type="text" className="validate"/>
          <label htmlFor="account number">Account Number</label>
        </div>
        <div className="input-field col l12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-field col l12">
          <input id="tel" type="text" className="validate"/>
          <label htmlFor="tel">Tel.</label>
        </div>
        <div className="input-field col l12 btn-submit">
          <a className="waves-effect waves-light btn">Submit</a>
        </div>
      </div>
    )
  }
}
