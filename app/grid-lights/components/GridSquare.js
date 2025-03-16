"use client";
import React from "react";

const GridSquare = ({ isOpen, handleClick, index }) => {
  return (
    <div
      className="w-[100px] h-[100px] bg-gray-600 cursor-pointer"
      style={{
        background: isOpen ? "pink" : "#4a565",
      }}
      onClick={() => handleClick(index)}
    ></div>
  );
};

export default GridSquare;
