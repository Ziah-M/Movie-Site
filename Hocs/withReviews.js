import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const withMovieReviews = (Component) => {
  const WithMovieReviews = (props) => {
    const { id } = props;

    const [movieReviews, setMovieReviews] = useState(null);

    useEffect(() => {
      if (id) {
        getMovieReviews();
      }
    }, []);

    const getMovieReviews = () => {
      const cache = localStorage.getItem(`movie-reviews-${id}`);
      if (cache) {
        setMovieReviews(JSON.parse(cache));
      } else {
          console.log("FETCHING REVIEWS")
        axios
          .request(`${MOVIE_URL}/${id}/reviews?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `movie-reviews-${id}`,
              JSON.stringify(result.data.results)
            );
            setMovieReviews(result.data.results);
          })
          .catch((error) => console.log("error fetching movie reviews", error));
      }
    };

    return <Component {...props} movieReviews={movieReviews} />;
  };

  return WithMovieReviews;
};

export default withMovieReviews;

export { withMovieReviews };