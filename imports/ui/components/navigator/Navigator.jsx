import React from 'react';
import { $ } from 'meteor/jquery';

export default class Navigator extends React.Component {
  componentDidMount() {
    $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 300,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin: false, // Displays dropdown below the button
      alignment: 'left' // Displays dropdown with edge aligned to the left of button
      }
    );

    $('.btn-submit-login').click(() => {
      $('.dropdown-button').dropdown('close');
    })
  }

  onClickLogo() {
    FlowRouter.go('main');
  }

  onClickSignUp() {
    FlowRouter.go('register');
  }

  render() {
    return(
      <div className="row navigator z-depth-1">
        <div className="col l12 navigator-top">
          <div className="col l6"><span className="tel">+1 800 245 39 251</span></div>
          <div className="col l6 signin-signup">
            <div>
              <a className="dropdown-button btn-floating btn waves-effect waves-light red" data-induration="true" data-activates='dropdown1'><i className="material-icons">input</i></a>
              <span>login</span>
              <a onClick={this.onClickSignUp} className="btn-floating btn waves-effect waves-light green"><i className="material-icons">person_pin</i></a>
              <span>register</span>
            </div>
          </div>
          <div className="col l12"><a href="">info@yourdomain.com</a></div>
        </div>
        <div className="col l12 navigator-bottom">
          <div className="col l4 navigator-logo">
            <a onClick={this.onClickLogo} href=""><img src="/images/navigator/logo.png"/></a>
          </div>
          <div className="col l8 navigator-menu">
            <div className="navigator-list-menu">
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Terms</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Contact Us</a></li>
            </div>
          </div>
        </div>
        <ul id='dropdown1' className='dropdown-content active'>
          <h5>Login</h5>
          <li className="divider"></li>
          <div className="input-field col l12">
            <input id="username" type="text" className="validate"/>
            <label htmlFor="username">Username</label>
          </div>
          <div className="input-field col l12">
            <input id="password" type="password" className="validate"/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field col l12 btn-submit">
            <a className="waves-effect waves-light btn btn-submit-login">Submit</a>
          </div>
        </ul>
      </div>
    )
  }
}
