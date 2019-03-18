import React, { Component } from 'react';
import Header from './components/Header';
import DestList from './components/DestList';
import DestDetails from './components/DestDetails';
import './style/style.scss';
import data from './mock/data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: 0
    }
  }

  updateSelectedCity = (cityIndex) => {
    this.setState({selectedCity: cityIndex});
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
            <DestDetails selectedCity={selectedCity} />
            <DestList handleSelectCity={this.updateSelectedCity} data={data} />
          </div>
      </div>
    );
  }
}

export default App;
