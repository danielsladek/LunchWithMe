import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './pages/Landing.js';
import { RegistrationPage } from './pages/registration.js';
import { EventsFeedPage } from './pages/EventsFeedPage.js';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute  component={Landing} />
            <Route path="reg" component={RegistrationPage} />
            <Route path="feed" component={EventsFeedPage} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
