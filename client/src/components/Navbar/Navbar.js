import { Link } from "react-router-dom";
import logo from "../../assets/images/vecteezy_jt-logo-monogram-with-slash-style-design-template_.png";
import "./Navbar.css";

const Navbar = () => {
  const logoOnHover = () => {
    let logoImg = document.querySelector(".navbar .logo img");
    logoImg.style.animation = "";
    setTimeout(() => {
      logoImg.style.animation = "rotate-logo 1s ease-in-out";
    }, 0);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <img src={logo} alt="logo" width="48" />
          <Link onMouseOver={logoOnHover} title="Home" to="/">
            Joov Tek
          </Link>
        </div>
        <ul className="options">
          <li>
            <Link to="/blogs">Explore</Link>
          </li>
          <li>
            <Link to="/create">Write</Link>
          </li>
        </ul>
      </div>
      <div className="sign">
        <Link to="/signin" className="signin">
          Sign in
        </Link>
        <Link to="/singup" className="signup">
          Sign up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
