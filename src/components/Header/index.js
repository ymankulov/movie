import React, { useContext, useState } from "react";
import headerLogo from "../../assets/images/header-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { MovieContext } from "../../context";
import { MdFavorite } from "react-icons/md";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { dark, setDark } = useContext(MovieContext);
  const { language, setLanguage } = useContext(MovieContext);
  const { setPage } = useContext(MovieContext);
  console.log(inputValue, "value");
  const navigate = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={headerLogo} alt="img" width={140} />
          <div className="header--nav">
            <Link to={"/"} className="">
              Home
            </Link>
            <Link to={"/popular"} className="">
              Popular
            </Link>
            <Link to={"/topRated"} className="">
              Top Rated
            </Link>
            <Link to={"favorite"} className="">
              Favorite
            </Link>
          </div>

          <div className="header--search">
            <input
              type="text"
              placeholder="search"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => navigate(`/search/${inputValue}`)}>
              search
            </button>
          </div>
          <select onChange={(e) => setLanguage(e.target.value)}>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>
          <select onChange={(e) => setPage(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <a className="header--dark" onClick={() => setDark(!dark)}>
            <CgDarkMode />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
