import React from 'react';

export default class Navigator extends React.Component {

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
              <a className="btn-floating btn waves-effect waves-light red"><i className="material-icons">input</i></a>
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
      </div>
    )
  }
}
