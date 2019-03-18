import React, { Component } from 'react';

class Dest extends Component {
  render() {
    const {city, cityIndex, selectCity} = this.props;
    return (
      <div className="dest-item" onClick={() => {selectCity(cityIndex)}} >
        {city}
      </div>
    );
  }
}

export default Dest;
