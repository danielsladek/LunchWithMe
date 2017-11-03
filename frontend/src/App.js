import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './pages/Landing.js';
import { RegistrationPage } from './pages/Registration.js';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute  component={Landing} />
          <Route path="reg" component={RegistrationPage} />
        </Route>
      </Router>
    );
  }
}

export default App;
