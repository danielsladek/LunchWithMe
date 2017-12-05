import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { rootReducer } from "../reducers";
import rootSaga from "../rootSaga";

const reduxPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['userInfo'],
}

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  // Create the store with two middlewares
  // 1. sagaMiddleware: Makes redux-sagas work
  // 2. routerMiddleware: Syncs the location/URL path to the state
  const middlewares = [sagaMiddleware];

  const enhancers = [applyMiddleware(...middlewares)];

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducer = persistCombineReducers(reduxPersistConfig, rootReducer);


  const store = createStore(reducer, composeEnhancers(...enhancers));
  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);

  return { store, persistor };
}
