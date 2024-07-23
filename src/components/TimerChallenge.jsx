import React, { useState, useRef } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaning, setTimeRemaning] = useState(targetTime * 1000);

  const timer = useRef();
  const dialog = useRef();

  const timerIsActive = timeRemaning > 0 && timeRemaning < targetTime * 1000;

  if (timeRemaning <= 0) {
    clearInterval(timer.current);
    
    dialog.current.open();
  }
function ResetTime(){
  setTimeRemaning(targetTime * 1000);
}

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaning((prevTimeRemaning) => prevTimeRemaning - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemaning} onReset={ResetTime} />

      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You Lost</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
          {" "}
          {timerIsActive ? "Stop" : "Start"} Challenge
        </button>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
