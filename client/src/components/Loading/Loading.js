import { useState, useEffect } from "react";
import logo from "../../assets/images/vecteezy_jt-logo-monogram-with-slash-style-design-template_.png";
import "./Loading.css";

const randint = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Loading = ({children}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000 * randint(0, 4));
  }, []);

  return isLoading ? (
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
  ) : children;
};

export default Loading;
