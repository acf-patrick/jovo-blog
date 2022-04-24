import logo from "../../assets/images/vecteezy_jt-logo-monogram-with-slash-style-design-template_.png";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading">
        <div className="logo">
          <img src={logo} alt="logo" width="128" />
        </div>
        <div className="dots">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
