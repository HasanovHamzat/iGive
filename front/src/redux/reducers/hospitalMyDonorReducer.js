import { ALL_HOSPITAL_MY_DONOR } from "../types/hospitalMyDonorTypes";



const hospitalMyDonorReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case ALL_HOSPITAL_MY_DONOR:
      return payload;
    default:
      return state;
  }
}

export default hospitalMyDonorReducer;
