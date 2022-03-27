import "./Login.css";

const Login = () => {
	const onSubmit = e => {
		e.preventDefault();
	};

  return (
    <div className="login-card">
      <h1 className="logo">Joov Tek</h1>
      <form onSubmit={onSubmit}>
        <p className="username">
          <label htmlFor="#username">Username</label>
          <input type="text" id="username" name="username" />
        </p>
        <p className="password">
          <label htmlFor="#password">Password</label>
          <input type="text" id="password" name="password" />
        </p>
				<div><button type="submit">Log in</button></div>
      </form>
    </div>
  );
};

export default Login;
