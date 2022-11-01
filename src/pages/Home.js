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
  const { params, handleQuery } = useGlobalContext();

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
          {/* limit */}
          <div className="col-md-6 col-12">
            <div className="p-3">
              <label htmlFor="limit-range" className="form-label">
                Limit {params.limit}
                <small className="text-muted ms-1">( no. of questions )</small>
              </label>
              <Limit />
            </div>
          </div>
          {/* region */}
          <div className="col-md-6 col-12">
            <div className="p-3">
              <label htmlFor="select-region" className="form-label">
                Region
              </label>
              <Region />
            </div>
          </div>
          {/* difficulty */}
          <div className="col-md-6 col-12">
            <div className="p-3">
              <label htmlFor="limit-range" className="form-label">
                Difficulty
              </label>
              <Difficulty />
            </div>
          </div>
          {/* category */}
          <div className="col-md-6 col-12">
            <div className="p-3">
              <label htmlFor="limit-range" className="form-label">
                Category
                <small className="text-muted ms-1">( fields )</small>
              </label>
              <Category />
            </div>
          </div>
          <Interval />
        </div>
      </form>
    </main>
  );
};

export default Home;
