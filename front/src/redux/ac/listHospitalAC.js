import { ALL_HOSPITAL } from '../types/listHospitalTypes';

export const allHospital = (array) => ({
  type: ALL_HOSPITAL,
  payload: array,
});

export const allHospitalFromServer = () => async (dispatch) => {
  const response = await fetch('http://localhost:3001/hospital');
  const dataFromServer = await response.json();
  dispatch(allHospital(dataFromServer));
};
