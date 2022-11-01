import React, { useState, useContext } from "react";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [params, setParams] = useState({
    limit: 5,
    region: "",
    difficulty: "",
    category: "",
  });
  const rounds = params.limit;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setParams({ ...params, [name]: value });
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
