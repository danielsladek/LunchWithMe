import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import configureStore from './store/configureStore.js';
import createReducer from './reducers';
import logo from './logo.svg';
import Landing from './pages/Landing.js';
import {RegistrationPage} from './pages/registration.js';
import EventsFeedPage from './pages/EventFeedPage/EventsFeedPage';
import {NewLunchPage} from './pages/newLunch.js';
import createSagaMiddleware from 'redux-saga'
import  rootSaga  from './sagas/rootSaga'


import './App.css';


const store = configureStore();


class App extends Component {
  render() {
   
    return ( 
      <div className="App">
          <Provider store={store}>
        <Router history={browserHistory}> 
          <Route path="/">
            <IndexRoute component={Landing}/>
            <Route path="reg" component={RegistrationPage}/>
            <Route path="addLunch" component={NewLunchPage}/>
            <Route path="feed" component={EventsFeedPage}/>
          </Route>
        </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
