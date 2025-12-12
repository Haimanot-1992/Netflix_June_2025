import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        // Fallback mock data
        const mockMovies = [
          {
            id: 1,
            title: "Movie 1",
            backdrop_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
            poster_path: "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
          },
          {
            id: 2,
            title: "Movie 2",
            backdrop_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            poster_path: "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
          },
          {
            id: 3,
            title: "Movie 3",
            backdrop_path: "/9yxep7oJdkj3Pla9TD9gKflRApY.jpg",
            poster_path: "/9yxep7oJdkj3Pla9TD9gKflRApY.jpg",
          },
          {
            id: 4,
            title: "Movie 4",
            backdrop_path: "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
            poster_path: "/54yOImQgj8i85u9hxxnaIQBRUuo.jpg",
          },
          {
            id: 5,
            title: "Movie 5",
            backdrop_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            poster_path: "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
          },
        ];
        setMovies(mockMovies);
      }
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      // Clear previous trailer if any
      setTrailerUrl(""); // Optional: clear immediately and then set new one, or keep the old until new is fetched.
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (url) {
            console.log(url);
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for", movie.title);
          }
        })
        .catch((error) => {
          console.log("Error fetching trailer:", error);
        });
    }
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies?.map((movie) => (
          <div
            className={`row__posterContainer ${
              isLargeRow && "row__posterContainer--large"
            }`}
            key={movie.id}
          >
            <img
              onClick={() => {
                handleClick(movie);
              }}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title}
              loading="lazy"
            />
            <div style={{ padding: "40px" }}>
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
            </div>
            <div className="row__posterOverlay">
              <div className="row__posterInfo">
                <h3>{movie.name || movie.title}</h3>
                <div className="row__posterActions">
                  <button className="row__playButton">
                    <i className="fas fa-play"></i>
                  </button>
                  <button className="row__likeButton">
                    <i className="fas fa-thumbs-up"></i>
                  </button>
                  <button className="row__dislikeButton">
                    <i className="fas fa-thumbs-down"></i>
                  </button>
                  <button className="row__moreButton">
                    <i className="fas fa-chevron-down"></i>
                  </button>
                </div>
                <div className="row__posterStats">
                  <span className="row__match">98% Match</span>
                  <span className="row__age">16+</span>
                  <span className="row__duration">2h 14m</span>
                  <span className="row__quality">HD</span>
                </div>
                <div className="row__genres">
                  <span>Exciting</span>
                  <span>Thrilling</span>
                  <span>Suspenseful</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Row;
