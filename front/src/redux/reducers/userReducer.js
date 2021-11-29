import { SET_USER, DELETE_USER, EDIT_USER } from '../types/userTypes';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    case EDIT_USER:
      return action.payload;
    case DELETE_USER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
