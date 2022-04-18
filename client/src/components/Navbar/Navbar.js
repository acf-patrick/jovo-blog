import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/images/vecteezy_jt-logo-monogram-with-slash-style-design-template_.png";
import Options from "./Options";
import "./Navbar.css";

const Navbar = () => {
  const logoOnHover = () => {
    let logoImg = document.querySelector(".navbar .logo img");
    logoImg.style.animation = "";
    setTimeout(() => {
      logoImg.style.animation = "rotate-logo 1s ease-in-out";
    }, 0);
  };

  const [collapsed, setCollapsed] = useState(false);
  const collapseSidebar = (e) => {
    e.preventDefault();
    const div = document.querySelector(".sidebar");
    if (div.display !== "none") {
      div.style.width = collapsed ? "0" : "370px";
      setCollapsed(!collapsed);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <div onMouseOver={logoOnHover} className="logo">
            <img onClick={collapseSidebar} src={logo} alt="logo" width="48" />
            <Link title="Home" to="/">
              Joov Tek
            </Link>
          </div>
          <Options className="options" />
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
      <Options className="sidebar" />
    </>
  );
};

export default Navbar;
