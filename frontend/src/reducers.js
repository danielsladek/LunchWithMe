import { combineReducers } from 'redux';

import { eventFeedReducer } from './pages/EventFeedPage/reducer';


export const rootReducer = combineReducers({
  eventFeed: eventFeedReducer,
});
