import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../private";
const URL = "https://api.themoviedb.org/3";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const withFetchMovies = (Component) => {
  const WithFetchMovies = (props) => {
    const [trending, setTrending] = useState(null);
    const [playingNow, setPlayingNow] = useState(null);
    const [popular, setPopular] = useState(null);
    const [topRated, setTopRated] = useState(null);
    const [comingSoon, setComingSoon] = useState(null);

    useEffect(() => {
      getTrending("movie", "week");
      getComingSoon();
      getPopular();
      getPlayingNow();
      getTopRated();
      // getMovieDetails(featuredMovie);
    }, []);

    const getTrending = (mediaType, timeWindow) => {
      const localData = localStorage.getItem("movies-trending");
      if (localData) {
        setTrending(JSON.parse(localData));
      } else {
        axios
          .request(
            `${URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`
          )
          .then((result) => {
            localStorage.setItem(
              "movies-trending",
              JSON.stringify(result.data.results)
            );
            setTrending(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching trending details", error)
          );
      }
    };

    const getPlayingNow = () => {
      const localData = localStorage.getItem("movies-playing-now");
      if (localData) {
        setPlayingNow(JSON.parse(localData));
      } else {
        axios
          .request(`${URL}/movie/now_playing?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "movies-playing-now",
              JSON.stringify(result.data.results)
            );
            setPlayingNow(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching get playing now details", error)
          );
      }
    };

    const getPopular = () => {
      const localData = localStorage.getItem("movies-popular");
      if (localData) {
        setPopular(JSON.parse(localData));
      } else {
        axios
          .request(`${URL}/movie/popular?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "movies-popular",
              JSON.stringify(result.data.results)
            );
            setPopular(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching get popular details", error)
          );
      }
    };

    const getTopRated = () => {
      const localData = localStorage.getItem("movies-top-rated");
      if (localData) {
        setTopRated(JSON.parse(localData));
      } else {
        axios
          .request(`${URL}/movie/top_rated?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "movies-top-rated",
              JSON.stringify(result.data.results)
            );
            setTopRated(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching top rated details", error)
          );
      }
    };

    const getComingSoon = () => {
      const localData = localStorage.getItem("movies-coming-soon");
      if (localData) {
        setComingSoon(JSON.parse(localData));
      } else {
        axios
          .request(`${URL}/movie/upcoming?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "movies-coming-soon",
              JSON.stringify(result.data.results)
            );
            setComingSoon(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching coming soon details", error)
          );
      }
    };

    return (
      <Component
        {...props}
        moviesTrending={trending}
        moviesPlayingNow={playingNow}
        moviesComingSoon={comingSoon}
        moviesPopular={popular}
        moviesTopRated={topRated}
      />
    );
  };

  return WithFetchMovies;
};

export default withFetchMovies;

export { withFetchMovies };
