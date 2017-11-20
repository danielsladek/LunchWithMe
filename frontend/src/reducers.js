import { combineReducers } from 'redux';

import { eventFeedReducer } from './pages/EventFeedPage/reducer';
import { eventReducer } from './components/AddEventForm/reducer';

export const rootReducer = combineReducers({
  eventFeed: eventFeedReducer,
  event: eventReducer,
});


