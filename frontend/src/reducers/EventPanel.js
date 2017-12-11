import { ATTEND_TO_EVENT } from '../actions/EventPanel';
import { CANCEL_EVENT_ATTENDANCE } from '../actions/EventPanel';

const initialState = {
  willAttend: null,
};

export const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATTEND_TO_EVENT: {
      const { event } = action.payload;

      return {
        ...state,
        willAttend: true,
      };
    }

    case CANCEL_EVENT_ATTENDANCE: {
      const { event } = action.payload;

      return {
        ...state,
        willAttend: false,
      };
    }

    default:
      return state;
  }
};
