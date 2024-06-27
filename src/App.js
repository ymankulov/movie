import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./Pages/MovieDetails";
import ActorDetails from "./Pages/ActorDetails";
import { useContext } from "react";
import { MovieContext } from "./context";
import Favorite from "./components/Favorite";
import Search from "./components/Search";

function App() {
  const { dark } = useContext(MovieContext);
  return (
    <div
      className=""
      style={{
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/details/:movieId" element={<MovieDetails />} />
        <Route path="/actorDetails/:personId" element={<ActorDetails />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/search/:movieName" element={<Search/>}/>
      </Routes>
    </div>
  );
}

export default App;
