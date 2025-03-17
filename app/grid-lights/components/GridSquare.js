"use client";
import React from "react";

const GridSquare = ({ square, handleClick, index }) => {
  return (
    <div
      className="w-[150px] h-[150px] rounded-xl cursor-pointer"
      style={{
        background: square ? "pink" : "#4a5568",
      }}
      onClick={() => handleClick(index)}
    ></div>
  );
};

export default React.memo(GridSquare);
