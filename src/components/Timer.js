import React, { useState, useEffect } from "react";

const Timer = ({
  interval,
  revealAnswer,
  timer,
  setTimer,
  answerCD,
  page,
  lastQ,
}) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    if (!lastQ) {
      const timeout = setTimeout(() => {
        setProgress(100);
      }, answerCD / 2);

      return () => clearTimeout(timeout);
    }
  }, [revealAnswer, answerCD, lastQ]);

  useEffect(() => {
    setTimer(interval);
  }, [page, setTimer, interval]);

  useEffect(() => {
    const cooldown = setInterval(() => {
      if (!revealAnswer || timer >= 0) {
        setTimer(timer - 0.1);
      }
    }, 100);

    setProgress(Math.round((timer / interval) * 100));

    return () => clearInterval(cooldown);
  }, [interval, timer, setTimer, revealAnswer, answerCD]);

  return (
    <div className="progress mt-5 ">
      <div
        className={`progress-bar ${
          progress <= 100 && progress >= 50
            ? "bg-primary"
            : progress < 50 && progress >= 25
            ? "bg-warning"
            : "bg-danger"
        }`}
        role="progressbar"
        style={{
          width: `${progress}%`,
        }}
        aria-valuenow={timer}
        aria-valuemin={0}
        aria-valuemax={interval}
      >
        {Math.abs(timer.toFixed(1))}
      </div>
    </div>
  );
};

export default Timer;
