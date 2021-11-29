import { SET_USER, DELETE_USER, EDIT_USER } from "../types/userTypes";
import axios from "axios";

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

// export const checkUser = () => async (dispatch) => {
//   const response = await axios.get("/user/check");

//   if (response.status === 200) {
//     const checkedUser = response.data;
//     dispatch(setUser(checkedUser));
//   }
// };

export const regUser = (payload, navigate) => async (dispatch) => {
  const response = await axios.post("/signup/user", payload);
  if (response.status === 200) {
    const user = await response.data;
    dispatch(setUser(user));
    navigate("/user");
  } else {
    navigate("/user/signup");
  }
};

export const userIn = (payload, navigate) => async (dispatch) => {
  const response = await axios.post("/login/user", payload);

  if (response.status === 200) {
    const user = await response.data;
    dispatch(setUser(user));
    navigate("/user");
  } else {
    navigate("/login/user");
  }
};

export const userOut = () => async (dispatch) => {
  const response = await axios.get("/user/logout");
  if (response.status === 200) {
    dispatch(deleteUser());
  }
};

export const oneUserFromServer = () => async (dispatch) => {
  const response = await axios.get("/user/profile");
  if (response.status === 200) {
    const oneUser = await response.data;
    dispatch(setUser(oneUser));
  }
};

export const editUserProfile = (data) => ({
  type: EDIT_USER,
  payload: data,
});

export const editUserProfileFromServer =
  (city, street, building, phoneNumber) => async (dispatch) => {
    const response = await fetch("/user/profile/data", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city,
        street,
        building,
        phoneNumber,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(editUserProfile(data));
    }
  };

export const subscribeUser = (eventId) => async (dispatch, getState) => {

  const user = getState().user;
  const userId = user.id;
  await axios.post(`/user/events/${eventId}/subscribe`, { userId });

  dispatch({ type: SET_USER, payload: user });

};
