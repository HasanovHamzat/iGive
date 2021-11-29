import {  SET_EVENTS } from '../types/eventTypes';

const eventReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_EVENTS:
      return payload;
    default:
      return state;
  }
};

export default eventReducer;
