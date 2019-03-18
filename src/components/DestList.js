import React, { Component } from 'react';
import Dest from './Dest';

class DestList extends Component {
    renderDestinations() {
        return this.props.data.map((item, index) => {
            return <Dest 
                        key={index}
                        cityIndex={index} 
                        selectCity={this.props.handleSelectCity} 
                        city={item.cityName} 
                    />
        })
    }

    render() {
        return (
            <div className="dest-list">
                {this.renderDestinations()}
            </div>
        );
    }
}

export default DestList;
