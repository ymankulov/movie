import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";

const MovieCard = ({ el }) => {
  const { dark } = useContext(MovieContext);
  return (
    <div
      className="popular--card"
      key={el.id}
      style={{
        border: `2px solid ${dark ? "white" : "black"}`,
      }}
    >
      <Link to={`/details/${el.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${el.poster_path}`}
          alt=""
        />
      </Link>
      <h3>{el.title}</h3>
      <h4>{el.release_date}</h4>
    </div>
  );
};

export default MovieCard;
