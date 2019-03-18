import React, { Component } from 'react';

class Dest extends Component {
  render() {
    const {city, cityIndex, selectCity, isSelected} = this.props;
    const destClass = isSelected ? "dest-item selected" : "dest-item";
    return (
      <div className={destClass} onClick={() => {selectCity(cityIndex)}} >
        {city}
      </div>
    );
  }
}

export default Dest;
