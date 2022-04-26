import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import logo from "../../assets/images/vecteezy_jt-logo-monogram-with-slash-style-design-template_.png";
import Options from "./Options";
import ConnectedUser from "../../context/user";
import config from "../../config";
import "./Navbar.css";
import { faArrowRightFromBracket, faChevronUp, faGear, faHomeUser } from "@fortawesome/free-solid-svg-icons";
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

  const toggleDropdown = () => {
    // rotate arrow icon
    const arrow = document.querySelector(".user-profile svg");
    if (arrow) {
      arrow.style.transform = userProfileCollapsed
        ? "rotate(0)"
        : "rotate(180deg)";
    }
    // dropdown
    const dropdown = document.querySelector(".user-profile-dropdown");
    dropdown.style.transform = userProfileCollapsed ? "scaleY(0)" : "scaleY(1)";

    setUserProfileCollapsed(!userProfileCollapsed);
  };

  const foldDropdown = (event) => {
    const [x, y] = [event.clientX, event.clientY];
    const dropdown = document.querySelector(".user-profile-dropdown");
    const rect = dropdown.getBoundingClientRect();
    if (
      !(
        rect.x <= x &&
        x <= rect.x + rect.width &&
        0 <= y &&
        y <= rect.y + rect.height
      ) &&
      userProfileCollapsed
    )
      toggleDropdown(event);
  };

  useEffect(() => {
    document.removeEventListener("click", foldDropdown);
    document.addEventListener("click", foldDropdown);
  }, [userProfileCollapsed]);

/*   const [usrProfilePic, setUsrProfilePic] = useState("");
  useEffect(() => {
    if (connectedUser)
      fetch(config.backendURL + "/image/profile/" + connectedUser.id)
        .then((res) => res.text())
        .then((profilePic) => {
          setUsrProfilePic(config.backendURL + "/" + profilePic);
        });
  }, [connectedUser]);
 */
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
            <div className="user-profile" onClick={toggleDropdown}>
              {connectedUser.profilePicture ? (
                <div>
                  <img src={config.backendURL + '/' + connectedUser.profilePicture} alt="" width="32" height="32" />
                </div>
              ) : (
                <div className="circle"></div>
              )}
              <FontAwesomeIcon icon={faChevronUp} />
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
      <div className="user-profile-dropdown">
        <Link to="/user/profile"><FontAwesomeIcon icon={faHomeUser} />Profile</Link>
        <Link to="/user/setting"><FontAwesomeIcon icon={faGear} />Settings</Link>
        <a
          href="#"
          onClick={(event) => {
            toggleDropdown();
            disconnect(event);
          }}
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />Disconnect
        </a>
      </div>
      <Options className="sidebar" />
    </>
  );
};

export default Navbar;
