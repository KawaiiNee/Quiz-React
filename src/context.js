import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useState({
    limit: 5,
    region: "",
    difficulty: "",
    categories: "",
  });

  const rounds = params.limit;
  const [interval, setInterval] = useState(7.5);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setParams({ ...params, [name]: value });
  };

  const handleQuery = () => {
    const param = Object.entries(params)
      .map(([key, val]) => {
        if (val) return `${key}=${val}`;
        return null;
      })
      .filter((e) => {
        if (e) return e;
        return null;
      })
      .join("&");

    setQuery(param);
  };

  return (
    <AppContext.Provider
      value={{
        setQuery,
        query,
        params,
        setParams,
        rounds,
        handleChange,
        interval,
        setInterval,
        handleQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
