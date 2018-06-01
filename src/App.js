import React, { Component } from 'react';

import './App.css';
// import Dashboard from './components/Dashboard'
// import Wizard from './components/Wizard'
import routes from './routes'
import Header from './components/Header'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <Header/>
        {routes}
        </div> 
      </div>
    );
  }
}

export default App;
