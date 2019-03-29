import React, { Component } from 'react';

class DestMenu extends Component {
      render() {
       
        return (
         <div className="dest-menu" >
           <div className="dest-menu-item" onClick={() => {this.props.handleSelectMenuItem(0)}}>
             Description
           </div>
           <div className="dest-menu-item" onClick={() => {this.props.handleSelectMenuItem(1)}}>
             Flights Info
           </div>
           <div className="dest-menu-item" onClick={() => {this.props.handleSelectMenuItem(2)}}> 
             Attractions
           </div>
        </div>
        );
      }
}
export default DestMenu;