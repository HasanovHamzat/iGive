import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import DetailUser from "../DetailUser/DetailUser";
import Hospital from "../Hospital/Hospital";

function Main() {

  const { user, hospital } = useSelector((state) => state);

  return (
    <>
      {user ? (
        <DetailUser />
      ) : hospital ? (
        <Hospital />
      ) : (
        <main className={styles.main}>
          <div className="container">
            <div className={styles.mainWrapper}>
              <p className={styles.mainTitle}>Добро пожаловать!!!</p>
              <div className={styles.mainButtons}>
                <Link aria-current="page" to={`/login/user`}>
                  <div className={styles.userBlock}>
                    <p className={styles.userTitle}>Доноры</p>
                  </div>
                </Link>
                <Link aria-current="page" to={`/login/hospital`}>
                  <div className={styles.hospitalBlock}>
                    <p className={styles.hospitalTitle}>Больницы</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default Main;
