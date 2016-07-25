import React from 'react';

// Component
import PlanItem from '../ui/components/main/PlanItem.jsx';

export default class Main extends React.Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }

  render() {
    return(
      <div className="row main">
        <div className="col l12">
          <div className="slider z-depth-1">
            <ul className="slides">
              <li>
                <img src="/images/main/1.jpg"/>
                <div className="caption center-align">
                  <h3>This is our big Tagline!</h3>
                  <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src="/images/main/2.jpg"/>
                <div className="caption left-align">
                  <h3>Left Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
              </li>
              <li>
                <img src="/images/main/3.jpg"/>
                <div className="caption right-align">
                  <h3>Right Aligned Caption</h3>
                  <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col l12 plan">
          <h4>Our Plans</h4>
          <PlanItem />
          <PlanItem />
          <PlanItem />
          <PlanItem />
        </div>
      </div>
    )
  }
}
