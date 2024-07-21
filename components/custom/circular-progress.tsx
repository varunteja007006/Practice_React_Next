import React from "react";
import {
  CircularProgressbar as CircularProgressBar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function CircularProgress({
  value = 50,
  text,
  minValue,
  maxValue,
}: Readonly<{
  value?: number;
  text?: string;
  minValue?: number;
  maxValue?: number;
}>) {
  return (
    <CircularProgressBar
      value={value}
      text={text || `${value}%`}
      minValue={minValue}
      maxValue={maxValue}
      styles={buildStyles({
        // Rotation of path and trail, in number of turns (0-1)
        rotation: 0.25,

        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: "butt",

        // Text size
        textSize: "16px",

        // How long animation takes to go from one value to another, in seconds
        pathTransitionDuration: 0.5,

        // Can specify path transition in more detail, or remove it entirely
        // pathTransition: 'none',

        // Colors
        pathColor: `rgba(62, 152, 199, ${value / 100})`,
        textColor: "#f88",
        trailColor: "#d6d6d6",
        backgroundColor: "#3e98c7",
      })}
    />
  );
}

export default CircularProgress;
