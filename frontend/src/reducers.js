import { combineReducers } from 'redux';

import { eventFeedReducer } from './pages/EventFeedPage/reducer';
import { eventAddLunchReducer } from './pages/AddLunchPage/reducer';


export const rootReducer = combineReducers({
  eventFeed: eventFeedReducer,
  eventAddLunch: eventAddLunchReducer,
});
