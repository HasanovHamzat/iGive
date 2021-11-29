import { Link } from "react-router-dom";

import React, { useEffect } from "react";
import styles from "./stylePrivateUser.module.css";
import { useDispatch, useSelector } from "react-redux";
import { oneUserFromServer } from "../../../redux/ac/userAC";

function PrivateUser() {
  const { user } = useSelector((state) => state);
  console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(oneUserFromServer());
  }, [dispatch]);

  return (
    <div className={styles.mainPrivateUser}>
      <div className="container">
        <div className={styles.privateWrapper}>
          <div className={styles.userCard}>
            <img
              className={styles.privateImg}
              src={
                user.image
                  ? `http://localhost:3001/uploads/${user.image}`
                  : "http://localhost:3000/default_photo/no-avatar.png"
              }
              alt="profilePicture"
            />
            <Link to={`/user/edit/photo`}>
              <button className={styles.privateImgBtn}>Сменить фото</button>
            </Link>
          </div>
          <div className={styles.userTextWrapper}>
            <h3 className={styles.userTextTitle}>Общая информация</h3>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>ФИО:</p>
              <p>
                {user?.name} {user?.lastName}
              </p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Дата рождения :</p>
              <p>{user?.birthday}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Телефон :</p>
              <p>{user?.phoneNumber}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Email адрес :</p>
              <p>{user?.email}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>ОМС :</p>
              <p>{user?.oms}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Группа крови:</p>
              <p>
                {user?.bloodTypeId === 1
                  ? "O(I) Rh+"
                  : user?.bloodTypeId === 2
                  ? "O(I) Rh-"
                  : user?.bloodTypeId === 3
                  ? "A(II) Rh+"
                  : user?.bloodTypeId === 4
                  ? "A(II) Rh-"
                  : user?.bloodTypeId === 5
                  ? "B(III) Rh+"
                  : user?.bloodTypeId === 6
                  ? "B(III) Rh-"
                  : user?.bloodTypeId === 7
                  ? "AB(IV) Rh+"
                  : user?.bloodTypeId === 8
                  ? "AB(IV) Rh-"
                  : "Тип крови не найдено"}
              </p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>
                Сколько сдано всего крови:
              </p>
              <p>{user?.totalDonation}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Город :</p>
              <p>{user?.city}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Улица :</p>
              <p>{user?.street}</p>
            </div>
            <div className={styles.userTextBlockList}>
              <p className={styles.userTextBlockItem}>Строение :</p>
              <p>{user?.building}</p>
            </div>
            <Link to={`/user/edit`}>
              <button className="btn btn-warning">Редактировать профиль</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PrivateUser;
