import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
const URL = "https://api.themoviedb.org/3";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const withMovieDetails = (Component) => {
  const WithMovieDetails = (props) => {
    const { id } = props;

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      if (id) {
        getMovieDetails();
      }
    }, []);

    const getMovieDetails = () => {
      const cache = localStorage.getItem(`movie-details-${id}`);
      if (cache) {
        setMovieDetails(JSON.parse(cache));
      } else {
        axios
          .request(`${MOVIE_URL}/${id}?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `movie-details-${id}`,
              JSON.stringify(result.data)
            );
            console.log("THIS HAPPENED OH NO!!");
            setMovieDetails(result.data);
          })
          .catch((error) => console.log("error fetching movie details", error));
      }
    };

    return <Component {...props} movieDetails={movieDetails} />;
  };

  return WithMovieDetails;
};

export default withMovieDetails;

export { withMovieDetails };
