import { ALL_HOSPITAL_MY_DONOR } from "../types/hospitalMyDonorTypes";



export const allhospitalMyDonor = (array) => ({
  type: ALL_HOSPITAL_MY_DONOR,
  payload: array
})

export const allhospitalMyDonorFromServer = () => async (dispatch) => {
  const response = await fetch('/hospital/donors');
  const dataFromServer = await response.json();
  console.log(dataFromServer);
  dispatch(allhospitalMyDonor(dataFromServer));
}
