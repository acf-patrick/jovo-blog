import React from "react";
import "./Square.css";

const randint = (min, max) => Math.floor(Math.random() * (max - min) + min);

export default function Square({
  side = randint(16, 64),
  colors = ["grey", "black"],
}) {
  const sideMin = (5 * side) / 6;

  return false && (
    <div
      style={{
        width: 0,
        height: 0,
      }}
    >
      <div
        style={{
          width: `${side}px`,
          height: `${side}px`,
          position: "relative",
          animation: `lr${randint(0, 4)} 1s cubic-bezier(0.57, 0.88, 0.04, 1.23) 1s forwards`,
          zIndex: -1,
          opacity: 0.5,
          left: "100vw",
        }}
        className="square"
      >
        <div
          style={{
            width: `${sideMin}px`,
            height: `${sideMin}px`,
            border: `2px solid ${colors[0]}`,
          }}
        ></div>
        <div
          style={{
            width: `${sideMin}px`,
            height: `${sideMin}px`,
            background: colors[1],
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        ></div>
      </div>
    </div>
  );
}
