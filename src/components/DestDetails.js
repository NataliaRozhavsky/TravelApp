import React, { Component } from 'react';

class DestDetails extends Component {
  render() {
    const { cityName, description, flightInfo, attractions } = this.props.selectedCity;
    const itemMenu = this.props.selectedMenuItem;
    let displayData;
    if (itemMenu === 0) {
       displayData = description;
    } else if (itemMenu === 1) {
      displayData = flightInfo;
    } else {
      displayData = "attractions";
    }

    return (
      <div className="dest-details">
         <div>{cityName}</div>
         <div>{displayData}</div>
      </div>
    );
  }
}

export default DestDetails;
