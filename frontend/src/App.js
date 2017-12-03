import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import configureStore from './store/configureStore.js';
//import logo from './logo.svg';
import Landing from './pages/Landing.js';
import { RegistrationPage } from './pages/registration.js';
import EventsFeedPage from './pages/EventFeedPage/EventsFeedPage';
import { UserProfilePage } from './pages/UserProfilePage/UserProfilePage';
import { NewLunchPage } from './pages/newLunch.js';
import { TopMenu } from './components/TopMenu.js';
import { Main } from 'reactstrap';
import { PageLayout } from './components/PageLayout.js';
import  EventDetail  from './pages/EventDetail/EventDetail';
 
const store = configureStore();

class App extends Component {

  render() {

    return (
      <div className="App">
        <Provider store={store}>
          <Router history={browserHistory}>
            <Route path="/" component={PageLayout}>
              <IndexRoute component={Landing}/>
              <Route path="reg" component={RegistrationPage}/>
              <Route path="addLunch" component={NewLunchPage}/>
              <Route path="user/:userId" component={UserProfilePage}/>
              <Route path="feed" component={EventsFeedPage}/>
              <Route path="event/:eventId" component={EventDetail}/>
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
