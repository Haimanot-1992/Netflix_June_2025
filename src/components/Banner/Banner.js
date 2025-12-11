import React, { useState, useEffect } from "react";
import "./Banner.css";
import axios from "axios";
import requests from "../../Requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // Fallback movie data in case API call fails
  const fallbackMovie = {
    name: "Stranger Things",
    overview:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
  };

  const displayMovie = movie?.backdrop_path ? movie : fallbackMovie;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${displayMovie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {displayMovie?.title ||
            displayMovie?.name ||
            displayMovie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button banner__button--play">
            <i className="fas fa-play"></i> Play
          </button>
          <button className="banner__button banner__button--info">
            <i className="fas fa-info-circle"></i> More Info
          </button>
        </div>
        <h1 className="banner__description">
          {truncate(displayMovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
