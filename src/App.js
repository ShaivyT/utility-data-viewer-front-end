import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import {Router} from 'react-router';
import history from "./History/history";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router history={history}>
            <Routes/>
        </Router>
      </div>
    );
  }
}

export default App;
