import React from "react";
const Choice = ({
  choice,
  isCorrect,
  handleAnswer,
  isSelected,
  isIncorrect,
}) => {
  return (
    <div className="col-12 col-md-6 py-2 px-4 d-flex align-items-center justify-content-center">
      <div
        className={`p-3 w-100 rounded fw-semibold choice ${
          isCorrect && "correct"
        } ${isSelected && "selected"} ${isIncorrect && "incorrect"}`}
        onClick={(e) => handleAnswer(choice, e)}
      >
        {choice}
      </div>
    </div>
  );
};

export default Choice;
