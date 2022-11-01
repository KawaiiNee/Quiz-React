import React from "react";

const Question = ({ question }) => {
  return (
    <div className="col-12 col-lg-8 w-100 py-3 px-5 mb-2">
      <div className="p-3 border rounded fw-normal display-6 fs-3">
        {question}
      </div>
    </div>
  );
};

export default Question;
