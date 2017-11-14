import { combineReducers } from 'redux';
import { AttendToEventButtonReducer } from './components/AttendToEventButton/Reducer';
import { eventFeedReducer } from './pages/EventFeedPage/reducer';


export const rootReducer = combineReducers({
  eventFeed: eventFeedReducer,
});
