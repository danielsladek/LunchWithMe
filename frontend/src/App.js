import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers';
import logo from './logo.svg';
import Landing from './pages/Landing.js';
import { RegistrationPage } from './pages/registration.js';
import { EventsFeedPage } from './pages/EventFeedPage/EventsFeedPage';
import { NewLunchPage } from './pages/newLunch.js'; 

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute  component={Landing} />
            <Route path="reg" component={RegistrationPage} />
            <Route path="addLunch" component={NewLunchPage} />
            <Route path="feed" component={EventsFeedPage} />
          </Route>
        </Router>
      </div>
    );
  }
}

export default App;
