import React from "react";
import { FcCancel } from "react-icons/fc";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="text-center">
      <h3 className="text-capitalize display-4 m-3 mb-5">
        <FcCancel /> oops! it's a dead end
      </h3>
      <Link to="/" className="fw-bold lead">
        Go back?
      </Link>
    </section>
  );
};

export default Error;
