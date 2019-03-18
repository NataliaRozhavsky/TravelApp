import React, { Component } from 'react';

class DestDetails extends Component {
  render() {
    const { cityName, description } = this.props.selectedCity;
    return (
      <div className="dest-details">
        <div>{cityName}</div>
        <div>{description}</div>
      </div>
    );
  }
}

export default DestDetails;
