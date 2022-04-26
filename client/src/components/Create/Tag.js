import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tag.css";

const Tag = ({ children, onRemove }) => {
  return (
    <div className="tag-preview" onClick={onRemove}>
      <span className="text">{children}</span>
      <span className="xmark">
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </div>
  );
};

export default Tag;
