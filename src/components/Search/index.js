import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";

const Search = () => {
    const [search,setSearch] = useState([])
    const {movieName} = useParams()
    const getSearch=(key)=>{
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
        .then((res)=>{
            setSearch(res.data.results);
        })
    }
 useEffect(()=>{
    getSearch(API_KEY)
 })
 console.log(search);
 const {poster_path,title} = search
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
         <>
          {
            search.map((el)=>(
            <>
                 <MovieCard el={el} key={el.id}/>
            </>
              

            ))
          }</>
        </div>
      </div>
    </div>
  );
};

export default Search;
