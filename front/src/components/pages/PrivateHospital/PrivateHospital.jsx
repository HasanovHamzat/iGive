import React, { useEffect } from "react";
import styles from "./stylePrivateHospital.module.css";
import { useSelector, useDispatch } from "react-redux";
import { oneHospitalFromServer } from "../../../redux/ac/hospitalAC";
import { Link } from "react-router-dom";

function PrivateHospital() {
  const { hospital } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(oneHospitalFromServer());
  }, [dispatch]);

  return (
    <div className={styles.mainPrivateUser}>
      <div className="container">
        <div className={styles.privateWrapper}>
          <div className={styles.userCard}>
            <img
              className={styles.privateImg}
              src={
                hospital.image
                  ? `http://localhost:3001/uploads/${hospital.image}`
                  : "http://localhost:3000/default_photo/no-avatar.png"
              }
              alt="profilePic"
            />
            <Link to={`/hospital/edit/photo`}>
              <button className={styles.privateImgBtn}>Сменить фото</button>
            </Link>
          </div>

          <div className={styles.userTextWrapper}>
            <h3 className={styles.userTextTitle}>Общая информация</h3>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Руководитель :</p>
              <p>{hospital.headOfDep}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Телефон :</p>
              <p>{hospital.phoneNumber}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Email адрес :</p>
              <p>{hospital.email}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Город :</p>
              <p>{hospital?.city}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Улица :</p>
              <p>{hospital?.street}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Строение :</p>
              <p>{hospital?.building}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Веб сайт :</p>
              {hospital.webSite}
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Описание :</p>
              {hospital.about}
            </div>
            <Link to={`/hospital/edit`}>
              <button className="btn btn-warning">Редактировать профиль</button>
            </Link>
       
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateHospital;
