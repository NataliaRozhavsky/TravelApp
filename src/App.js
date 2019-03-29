import React, { Component } from 'react';
import Header from './components/Header';
import DestList from './components/DestList';
import DestDetails from './components/DestDetails';
import './style/style.scss';
import data from './mock/data';
import DestMenu from './components/DestMenu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: 0,
      selectedMenuItem: 0
    }
  }

  updateSelectedCity = (cityIndex) => {
    this.setState({selectedCity: cityIndex, selectedMenuItem: 0});
  }
  updateSelectedMenuItem = (menuItem) => {
    this.setState({selectedMenuItem: menuItem});
  }
  render() {
    const selectedCity = data[this.state.selectedCity];
    if (!selectedCity) {
      return null;
    }

    return (
      <div className="App">
          <Header/>
          <div className="page-content">
            <DestDetails selectedCity={selectedCity} selectedMenuItem={this.state.selectedMenuItem} />
            <DestMenu handleSelectMenuItem={this.updateSelectedMenuItem}/>
            <DestList handleSelectCity={this.updateSelectedCity} data={data} selectedIndex={this.state.selectedCity}/>
          </div>
      </div>
    );
  }
}

export default App;
