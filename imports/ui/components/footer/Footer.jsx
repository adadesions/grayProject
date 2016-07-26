import React from 'react';

export default class Footer extends React.Component {
  render() {
    return(
      <div className="footer row">
        <div className="col l3 quick-links">
          <h5>Quick Links</h5>
          <li>Register</li>
          <li>About Us</li>
          <li>Terms and Conditions</li>
          <li>Privacy Policy</li>
          <li>FAQ</li>
          <li>Contact Ss</li>
        </div>
        <div className="col l3 last-news">
          <h5>Latest News</h5>
          <div><a href="">Attractive stunning templates</a></div>
          <div><span>Jul 28, ...</span></div>
          <div><a href="">Brand new responsive layouts</a></div>
          <div><span>September 10, 2014</span></div>
          <div><a href="">Attractive stunning templates</a></div>
          <div><span>Jul 28, ...</span></div>
        </div>
        <div className="col l3 have-question">
          <h5>Have any Questions</h5>
          <div><span>If you have any questions, feel free to call us toll-free</span></div>
          <div><span>Toll-free: 1-234-567-8900</span></div>
        </div>
        <div className="col l3 we-accept">
          <h5>We Accept</h5>
          <div className="col l12">
            <div className="col l3"><img src="/images/footer/payment1.png"/></div>
            <div className="col l3"><img src="/images/footer/payment2.png"/></div>
            <div className="col l3"><img src="/images/footer/payment3.png"/></div>
            <div className="col l3"><img src="/images/footer/payment4.png"/></div>
            <div className="col l3"><img src="/images/footer/payment5.png"/></div>
            <div className="col l3"><img src="/images/footer/payment6.png"/></div>
          </div>
          <h5>Follow Us</h5>
          <div className="col l12">
            <div className="col l2"><i className="fa fa-facebook" aria-hidden="true"></i></div>
            <div className="col l2"><i className="fa fa-twitter" aria-hidden="true"></i></div>
            <div className="col l2"><i className="fa fa-google-plus" aria-hidden="true"></i></div>
            <div className="col l2"><i className="fa fa-dribbble" aria-hidden="true"></i></div>
            <div className="col l2"><i className="fa fa-pinterest-p" aria-hidden="true"></i></div>
          </div>
        </div>
      </div>
    )
  }
}
