import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import useLogin from "../../hooks/login";

const Login = () => {
  const [errMessage, setErrMessage] = useState("");
  const login = useLogin();

  const onFocus = () => {
    setErrMessage("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let form = e.currentTarget;
    let usr = form.username.value;
    let pwd = form.password.value;
    form.password.value = "";

    const displayError = (type) => {
      let input = document.querySelector(`[name=${type}]`);
      input.style.animation = "";
      setTimeout(() => {
        input.style.animation = "shake 200ms ease 300ms 2";
      }, 0);
      const message = `Invalid ${type}!`;
      setErrMessage(message);
      throw Error(message);
    };

    login(usr, pwd, displayError);
  };

  return (
    <div className="login-container">
      <div
        className="login-card"
        style={{ animation: "appear 700ms ease-out" }}
      >
        <h1 className="logo">Joov Tek</h1>
        <form onSubmit={onSubmit}>
          <div className="username">
            <label htmlFor="#username">Username</label>
            <br />
            <input
              type="text"
              id="username"
              name="username"
              onFocus={onFocus}
            />
            <div className="line"></div>
          </div>
          <div className="password">
            <label htmlFor="#password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              name="password"
              onFocus={onFocus}
            />
            <div className="line"></div>
          </div>
          {errMessage.length !== 0 && (
            <p
              style={{
                marginTop: "1rem",
                color: "red",
                fontSize: "1rem",
                animation: "left-to-right 400ms ease-out",
              }}
            >
              <span>{errMessage}</span>
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </p>
          )}
          <button type="submit">
            <span>Log in</span>
            <FontAwesomeIcon icon={faArrowRightToBracket} />
          </button>
          <p className="forgot">
            <Link to="/password">forgot password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
