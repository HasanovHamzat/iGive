import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { Link, useParams } from "react-router-dom";
import { hospitalIn } from "../../../redux/ac/hospitalAC";
import { userIn } from "../../../redux/ac/userAC";
import styles from "./styleLogin.module.css";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(initialValues);
  const { role } = useParams();

  let navigate = useNavigate();

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  
  async function submitLogin(e) {
    e.preventDefault();
    if (role === "user") {
      dispatch(userIn(values, navigate));

    } else {
      dispatch(hospitalIn(values, navigate));
    }
    setValues(initialValues);
  }

  return (
    <>
      <form className={styles.loginContainer} onSubmit={submitLogin}>
        <h1 className={styles.loginTitle}>Sign In</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Эл. почта:
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={values.password}
            onChange={handleInputChange}
            name="password"
          />
        </div>

        <div className={styles.footerSignIn}>
          <Link to={`/${role}/signup`}>
            <p className={styles.footerSignInText}>Создать аккаунт</p>
          </Link>

          <button type="submit" className="btn btn-reg">
            Войти
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
