import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import { MovieContext } from "../../context";

const Video = ({ movieId }) => {
  const [video, setVideo] = useState([]);
  const [count, setCount] = useState(3);
  // https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US
  const getVideo = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`
    ).then((res) => {
      setVideo(res.data.results);
    });
  };
  useEffect(() => {
    getVideo(API_KEY);
  }, []);
  return (
    <div id="video">
      <div className="container">
        <div className="video">
          {video.slice(0, count).map((el) => (
            <div className="video--block">
              <iframe
                width="396"
                height="243"
                src={`https://www.youtube.com/embed/${el.key}`}
                title="D3 Porsche Taycan Turbo S. Жаль что ты ушла......."
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          ))}
        </div>
        <center>
          <button
            onClick={() => {
              video.length >= count ? setCount(count + 3) : setCount(3);
            }}
          >
            {video.length >= count ? "more..." : "shirt"}
          </button>
        </center>
      </div>
    </div>
  );
};

export default Video;
