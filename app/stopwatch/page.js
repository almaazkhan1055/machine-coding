"use client";
import React, { useEffect, useState } from "react";
import AboutTask from "../AboutTask";

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
    <div className="flex flex-col items-center justify-center py-10 text-3xl gap-5">
      <AboutTask
        text={
          "This task involves creating a Stopwatch component using React. The stopwatch keeps track of elapsed time in minutes and seconds, updating every second when running. The component includes a start/pause button, which starts and pause the stopwatch"
        }
      />
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
