import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { closeEvent } from "../../../../redux/ac/eventAC";
import styles from "./style.module.css";

export default function ConfirmModal({ toggleModal }) {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleEnd = () => {
    toggleModal();
    dispatch(closeEvent(id, navigate));
  };

  return (
    <div className={styles.Modal}>
      <h1 className={styles.title}>Вы уверены?</h1>
      <button className="btn btn-danger mx-2" onClick={toggleModal}>Отменить</button>
      <button className="btn btn-success mx-2" onClick={handleEnd}>Да, я уверен!</button>
    </div>
  );
}
