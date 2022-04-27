import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import "./Tag.css";

const randint = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomColor = () => {
  let rgb = 0;
  for (let i = 0; i < 3; ++i) rgb = (rgb << 8) | randint(0x80, 0x100);
  return "#" + rgb.toString(16);
};

const Tag = ({ children, onRemove }) => {
  const bg = useRef(randomColor());

  return (
    <div
      className="tag-preview"
      onClick={onRemove}
      style={{
        background: bg.current,
      }}
    >
      <span className="text">{children}</span>
      <span className="xmark">
        <FontAwesomeIcon icon={faXmark} />
      </span>
    </div>
  );
};

export default Tag;
