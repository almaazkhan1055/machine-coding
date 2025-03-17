"use client";
import React, { useCallback, useEffect, useState } from "react";
import GridSquare from "./components/GridSquare";
import AboutTask from "../AboutTask";

const GridLights = () => {
  const [squares, setSquares] = useState([false, false, false, false]);
  const [flow, setFlow] = useState([]);

  const handleClick = useCallback((index) => {
    setFlow((prev) => [...prev, index]);
    setSquares((prev) =>
      prev.map((square, i) => (index === i ? true : square))
    );
  }, []);

  useEffect(() => {
    if (flow.length === 0) return;
    let timer = flow.reverse().map((flownum, index) =>
      setTimeout(() => {
        setSquares((squares) => {
          return squares.map((square, i) => (flownum === i ? false : square));
        });
        setFlow((flow) => flow.filter((_, i) => i != index));
      }, (index + 1) * 2000)
    );
    return () => timer.forEach(clearTimeout);
  }, [flow]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-10">
      <AboutTask
        text={
          "The GridLights component is an interactive grid where clicking on a square turns it on, and after a delay, it automatically turns off in reverse order."
        }
      />
      <h1>Gird Lights</h1>
      <div className="grid grid-cols-2 gap-5">
        {squares.map((square, index) => {
          return (
            <GridSquare
              key={index}
              square={square}
              handleClick={handleClick}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
