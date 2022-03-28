import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import encrypt from "../../encrypt";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [errMessage, setErrMessage] = useState("");

  const onFocus = () => {
    setErrMessage("");
  };

  const onSubmit = (e) => {
    e.preventDefault();

    let form = e.currentTarget;
    let pwd = encrypt(form.password.value);
    let usr = form.username.value;
    form.password.value = "";

    const displayError = (type) => {
      let input = document.querySelector(`[name=${type}]`);
      input.style.animation = "";
      setTimeout(() => {
        input.style.animation = "shake 200ms ease 0ms 2";
      }, 0);
      const message = `Invalid ${type}!`;
      setErrMessage(message);
      throw Error(message);
    };

    fetch(`http://localhost:3001/users?username=${usr}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length) {
          if (pwd !== data[0].password) displayError("password");
        } else displayError("username");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="login-card" style={{ animation: "appear 700ms ease-out" }}>
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
            }}
          >
            <span style={{ marginRight: "0.5rem" }}>{errMessage}</span>
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </p>
        )}
        <button type="submit">Log in</button>
        <p className="forgot">
          <Link to="/password">forgot password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
