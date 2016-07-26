import React from 'react';

export default class FooterBottom extends React.Component {
  render() {
    return(
      <div className="footer-bottom row">
        <div className="footer-bottom-container">
          <div className="copyright col l6">Copyright Â© 2015. All Rights Reserved by OSIZ,</div>
          <div className="copyright col l6">
            <a href="">Home</a>
            <a className="border-left-link" href="">About Us</a>
            <a className="border-left-link" href="">News</a>
            <a className="border-left-link" href="">Privacy</a>
            <a className="border-left-link" href="">Term and Condition</a>
            <a className="border-left-link" href="">FAQ</a>
            <a className="border-left-link" href="">Contact Us</a>
          </div>
        </div>
      </div>
    )
  }
}
