import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-card" style={{ animation: "appear 700ms ease-out" }}>
      <h1 className="logo">Joov Tek</h1>
      <form onSubmit={onSubmit}>
        <div className="username">
          <label htmlFor="#username">Username</label>
          <br />
          <input type="text" id="username" name="username" />
          <div className="line"></div>
          <p className="error"></p>
        </div>
        <div className="password">
          <label htmlFor="#password">Password</label>
          <br />
          <input type="password" id="password" name="password" />
          <div className="line"></div>
        </div>
        <button type="submit">Log in</button>
        <p className="forgot">
          <Link to="/password">forgot password?</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
