"use client";
import React, { useEffect, useState } from "react";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (stopwatchRunning) {
      if (seconds < 59) {
        setTimeout(() => {
          setSeconds((prev) => (prev += 1));
        }, 1000);
      } else {
        setSeconds(0);
        setMinutes((prev) => prev + 1);
      }
    }
    return () => clearTimeout(timer);
  }, [seconds, stopwatchRunning]);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-3xl gap-5">
      <div>
        <h1 className="text-5xl">Stopwatch</h1>
      </div>
      <div>
        <span>{seconds.toString().padStart(2, "0")} :</span>
        <span> {minutes.toString().padStart(2, "0")}</span>
      </div>
      <button
        className="cursor-pointer border border-white text-[18px] px-4 py-2"
        onClick={() => setStopwatchRunning((prev) => !prev)}
      >
        {!stopwatchRunning ? "Start" : "Pause"}
      </button>
    </div>
  );
};

export default Stopwatch;
