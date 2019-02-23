import React, { Component } from 'react';
import Dest from './Dest';

class DestList extends Component {
  render() {
    return (
      <div className="DestList">
        <Dest city="Riga"/>
        <Dest city="Helsinki"/>
      </div>
    );
  }
}

export default DestList;
