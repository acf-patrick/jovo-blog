import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import illustration from "../../assets/images/undraw_launching_re_tomg.svg";
import google from "../../assets/images/1534129544.svg";
import facebook from "../../assets/images/icons8-facebook.svg";
import config from "../../config";

import "./Signup.css";
import useLogin from "../../hooks/login";

const Signup = () => {
  const [errMessage, setErrMessage] = useState(null);
  const login = useLogin();

  const formOnSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    fetch(config.backendURL + "/signup", {
      method: "POST",
      body: JSON.stringify({
        name: form.name.value,
        password: form.password.value,
        email: form.email.value,
      }),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((result) => result.json())
      .then((data) => {
        setErrMessage(data);
      })
      .catch((err) => {
        setErrMessage(null);
        console.log(err);
        login(form.name.value, form.password.value, (e) => {
          console.log(e);
        });
      });
  };

  return (
    <div className="sign-up">
      <div className="illustration">
        <img src={illustration} alt="launch" />
      </div>
      <div className="content">
        <h1>Sign Up</h1>
        <form onSubmit={formOnSubmit}>
          <div className="body">
            <div className="name">
              <label htmlFor="#name">Name</label>
              <br />
              <input type="text" name="name" id="name" required />
              <br />
              {errMessage?.name && (
                <p className="errMessage">
                  {errMessage.name}
                  <FontAwesomeIcon
                    style={{ paddingLeft: "1rem" }}
                    icon={faTriangleExclamation}
                  />
                </p>
              )}
            </div>
            <div>
              <div className="mail-pwd">
                <div className="email">
                  <label htmlFor="#email">Email</label>
                  <br />
                  <input type="email" name="email" id="email" required />
                  <br />
                </div>
                <div className="password">
                  <label htmlFor="#password">Password</label>
                  <br />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
              </div>
              {errMessage?.email && (
                <p className="errMessage">
                  {errMessage.email}
                  <FontAwesomeIcon
                    style={{ paddingLeft: "1rem" }}
                    icon={faTriangleExclamation}
                  />
                </p>
              )}
            </div>
          </div>
          <div className="terms">
            <input type="checkbox" name="terms" id="terms" required />
            <label htmlFor="#terms">
              I have read and agree the <Link to="#">terms and conditions</Link>
              .
            </label>
          </div>
          <p className="with">
            <span>Sign up with</span>
          </p>
          <div className="other">
            <button type="button" className="google">
              <img src={google} alt="google" />
              Google
            </button>
            <button type="button" className="facebook">
              <img src={facebook} alt="facebook" />
              Facebook
            </button>
          </div>
          <button type="submit">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
