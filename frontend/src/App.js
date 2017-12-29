import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { Container } from 'reactstrap';
import { PersistGate } from 'redux-persist/es/integration/react';
import configureStore from './store/configureStore.js';
//import logo from './logo.svg';
import Landing from './pages/Landing.js';
import EventsFeedPage from './pages/EventFeedPage/EventsFeedPage';
import { UserProfilePage } from './pages/UserProfilePage/UserProfilePage';
import { LunchPage } from './pages/LunchPage/LunchPage.js';
import { LogoutPage } from './pages/LogoutPage/LogoutPage.js';
import { TopMenu } from './components/TopMenu.js';
import { Main } from 'reactstrap';
import { PageLayout } from './components/PageLayout.js';
import  EventDetail  from './pages/EventDetail/EventDetail';

const { store, persistor } = configureStore();

//console.log('>>>> STORE:', store);

class App extends Component {

  render() {

    return (
      // TODO: add 404 handler: https://knowbody.github.io/react-router-docs/guides/NotFound.html
      <div className="App">
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={browserHistory}>
              <Route path="/" component={PageLayout}>
                <IndexRoute component={Landing}/>
                <Route path="addEvent" component={LunchPage}/>
                <Route path="user/:userId" component={UserProfilePage}/>
                <Route path="feed" component={EventsFeedPage}/>
                <Route path="event/:eventId" component={EventDetail}/>
                <Route path="event/:eventId/edit" component={LunchPage}/>
                <Route path="logout" component={LogoutPage}/>
              </Route>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
