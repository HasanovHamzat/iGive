import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./styleDetailUser.module.css";
import { useSelector, useDispatch } from "react-redux";
import { allEventUserFromServer } from "../../../redux/ac/eventAC";
import Slider from "../../Slider/Slider";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StaticInfo from "../StaticInfo/StaticInfo";
import SideInfo from "../SideInfo/SideInfo";
import {
  allMyEventsFromServer,
  deleteMyEventFromServer,
} from "../../../redux/ac/myEventsAC";

function DetailUser() {
  const { myEvents } = useSelector((state) => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allEventUserFromServer());
  }, []);

  const { event } = useSelector((state) => state);
  return (
    <div className={styles.event}>
      <div className="container">
        <div className={styles.eventWrapper}>
          <div className={styles.eventLeftBlock}>
            {event?.length === 0 ? null : (
              <>
                <h3 className={styles.eventTitle}>Места для сдачи крови</h3>
                <div>
                  <Tabs>
                    <TabList>
                      <Tab onClick={() => dispatch(allEventUserFromServer())}>
                        Все события
                      </Tab>
                      <Tab onClick={() => dispatch(allMyEventsFromServer())}>
                        Мои события
                      </Tab>
                    </TabList>
                    <TabPanel>
                      <div className={styles.eventInfo}>
                        <p className={styles.eventInfoItem}>
                          Название больницы:
                        </p>
                        <p className={styles.eventInfoItem}>Кол-во крови</p>
                        <p className={styles.eventInfoItem}>Дата проведения:</p>
                        <p className={styles.eventInfoItem}>Приоритет:</p>
                      </div>
                      {event?.length > 0 &&
                        event?.map((el) => (
                          <div key={el.id} className={styles.eventBlock}>
                            <p>{el.Hospital?.title}</p>
                            <p>{el.bloodQuantity}L</p>
                            <p>{el.eventDate}</p>
                            <p>{el.priority}</p>
                            <Link to={`/user/event/${el.id}`}>
                              <button type="button" className="btn btn-info">
                                Подробнее
                              </button>
                            </Link>
                          </div>
                        ))}
                    </TabPanel>
                    <TabPanel>
                      {
                        myEvents.length > 0 ? 
                      <div className={styles.eventInfo}>
                        <p className={styles.eventInfoItem}>
                          Название больницы:
                        </p>
                        <p className={styles.eventInfoItem}>Кол-во крови</p>
                        <p className={styles.eventInfoItem}>Дата проведения:</p>
                        <p className={styles.eventInfoItem}>Приоритет:</p>
                      </div>
                      : <p className={styles.notEventTitle}>Нет выбранных событий</p>
                      }
                      {event?.length > 0 &&
                        myEvents?.map((el) => (
                          <div key={el.id} className={styles.eventBlock}>
                            <p>{el.Hospital?.title}</p>
                            <p>{el.bloodQuantity}L</p>
                            <p>{el.eventDate}</p>
                            <p>{el.priority}</p>
                            <button
                              type="button"
                              onClick={() =>
                                dispatch(deleteMyEventFromServer(el.id))
                              }
                              className="btn btn-danger"
                            >
                              Отписаться
                            </button>
                          </div>
                        ))}
                    </TabPanel>
                  </Tabs>
                </div>
              </>
            )}
            <Slider />
            <StaticInfo />
          </div>
          <SideInfo />
        </div>
      </div>
    </div>
  );
}

export default DetailUser;
