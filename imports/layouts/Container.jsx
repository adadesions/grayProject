import React from 'react';

// Component
import Navigator from '../ui/components/navigator/Navigator.jsx';

export default class Home extends React.Component {
  render() {
    return(
      <div className="container-layout">
        <Navigator />
        {this.props.content}
      </div>
    )
  }
}
