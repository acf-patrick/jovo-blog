import { faBolt, faFeatherPointed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ConnectedUser from "../../context/user";

const Icon = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} style={{ marginRight: "0.5rem" }} />;
};

const Options = ({ className = "" }) => {
  const links = [
    {
      path: "/blogs",
      content: "Explore",
      icon: <Icon icon={faBolt} />,
    },
    {
      path: "/create",
      content: "Write",
      icon: <Icon icon={faFeatherPointed} />,
    },
  ];

  const { connectedUser } = useContext(ConnectedUser);
  if (!connectedUser) links.pop();

  return (
    <ul className={className}>
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.path}>
            {link.icon}
            {link.content}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Options;
