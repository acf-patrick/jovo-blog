import { Link } from "react-router-dom";

const Options = ({ className = "" }) => {
  const links = [
    { path: "/blogs", content: "Explore" },
    { path: "/create", content: "Write" },
  ];

  return (
    <ul className={className}>
      {links.map((link, i) => (
        <li key={i}>
          <Link to={link.path}>{link.content}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Options;