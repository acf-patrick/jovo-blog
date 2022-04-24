import {
  faBolt,
  faBook,
  faFeatherPointed,
  faWandSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
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

  const { connectedUser } = useContext(ConnectedUser);
  links = links.filter((obj) => {
    if (obj.requireConnection) return connectedUser ? true : false;
    return true;
  });

  const [lastClicked, setLastClicked] = useState(null);
  const linkOnClick = (event) => {
    const underline = event.currentTarget.querySelector("div");
    if (lastClicked === underline) return;
    underline.style.transform = "scaleX(1)";
    if (lastClicked) lastClicked.style.transform = "scaleX(0)";
    setLastClicked(underline);
  };

  /*   useEffect(() => {
    document.removeEventListener("click", lastOnClickCallback);
    lastOnClickCallback = (event) => {
      const options = document.querySelector(".options");
      const rect = options.getBoundingClientRect();
      const [x, y] = [event.clientX, event.clientY];
      if (
        !(
          rect.x <= x &&
          x <= rect.x + rect.width &&
          rect.y <= y &&
          y <= rect.y + rect.height
        )
      ) {
        if (lastClicked) {
          console.log("remove underline");
          lastClicked.style.transform = "scaleX(0)";
          setLastClicked(null);
        }
      }
    };
    document.addEventListener("click", lastOnClickCallback);
  }, [lastClicked]);
 */
  return (
    <ul className={className}>
      {links.map((link, i) => (
        <li key={i} onClick={linkOnClick}>
          <Link to={link.path}>
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
