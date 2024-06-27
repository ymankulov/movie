import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import load from "../../assets/images/loading.svg";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  // const [pagination, setPagination] = useState(1);
  const { page, setPage } = useContext(MovieContext);
  const { language } = useContext(MovieContext);

  const getPopular = (key) => {
    window.scroll(0, 0);
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${+page}`
    ).then((res) => {
      setPopular(res.data.results);
    });
  };

  useEffect(() => {
    setPopular([]);

    setTimeout(() => {
      getPopular(API_KEY);
    }, 2000);
  }, [language, page]);
  return (
    <div id="popular">
      <div className="container">
        {!popular.length ? (
          <center>
            <img src={load} alt="" className="loading" />
          </center>
        ) : (
          <>
            <div className="popular">
              {popular.map((el, index, arr) => (
                <MovieCard el={el} key={index} />
              ))}
            </div>
            <div className="pagination">
              <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>
                back
              </button>
              <h1>{page}</h1>
              <button onClick={() => setPage(page + 1)}>next</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Popular;
