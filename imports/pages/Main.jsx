import React from 'react';

// Component
import PlanItem from '../ui/components/main/PlanItem.jsx';

export default class Main extends React.Component {
  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }

  getItemPlan() {
    return [
      { _id: 1,
        name: 'Gold',
        cardclass: 'col l3 z-depth-1 plan-item green',
        max: 1500,
        min: 150,
        interest: 5,
        duration: 10,
        principle: 'Not Returned'
      },
      { _id: 2,
        name: 'Diamond',
        cardclass: 'col l3 z-depth-1 plan-item orange',
        max: 3000,
        min: 300,
        interest: 3,
        duration: 10,
        principle: 'Not Returned'
      },
      { _id: 3,
        name: 'Silver',
        cardclass: 'col l3 z-depth-1 plan-item light-blue',
        max: 3000,
        min: 300,
        interest: 3,
        duration: 10,
        principle: 'Not Returned'
      },
      { _id: 4,
        name: 'Platinum',
        cardclass: 'col l3 z-depth-1 plan-item red',
        max: 3000,
        min: 300,
        interest: 3,
        duration: 10,
        principle: 'Not Returned'
      },
    ];
  }

  renderPlan() {
    return this.getItemPlan().map((items) => (
      <PlanItem key={items._id} items={items} />
    ));
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
          {this.renderPlan()}
        </div>
      </div>
    )
  }
}
