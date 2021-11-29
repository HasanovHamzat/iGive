import { SET_COORDINATES } from "../types/geocodeTypes";

const geoCodeReducer = (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_COORDINATES:
      return payload;
    default:
      return state;
  }
};

export default geoCodeReducer;
