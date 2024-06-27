import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import ActorFilms from "../../components/ActorFilms";
import { MovieContext } from "../../context";

const ActorDetails = () => {
  const {language}=useContext(MovieContext)
  const { personId } = useParams();
  const [actorDetalis, setActorDetalis] = useState({});
  const [countBiograhy, setcountBiograhy] = useState(200);
  console.log(personId, "Id");
  const getActorDtalis = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setActorDetalis(res.data);
    });
  };
  useEffect(() => {
    getActorDtalis(API_KEY);
  }, [language]);

  let {
    profile_path,
    name,
    biography,
    birthday,
    place_of_birth,
    known_for_department,
    gender,
    imdb_id,
    popularity,
  } = actorDetalis;

  console.log(actorDetalis);
  return (
    <div id="actorDetalis">
      <div className="container">
        <div className="actorDetalis">
          <img
            src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${profile_path}`}
            alt=""
            width={350}
          />
          <div className="actorDetalis--text">
            <h1>{name}</h1>
            <h3>{"Биография"}</h3>

            <p>{biography?.slice(0, countBiograhy)}</p>
            <a
              className=""
              // onClick={() => {
              //   biography.length > countBiograhy
              //     ? setcountBiograhy(biography.length)
              //     : setcountBiograhy(200);
              // }}
            >
              {
                "more..."
                // biography.length > countBiograhy
                // ? 'more...'
                // : 'shirt'
              }
            </a>

            <ActorFilms id={personId} />
            {/* <a
              className=""
              onClick={() => {
                setcountBiograhy(200);
              }}
            >
              Short
            </a> */}
          </div>
        </div>
        <div className="actorDetalis--title">
          <h1>{"Personal Info"}</h1>
          <div>
            <h4>{"Known For"}</h4>
            <h2>{"Дата рождения"}</h2>
          </div>
          <div></div>
          <h1>{birthday}</h1>
        </div>
      </div>
    </div>
  );
};

export default ActorDetails;
