import React from 'react';

// Component
import Navigator from '../ui/components/navigator/Navigator.jsx';
import Footer from '../ui/components/footer/Footer.jsx';
import FooterBottom from '../ui/components/footer/FooterBottom.jsx';
export default class Home extends React.Component {
  render() {
    return(
      <div className="container-layout">
        <Navigator />
        {this.props.content}
        <Footer />
        <FooterBottom />
      </div>
    )
  }
}
