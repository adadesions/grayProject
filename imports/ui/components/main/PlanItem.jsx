import React from 'react';

export default class PlanItem extends React.Component {
  render() {
    return(
      <div className="col l3 z-depth-1 orange plan-item">
        <div className="head-plan">
          <h3>Diamond</h3>
          <span>Sample Description</span>
        </div>
        <div className="detail-plan">
          <div><h5>Min Amount</h5><span>Bath 150.00000 Bath</span></div>
          <div><h5>Max Amount</h5><span>Bath 150.00000 Bath</span></div>
          <div><h5>Interest</h5><span>Bath 5.00000 Bath</span></div>
          <div><h5>Duration</h5><span>10 Days</span></div>
          <div><h5>Principle</h5><span>Not Returned</span></div>
          <a className="waves-effect waves-light btn">Calculate Interest</a>
        </div>
      </div>
    )
  }
}
