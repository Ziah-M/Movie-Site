import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../../private";
const URL = "https://api.themoviedb.org/3";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const withFetchMovies = (Component) => {
  const WithFetchMovies = (props) => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
      getPopular();
    }, []);

    const getPopular = () => {
      axios
        .request(`${URL}/movie/popular?api_key=${API_KEY}`)
        .then((result) => setMovies(result.data.results))
        .then(console.log('successfully fetched movies'))
        .then(console.log('state is now',movies))
        .catch((error) =>
          console.log("error fetching get popular details", error)
        );
    };

    return <Component {...props} movies={movies} />
  };

  return WithFetchMovies;
};

export default withFetchMovies;
