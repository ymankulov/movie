import React, { useContext } from "react";
import { MovieContext } from "../../context";
import MovieCard from "../MovieCard";

const Favorite = () => {
  const { favorite } = useContext(MovieContext);
  
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {favorite.map((el, idx) => (
            <MovieCard el={el} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
