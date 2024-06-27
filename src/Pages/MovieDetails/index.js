import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import { GiHearts } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { BsCircleFill } from "react-icons/bs";
import Actors from "../../components/Actors";
import Video from "../../components/Video";
import { MovieContext } from "../../context";

const MovieDetails = () => {
 
  const [movieDetails, setMovieDetails] = useState({});
  let { movieId } = useParams();
  // useParams()
  const { favorite, setFavorite } = useContext(MovieContext);

  const getMovieDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=en-Us`
    ).then((res) => {
      setMovieDetails(res.data);
    });
  };

  const addToFavorite = () => {
    let findFavorite = favorite.find((el) => el.id === movieDetails.id);
    if (findFavorite) {
      let deleteFavorite = favorite.filter((el) => {
        return el.id !== movieDetails.id;
      });
      setFavorite(deleteFavorite);
      localStorage.setItem("movie", JSON.stringify(deleteFavorite));
    } else {
      let result = [...favorite, movieDetails];
      setFavorite(result);
      localStorage.setItem("movie", JSON.stringify(result));
    }
   
  };

  let heart = favorite.some((el) => el.id === movieDetails.id)
  useEffect(() => {
    getMovieDetails(API_KEY);
  }, []);

  let {
    backdrop_path,
    poster_path,
    title,
    release_date,
    genres,
    overview,
    runtime,
    tagline,
    vote_average,
  } = movieDetails;
  console.log(favorite, "hi");
  return (
    <>
      <div
        style={{
          background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path})`,
        }}
        id="movieDetails"
      >
        <div className="container">
          <div className="movieDetails">
            <img
              src={`https://image.tmdb.org/t/p/w440_and_h660_face${poster_path}`}
              alt=""
            />
            {/* <h1>{title}</h1> */}
            <div className="movieText">
              <h1>{title}</h1>
              <div className="movieTime">
                <h2>{release_date}</h2>
                <h4>{<BsCircleFill />}</h4>
                <h2>
                  {Math.floor(runtime / 60)}h {runtime % 60}min
                </h2>
              </div>
              <div className="movieReiting">
                <div className="reiting">
                  <h1>{Math.round(vote_average * 10)}%</h1>
                </div>
                <h3>Reiting</h3>
                <h2>What's your Vibe?</h2>
              </div>
              <div className="movieIcon">
                <a
                  className=""
                  onClick={() => addToFavorite()}
                  style={{
                    color: heart ? "red" : "white",
                  }}
                >
                  {<GiHearts />}
                </a>
                <a href="">{<IoMenu />}</a>
                <a href="">{<FaBookmark />}</a>
                <h3>
                  <span>{<FaPlay />}</span>Trailer
                </h3>
              </div>
              <h5>{tagline}</h5>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          </div>
          <div className="bg"></div>
        </div>
      </div>
      <Actors movieId={movieId} />
      <Video movieId={movieId} />
    </>
  );
};

export default MovieDetails;
