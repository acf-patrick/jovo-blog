import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <p>
        Sorry <FontAwesomeIcon icon={faSadCry} /> Page not found
      </p>
    </div>
  );
};

export default NotFound;
