"use client";
import React from "react";

const GridSquare = ({ square, handleClick, index }) => {
  return (
    <div
      className="w-[100px] h-[100px] cursor-pointer"
      style={{
        background: square ? "pink" : "#4a5568",
      }}
      onClick={() => handleClick(index)}
    ></div>
  );
};

export default GridSquare;
