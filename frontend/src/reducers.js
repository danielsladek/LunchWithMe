import { combineReducers } from 'redux';
import { EventPanelReducer } from './components/EventPanel/Reducer';
import { eventFeedReducer } from './pages/EventFeedPage/Reducer';

export const rootReducer = combineReducers({
  eventFeed: eventFeedReducer,
  eventPanel: EventPanelReducer,
});
