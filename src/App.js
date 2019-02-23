import React, { Component } from 'react';
import Header from './components/Header';
import DestList from './components/DestList';
import DestDetails from './components/DestDetails';
import './style/style.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <div className="page-content">
            <DestDetails/>
            <DestList/>
          </div>
      </div>
    );
  }
}

export default App;
