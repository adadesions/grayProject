import React, { PropTypes } from 'react';

export default class PlanItem extends React.Component {
  render() {
    return(
      <div className={this.props.items.cardclass}>
        <div className="head-plan">
          <h3>{this.props.items.name}</h3>
          <span>Sample Description</span>
        </div>
        <div className="detail-plan">
          <div><h5>Min Amount</h5><span>Bath {this.props.items.min} Bath</span></div>
          <div><h5>Max Amount</h5><span>Bath {this.props.items.max} Bath</span></div>
          <div><h5>Interest</h5><span>Bath {this.props.items.interest} Bath</span></div>
          <div><h5>Duration</h5><span>{this.props.items.duration} Days</span></div>
          <div><h5>Principle</h5><span>{this.props.items.principle}</span></div>
          <a className="waves-effect waves-light btn">Calculate Interest</a>
        </div>
      </div>
    )
  }
}

PlanItem.propTypes = {
  items: PropTypes.object.isRequired,
};
