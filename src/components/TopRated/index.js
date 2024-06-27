import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import load from "../../assets/images/loading.svg";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import { MovieContext } from "../../context";

const TopRated = () => {
  const { language } = useContext(MovieContext);
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [pagination, setPagination] = useState(1);

  const getTopRated = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${pagination}`
    ).then((res) => {
      setTopRated(res.data.results);
    });
  };
  useEffect(() => {
    setTopRated([]);
    setTimeout(() => {
      getTopRated(API_KEY);
    }, 500);
  }, [pagination, language]);
  console.log(topRated, "top");
  return (
    <div id="popular">
      <div className="container">
        {!topRated.length ? (
          <center>
            <img src={load} alt="" className="loading" />
          </center>
        ) : (
          <>
            <div className="popular">
              {topRated.map((el) => (
                <MovieCard el={el} key={el.id} />
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={() =>
                  setPagination(pagination > 1 ? pagination - 1 : 1)
                }
              >
                back
              </button>
              <h1>{pagination}</h1>
              <button onClick={() => setPagination(pagination + 1)}>
                next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TopRated;
