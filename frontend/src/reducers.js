import { combineReducers } from 'redux';
import { FBLoginReducer } from './components/FBLogin/Reducer';
import { EventFeedReducer } from './pages/EventFeedPage/Reducer';
import {EventDetailReducer} from './pages/EventDetail/Reducer'

export const rootReducer = {
  eventFeed: EventFeedReducer,
  userInfo: FBLoginReducer,
  eventDetail: EventDetailReducer
};
