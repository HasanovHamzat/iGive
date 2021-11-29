import { DELETE_HOSPITAL, EDIT_HOSPITAL, SET_HOSPITAL } from '../types/hospitalTypes';

const hospitalReducer = (state = null, action) => {
  switch (action.type) {
    case SET_HOSPITAL:
      return action.payload;
    case EDIT_HOSPITAL:
      console.log('>>>>>', action.payload);
      return 'hello'
    case DELETE_HOSPITAL:
      return null;

    default:
      return state;
  }
};

export default hospitalReducer;
