import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import user from "../../assets/images/user_empty.png";
import { Link } from "react-router-dom";
import { MovieContext } from "../../context";

const Actors = ({ movieId }) => {
  const [actors, setActors] = useState([]);
  const {language}=useContext(MovieContext)
  const Actorsdeatils = (key) => {
    axios(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=${language}    
        `).then((res) => {
      setActors(res.data.cast);
    });
  };

  useEffect(() => {
    Actorsdeatils(API_KEY);
  }, [language]);
  console.log(actors);
  return (
    <div>
      <div className="container">
        <div className="actors">
          <div className="actors--text">
            <h1>Актёрский состав сериала</h1>
          </div>
          <div className="actors--img">
            {actors.map((el) => (
              <div>
                <Link to={`/actorDetails/${el.id}`}>
                  <img
                    src={
                      el.profile_path
                        ? `https://media.themoviedb.org/t/p/w276_and_h350_face${el.profile_path}`
                        : user
                    }
                    alt=""
                  />
                </Link>
                <h3>{el.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
