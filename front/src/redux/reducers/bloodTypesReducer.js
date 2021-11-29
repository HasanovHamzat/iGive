import { ALL_BLOOD_TYPES } from "../types/bloodTypesTypes";

const bloodTypesReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_BLOOD_TYPES:
      return payload;
    default:
      return state;
  }
};

export default bloodTypesReducer;

