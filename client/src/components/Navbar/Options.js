import {
  faBolt,
  faBook,
  faFeatherPointed,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ConnectedUser from "../../context/user";

// let lastOnClickCallback = null;

const Options = ({ className = "" }) => {
  let links = [
    {
      path: "/blogs",
      content: "Explore",
      icon: faBolt,
    },
    {
      path: "/user/write",
      content: "Write",
      icon: faFeatherPointed,
      requireConnection: true,
    },
    {
      path: "/user/blogs",
      content: "Your blogs",
      icon: faBook,
      requireConnection: true,
    },
    {
      path: "/user/inspirations",
      content: "Inspirations",
      icon: faWandSparkles,
      requireConnection: true,
    },
  ];

  const location = useLocation();

  const { connectedUser } = useContext(ConnectedUser);
  links = links.filter((obj) => {
    if (obj.requireConnection) return connectedUser ? true : false;
    return true;
  });

  const [lastClicked, setLastClicked] = useState(null);
  const linkOnClick = (event) => {
    const underline = event.currentTarget.nextElementSibling;
    if (lastClicked === underline) return;
    underline.style.transform = "scaleX(1)";
    if (lastClicked) lastClicked.style.transform = "scaleX(0)";
    setLastClicked(underline);
  };

  useEffect(() => {
    if (!links.find((obj) => obj.path === location.pathname)) {
      if (lastClicked) lastClicked.style.transform = "scaleX(0)";
      setLastClicked(null);
    }
  }, [location, lastClicked]);

  return (
    <ul className={className}>
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.path} onClick={linkOnClick}>
            <FontAwesomeIcon
              icon={link.icon}
              style={{ marginRight: "0.5rem" }}
            />
            {link.content}
          </Link>
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default Options;
