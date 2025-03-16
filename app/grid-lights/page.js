"use client";

import React, { useEffect, useState } from "react";
import GridSquare from "./components/GridSquare";

const GridLights = () => {
  const [flow, setFlow] = useState([]);
  const [squares, setSquares] = useState([
    {
      isOpen: false,
    },
    {
      isOpen: false,
    },
    {
      isOpen: false,
    },
    {
      isOpen: false,
    },
  ]);

  const handleClick = (index) => {
    setSquares((prev) =>
      prev.map((square, i) =>
        i === index ? { ...square, isOpen: !square.isOpen } : square
      )
    );
    if (flow.length <= squares.length - 1) setFlow([...flow, index]);
  };

  useEffect(() => {
    let timer;
    if (flow.length === squares.length) {
      timer = setTimeout(() => {
        [...flow].reverse().forEach((flownum) => {
          console.log("flownum", flownum);
          setSquares((prev) =>
            prev.map((square, i) =>
              i === flownum ? { ...square, isOpen: false } : square
            )
          );
        });
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [flow]);
  console.log(squares);

  return (
    <div className="flex flex-col items-center justify-center p-10">
      <h1>Gird Lights</h1>
      <div className="grid grid-cols-2 gap-5">
        {squares?.map((sqaure, index) => {
          return (
            <GridSquare
              bg={sqaure.bg}
              isOpen={sqaure.isOpen}
              key={index}
              index={index}
              handleClick={handleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;
