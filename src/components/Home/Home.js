import TypeWriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import "./Home.css";

const Home = () => {
  const randint = (min, max) => Math.floor(Math.random() * (max - min) + min);
  const options = {
    cursor: "_",
    cursorClassName: "cursor",
    wrapperClassName: "typewriter",
    delay: 100,
    deleteSpeed: 50,
    pauseFor: 3000,
    autoStart: true,
  };

  const [page, _] = useState(randint(1, 4));
  const { datas, setDatas, isPending, error } = useFetch(
    `http://api.quotable.io/quotes?tags=technology&page=${page}`
  );

  return (
    <div className="home">
      <h1>Welcome fellow Jovo!</h1>
      <p className="intro">
        <span style={{ marginRight: "1rem" }}>What inspires ya today ?</span>
        <FontAwesomeIcon icon={faMugHot} />
      </p>
      {!(isPending || error) && (
        <div className="quote">
          <TypeWriter
            options={{
              strings: datas.results
                .sort((a, b) => randint(-1, 2))
                .map((obj) => obj.content),
              ...options,
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
