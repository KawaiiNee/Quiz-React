import React from "react";
import { Link } from "react-router-dom";

const Result = ({ score, rounds }) => {
  return (
    <section className="d-flex flex-column text-center align-items-center p-4">
      <h2 className="text-capitalize">Results</h2>
      <p className="lead">
        You got {score} out of {rounds}!
      </p>
      <Link to="/">Return home</Link>
    </section>
  );
};

export default Result;
