import { faSadCry } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import illustration from "../../assets/images/404 Page Not Found _Monochromatic.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={illustration} alt="404 not found" />
      <p>
        Sorry <FontAwesomeIcon icon={faSadCry} /> Page not found
      </p>
    </div>
  );
};

export default NotFound;
