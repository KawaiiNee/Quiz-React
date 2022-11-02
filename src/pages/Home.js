import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import {
  Limit,
  Region,
  Difficulty,
  Category,
  Interval,
} from "../components/Input";

const Home = () => {
  const { handleQuery } = useGlobalContext();

  return (
    <main className="d-flex flex-column justify-content-center">
      <Link
        to="/questions"
        className="btn btn-success py-3"
        onClick={handleQuery}
      >
        Chunchunmaru!
      </Link>

      <hr className="border border-secondary border-1 opacity-25 w-75 mx-auto"></hr>

      <form className="container w-75" onSubmit={(e) => e.preventDefault()}>
        <div className="row gx-5 gy-4 justify-content-center">
          <Limit />
          <Region />
          <Difficulty />
          <Category />
          <Interval />
        </div>
      </form>
    </main>
  );
};

export default Home;
