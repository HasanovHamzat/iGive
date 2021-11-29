import axios from "axios";
import {
  ADD_EVENT,
  SET_EVENTS,
  TAKE_ADDRESS_USER_AND_HOSPITAL,
} from "../types/eventTypes";

export const addNewEvent = (
  bloodTypeId,
  bloodQuantity,
  eventDate,
  priority
) => ({
  type: ADD_EVENT,
  payload: {
    bloodTypeId,
    bloodQuantity,
    eventDate,
    priority,
  },
});

export const addNewEventFromServer =
  (bloodTypeId, bloodQuantity, eventDate, priority) => async (dispatch) => {
    const response = await fetch("/hospital/events/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bloodTypeId,
        bloodQuantity,
        eventDate,
        priority,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(addNewEvent(data));
    }
  };

export const setEvents = (array) => ({
  type: SET_EVENTS,
  payload: array,
});

export const allEventHospitalFromServer = () => async (dispatch) => {
  const response = await fetch("/hospital/events");
  const allEvents = await response.json();
  dispatch(setEvents(allEvents));
};

export const allEventUserFromServer = () => async (dispatch) => {
  const response = await fetch("/user/events");
  const allEvents = await response.json();
  dispatch(setEvents(allEvents));
};

export const takeAddressUserAndHospital = (city, street, building) => ({
  type: TAKE_ADDRESS_USER_AND_HOSPITAL,
  payload: {
    city,
    street,
    building,
  },
});

export const closeEvent = (id, navigate) => async (dispatch) => {
  const response = await axios.patch(`/hospital/events/${id}/status`);
  console.log(response);
  if (response.status === 200) {
    dispatch(allEventHospitalFromServer);
    navigate("/hospital");
  }
};
