import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import filmImg from "../../assets/images/film-not-img.jpeg";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";

const ActorFilms = ({ id }) => {
  const {language}=useContext(MovieContext)
  const [films, setFilms] = useState([]);
  const getActorFilms = (key) => {
    axios(`
        https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}
        `).then((res) => {
      setFilms(res.data.cast);
      console.log(films, "films");
    });
  };
  useEffect(() => {
    getActorFilms(API_KEY);
  }, [language]);
  let { backdrop_path, job, original_title, overview, release_date } = films;
  return (
    <div id="films">
      <div className="df">
        {films.map((el) => (
          <div className="film">
            <Link to={`/details/${el.id}`}>
              <img
                style={{
                  width: "200px",
                  height: "300px",
                }}
                src={
                  el.backdrop_path
                    ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.backdrop_path}`
                    : filmImg
                }
                alt=""
              />
            </Link>
            <h1>{el.original_title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActorFilms;
