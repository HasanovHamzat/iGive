import axios from 'axios';
import { DELETE_HOSPITAL, EDIT_HOSPITAL, SET_HOSPITAL } from '../types/hospitalTypes';

export const setHospital = (user) => ({
  type: SET_HOSPITAL,
  payload: user,
});


export const oneHospitalFromServer = () => async (dispatch) => {
  const response = await fetch('/hospital');
  const dataFromServer = await response.json();
  dispatch(setHospital(dataFromServer));
}


export const deleteHospital = () => ({
  type: DELETE_HOSPITAL,
});

export const checkHospital = () => async (dispatch) => {
  const response = await axios.get('/hospital/check');

  if (response.status === 200) {
    const checkedUser = response.data;
    dispatch(setHospital(checkedUser));
  }
};

export const regHospital = (payload, navigate) => async (dispatch) => {
  const response = await axios.post('/signup/hospital', payload);

  if (response.status === 200) {
    const user = response.data;
    dispatch(setHospital(user));
    navigate('/hospital');
  } else {
    navigate('/hospital/signup');
  }
};

export const hospitalIn = (payload, navigate) => async (dispatch) => {
  const response = await axios.post('/login/hospital', payload);

  if (response) {
    const hospital = await response.data;
    dispatch(setHospital(hospital));
    navigate('/hospital');
  } else {
    navigate('/login/hospital');
  }
};

export const hospitalOut = () => async (dispatch) => {
  const response = await axios.get('/hospital/logout', {});
  if (response.status === 200) {
    dispatch(deleteHospital());
  }
};


export const editHospitalProfile = (data) => ({
  type: EDIT_HOSPITAL,
  payload: data,
})

export const editHospitalProfileFromServer = (headOfDep, about) => async (dispatch) => {
  console.log(headOfDep, about);
  const response = await fetch('/hospital/profile/data', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      headOfDep, about
    })
  })

  const data = await response.json();
  console.log('!!!!!!', data);
  if (response.ok) {
    dispatch(editHospitalProfile(data))
  }
}
