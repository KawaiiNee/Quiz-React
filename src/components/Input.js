import React from "react";
import { regions, difficulty, categories } from "../data/input-options-data";
import { useGlobalContext } from "../context";

export const Limit = () => {
  const { handleChange, params } = useGlobalContext();
  return (
    <input
      className="form-range"
      type="range"
      name="limit"
      id="limit-range"
      step={1}
      min={1}
      max={20}
      value={params.limit}
      onChange={handleChange}
    />
  );
};

export const Region = () => {
  const { handleChange, params } = useGlobalContext();
  return (
    <select
      name="region"
      className="form-select"
      onChange={handleChange}
      value={params.region}
    >
      <option value="">Select a region</option>
      {Object.entries(regions).map(([countryCode, countryName]) => {
        return (
          <option key={countryCode} value={countryCode}>
            {countryName}
          </option>
        );
      })}
    </select>
  );
};

export const Difficulty = () => {
  const { handleChange, params } = useGlobalContext();

  return (
    <select
      name="difficulty"
      className="form-select"
      onChange={handleChange}
      value={params.difficulty}
    >
      <option value="">Select a level</option>
      {Object.entries(difficulty).map(([difficultyName, difficultyValue]) => {
        return (
          <option key={difficultyName} value={difficultyValue}>
            {difficultyName}
          </option>
        );
      })}
    </select>
  );
};

export const Category = () => {
  const { handleChange, params } = useGlobalContext();

  const formatCateg = (category) => {
    return category.split("_").join(" ").split("and").join("&");
  };

  return (
    <select
      name="categories"
      className="form-select"
      onChange={handleChange}
      value={params.categories}
    >
      <option value="">Select a category</option>
      {categories.map((category) => {
        return (
          <option
            key={category}
            value={category}
            style={{ textTransform: "capitalize" }}
          >
            {formatCateg(category)}
          </option>
        );
      })}
    </select>
  );
};

export const Interval = () => {
  const { interval, setInterval } = useGlobalContext();
  return (
    <div className="col-md-6 col-12">
      <div className="p-3">
        <label htmlFor="questions-interval" className="form-label">
          Question's Interval {interval}
          <small className="text-muted ms-1">( no. of seconds )</small>
        </label>
        <input
          className="form-range"
          type="range"
          id="questions-interval"
          step={0.5}
          min={2.5}
          max={20}
          value={interval}
          onChange={(e) => setInterval(e.target.value)}
        />
      </div>
    </div>
  );
};
