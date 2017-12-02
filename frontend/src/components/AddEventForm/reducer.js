import { actions } from './actions';
  
const initialValues = {
  name: '',
  date: '',
  time: '',
  description: '',
  lunchevent: '',
  invitations: '',
};

const initialState = {
  values: initialValues
}

const eventReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.EVENT_SUBMIT: {

      return {
        ...state,
        state
      };
    }

    case actions.FIELD_CHANGE: {
      const { id, value } = action;
      const { values } = state;

      return {
        ...state,
        values: {
          ...values,
          [id]: value,
        },
      };
    }

    default:
      return state;
  }
};

export default eventReducer;

export const getEventFormState = (storeState) =>
storeState.eventForm;

export const getValues = (state) =>
state.values;