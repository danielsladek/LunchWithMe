import { combineReducers } from 'redux';
import { FBLoginReducer } from './components/FBLogin/Reducer';
import { EventFeedReducer } from './pages/EventFeedPage/Reducer';

export const rootReducer = combineReducers({
  eventFeed: EventFeedReducer,
  userInfo: FBLoginReducer,
});
