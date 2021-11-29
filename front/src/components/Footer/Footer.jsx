import React from "react";
import styles from "./styleFooter.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Footer() {
  const { user } = useSelector((state) => state);
  const { hospital } = useSelector((state) => state);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerWrapper}>
          <div className="footer-one">
            {user || hospital ? (
              <>
                {user ? (
                  <>
                    <Link
                      Link
                      className={styles.footerLogo}
                      to={`/${user.role}`}
                    >
                      iGive
                    </Link>
                  </>
                ) : (
                  ""
                )}
                {hospital ? (
                  <>
                    <Link
                      className={styles.footerLogo}
                      to={`/${hospital.role}`}
                    >
                      iGive
                    </Link>
                  </>
                ) : (
                  ""
                )}
              </>
            ) : (
              <Link className={styles.footerLogo} to="/">
                iGive
              </Link>
            )}
            <ul className={styles.footerList}>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Download Now</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>License</p>
              </li>
            </ul>
            <ul className={styles.footerList}>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>About</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Features</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Pricing</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Careers</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Help</p>
              </li>
              <li className="footer-list__item">
                <p className={styles.footerListLink}>Privacy Policy</p>
              </li>
            </ul>
            <p className={styles.authorRight}>
              © 2021 iGive UI Kit. All rights reserved
            </p>
          </div>
          <div className={styles.footerTwo}>
            <span className={styles.footerSpan}>Загрузи Предложения</span>
            <a href="https://play.google.com/">
              {" "}
              <img
                className={styles.footerIcon}
                src="http://localhost:3000/google-play.svg"
                alt="icon: Google Play"
              />
            </a>
            <a href="https://www.apple.com/app-store/">
              <img
                className={styles.footerIcon}
                src="http://localhost:3000/app-store.svg"
                alt="icon: App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
