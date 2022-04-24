import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import logo from "../../assets/images/vecteezy_jt-logo-monogram-with-slash-style-design-template_.png";
import Options from "./Options";
import ConnectedUser from "../../context/user";
import "./Navbar.css";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  const { connectedUser, setConnectedUser } = useContext(ConnectedUser);

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

  const disconnect = (event) => {
    event.preventDefault();
    setConnectedUser(null);
  };

  const [userProfileCollapsed, setUserProfileCollapsed] = useState(false);
  const userProfileOnClick = (event) => {
    // rotate arrow icon
    const arrow = event.currentTarget.querySelector("svg");
    arrow.style.transform = userProfileCollapsed
      ? "rotate(0)"
      : "rotate(180deg)";

    // dropdown
    const dropdown = document.querySelector(".user-profile-dropdown");
    dropdown.style.transform = userProfileCollapsed ? "scaleY(1)" : "scaleY(0)";

    setUserProfileCollapsed(!userProfileCollapsed);
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
        {connectedUser ? (
          <>
            <div className="user-profile" onClick={userProfileOnClick}>
              <div></div>
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </>
        ) : (
          <div className="sign">
            <Link to="/signin" className="signin">
              Sign in
            </Link>
            <Link to="/signup" className="signup">
              Sign up
            </Link>
          </div>
        )}
      </nav>
      <ul className="user-profile-dropdown">
        <li>
          <Link to="/user/profile">Profile</Link>
        </li>
        <li>
          <Link to="/user/setting">Settings</Link>
        </li>
        <li>
          <a href="#" onClick={disconnect}>
            Disconnect
          </a>
        </li>
      </ul>
      <Options className="sidebar" />
    </>
  );
};

export default Navbar;
