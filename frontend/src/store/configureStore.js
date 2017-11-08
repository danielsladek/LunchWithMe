import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'

import api from '../api';

import { rootReducer } from '../reducers';
import { rootSaga } from '../sagas/rootSaga'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const sagaMiddleware = createSagaMiddleware()

export const configureStore = () =>
    createStore(
        rootReducer,
        composeEnhancers(
             // applyMiddleware(thunk.withExtraArgument({ api })),
             
        
            )
            , applyMiddleware(sagaMiddleware)
    );
