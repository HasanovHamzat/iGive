import { ALL_BLOOD_TYPES } from '../types/bloodTypesTypes';

export const allBloodTypes = (array) => ({
  type: ALL_BLOOD_TYPES,
  payload: array,
});

export const allBloodTypesFromServer = () => async (dispatch) => {
  const response = await fetch('/');
  const dataFromServer = await response.json();
  dispatch(allBloodTypes(dataFromServer));
};
