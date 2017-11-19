import { combineReducers } from 'redux';
import { EventPanelReducer } from './components/EventPanel/Reducer';
import { FBLoginReducer } from './components/FBLogin/Reducer';
import { EventFeedReducer } from './pages/EventFeedPage/Reducer';

export const rootReducer = combineReducers({
  eventFeed: EventFeedReducer,
  eventPanel: EventPanelReducer,
  userInfo: FBLoginReducer,
});
