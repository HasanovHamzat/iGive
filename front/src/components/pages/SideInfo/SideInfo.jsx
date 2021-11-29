import React from 'react'
import styles from './styleSideInfo.module.css';

function SideInfo() {
  return (
    <div className={styles.eventRigthBlock}>
      <div className={styles.eventRigthBlockCard}>
        <img
          src="http://localhost:3000/covid/1.jpg"
          className={styles.eventRigthBlockCardImg}
          alt=""
        />
        <p className={styles.eventRigthBlockCardTitle}>
          Коронавирус в России и мире: <br /> хроника событий
        </p>
      </div>
      <div className={styles.eventRigthBlockCard}>
        <img
          src="http://localhost:3000/covid/2.jpg"
          className={styles.eventRigthBlockCardImg}
          alt=""
        />
        <p className={styles.eventRigthBlockCardTitle}>
          Что делать если в семье кто-то <br /> заболел?
        </p>
      </div>
      <div className={styles.eventRigthBlockCard}>
        <img
          src="http://localhost:3000/covid/3.jpg"
          className={styles.eventRigthBlockCardImg}
          alt=""
        />
        <p className={styles.eventRigthBlockCardTitle}>
          Грипп – симптомы и профилактика
        </p>
      </div>
    </div>
  )
}

export default SideInfo
