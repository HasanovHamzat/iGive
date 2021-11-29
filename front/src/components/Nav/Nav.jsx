import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
const Nav = () => {
  const { user } = useSelector((state) => state);
  const { hospital } = useSelector((state) => state);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          {user || hospital ? (
            <>
              {user ? (
                <>
                  <Link Link className={styles.logo} to={`/${user.role}`}>
                    iGive
                  </Link>
                  <p className={styles.greetings}>Здравстуйте, {user.name}</p>
                  <Link className={styles.logo} to={`/private/${user.role}`}>
                    Личный кабинет
                  </Link>
                  <Link className={styles.logo} to={`/logout/${user.role}`}>
                    Log out
                  </Link>
                </>
              ) : (
                ""
              )}
              {hospital ? (
                <>
                  <Link className={styles.logo} to={`/${hospital.role}`}>
                    iGive
                  </Link>
                  <p className={styles.greetings}>
                    Здравстуйте, {hospital.headOfDep}
                  </p>
                  <Link
                    className={styles.logo}
                    to={`/private/${hospital.role}`}
                  >
                    Личный кабинет
                  </Link>
                  <Link className={styles.logo} to={`/logout/${hospital.role}`}>
                    Log out
                  </Link>
                </>
              ) : (
                ""
              )}
            </>
          ) : (
            <Link className={styles.logo} to="/">
              iGive
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Nav;
