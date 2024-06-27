import React, { useEffect, useState } from "react";
import { MovieContext } from ".";

const RootContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [language, setLanguage] = useState("en-US");
  const [page, setPage] = useState(1);
  const [favorite, setFavorite] = useState([]);

  function getAll() {
    let result = JSON.parse(localStorage.getItem("movie")) || [];
    setFavorite(result);
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        dark,
        setDark,
        language,
        setLanguage,
        page,
        setPage,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
