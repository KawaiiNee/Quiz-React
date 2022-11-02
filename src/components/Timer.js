import React, { useEffect } from "react";

const Timer = ({ interval, revealAnswer, timer, setTimer, answerCD, page }) => {
  // useEffect(() => {
  //   if (revealAnswer) {
  //     const timeout = setTimeout(() => {
  //       if (revealAnswer) {
  //         setTimeout(() => {
  //           setTimer(interval);
  //         }, answerCD / 2);
  //       }
  //     }, answerCD / 2);

  //     return () => clearTimeout(timeout);
  //   }
  // }, [revealAnswer, answerCD, interval, setTimer]);

  useEffect(() => {
    setTimer(interval);
  }, [page]);

  useEffect(() => {
    const cooldown = setInterval(() => {
      if (!revealAnswer || timer >= 0) {
        console.log(timer);
        setTimer(timer - 0.1);
      }
    }, 100);

    return () => clearInterval(cooldown);
  }, [interval, timer, setTimer, revealAnswer, answerCD]);

  // return <h4 className="pt-5 mt-5 display-2">{Math.abs(timer.toFixed(1))}</h4>;

  return (
    <div className="progress mt-5 ">
      <div
        className="progress-bar"
        role="progressbar"
        style={{
          width: `${Math.round((timer / interval) * 100)}%`,
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
