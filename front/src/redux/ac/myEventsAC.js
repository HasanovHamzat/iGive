import { DELETE_MY_EVENT, SET_MY_EVENTS } from "../types/eventTypes";

export const allMyEvents = (array) => ({
  type: SET_MY_EVENTS,
  payload: array,
});

export const allMyEventsFromServer = () => async (dispatch) => {
  const response = await fetch("/user/myevents");
  const allEvents = await response.json();
  dispatch(allMyEvents(allEvents));
};
export const deleteMyEvent = (idEvent) => ({
  type:DELETE_MY_EVENT,
  payload: idEvent
})

export const deleteMyEventFromServer = (idEvent) => async (dispatch) => {
  const response = await fetch(`/user/events/${idEvent}/subscribe`,  { method: 'DELETE' })
  if (response.ok) {
    dispatch(deleteMyEvent(idEvent))
  }
}
