import { combineReducers } from 'redux';
import { EventPanelReducer } from './components/EventPanel/Reducer';
import { eventFeedReducer } from './pages/EventFeedPage/reducer';


export const rootReducer = combineReducers({
  eventFeed: eventFeedReducer,
  eventPanel: EventPanelReducer,
});
