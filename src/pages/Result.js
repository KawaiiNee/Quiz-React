import React from "react";
import { Link } from "react-router-dom";
import PartyPoppers from "../components/PartyPoppers/PartyPoppers.tsx";

const Result = ({ score, rounds }) => {
  return (
    <section className="d-flex flex-column text-center align-items-center p-4 position-relative">
      <h2 className="text-capitalize">Results</h2>
      <p className="lead">
        You got {score} out of {rounds}!
      </p>
      <Link to="/">Return home</Link>
      <PartyPoppers />
    </section>
  );
};

export default Result;
