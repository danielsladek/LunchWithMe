import React, { Component } from 'react';
import logo from './logo.svg';
import { RegisterForm } from './components/registerForm.js';
import Landing from './pages/Landing.js';
import Registration from './pages/registration.js';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Landing}>
          <Route path="reg" component={Registration} />
        </Route>
      </Router>
    );
  }
}

export default App;
