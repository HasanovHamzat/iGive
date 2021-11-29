import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./styleUserEvent.module.css";
import { useDispatch } from "react-redux";
import { getCoordinates } from "../../../redux/ac/geocodeAC";
import { subscribeUser } from "../../../redux/ac/userAC";
import Map from "../../Google/Map";
import {
  allMyEventsFromServer,
  deleteMyEventFromServer,
} from "../../../redux/ac/myEventsAC";

function UserEvent() {
  const { id } = useParams();
  const { event } = useSelector((state) => state);
  const currEvent = event.find((el) => el.id === +id);

  const dispatch = useDispatch();

  useEffect(() => {
    const address =
      currEvent?.Hospital?.title +
      " " +
      currEvent?.Hospital?.street +
      " " +
      currEvent?.Hospital?.building +
      " " +
      currEvent?.Hospital?.city;
    dispatch(allMyEventsFromServer());
    dispatch(getCoordinates(address));
  }, [dispatch, currEvent]);
  const coordinates = useSelector((state) => state?.coordinates);
  const myEvents = useSelector((state) => state?.myEvents);
  const subscribedEvent = myEvents?.find((event) => event?.id === +id);
  return (
    <div className={styles.eventUser}>
      <div className="container">
        <div className={styles.eventUserWrapper}>
          <h3 className={styles.eventTitle}>Место для сдачи крови</h3>
          <div className={styles.eventInfo}>
            <p className={styles.eventInfoItem}>Название:</p>
            <p className={styles.eventInfoItem}>Адрес:</p>
            <p className={styles.eventInfoItem}>Номер телефона:</p>
          </div>
          <div className={styles.eventUserCard}>
            <p>{currEvent.Hospital?.title}</p>
            <p>
              {currEvent.Hospital?.city}, {currEvent.Hospital?.street},{" "}
              {currEvent.Hospital?.building}
            </p>
            <p>{currEvent.Hospital?.phoneNumber}</p>
            {subscribedEvent ? (
              <button
                type="button"
                onClick={() => 
                  dispatch(deleteMyEventFromServer(currEvent.id)
                  )}
                className="btn btn-danger"
              >
                Отписаться
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-success"
                onClick={() => dispatch(subscribeUser(id))}
              >
                Подписаться
              </button>
            )}
          </div>
          <Map eventData={currEvent} coordinates={coordinates} zoom={12} />
        </div>
      </div>
    </div>
  );
}

export default UserEvent;
