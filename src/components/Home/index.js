import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";

const Home = () => {
  const [background, setBackground] = useState([])

  const getBackground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-Us`
    ).then((res) => {
      let allBackground = res.data.results.map((el)=>el.backdrop_path)
      setBackground(allBackground)
      console.log(allBackground);
    });
  };

  useEffect(() => {
    getBackground(API_KEY);
  },[]);

  const getBackgroundIdx = Math.floor(Math.random() * background.length)
  const getBackgroundRandom = background[getBackgroundIdx]

  return (
    <div style={{background: `url(https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${getBackgroundRandom})`}} id="home">
      <div className="container">
        <div className="home">
             <h1>Welcome. <br /> <span>Millions of movies, TV shows and people to discover. Explore now.</span></h1>
             <div className="home--input">
              <input type="text" placeholder="Search films,actors..."/>
              <button>Search</button>
             </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
};

export default Home;
