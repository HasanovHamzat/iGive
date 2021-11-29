import { DELETE_MY_EVENT, SET_MY_EVENTS } from '../types/eventTypes';

const myEventsReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_MY_EVENTS:
      return payload;
    case DELETE_MY_EVENT:
      return state.filter(el => el.id !== payload);
    default:
      return state;
  }
};

export default myEventsReducer;
