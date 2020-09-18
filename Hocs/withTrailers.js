import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const withTrailers = (Component) => {
  const WithTrailers = (props) => {
    const id = props.match && props.match.params && props.match.params.id || props.id;


    const [trailers, setTrailers] = useState(null);

    useEffect(() => {
      if (id) {
        getTrailers();
      }
    }, []);

    const getTrailers = () => {
      const cache = localStorage.getItem(`movie-trailers-${id}`);
      if (cache) {
        setTrailers(JSON.parse(cache));
      } else {
        console.log("FETCHING REVIEWS");
        axios
          .request(`${MOVIE_URL}/${id}/videos?api_key=${API_KEY}`)
          .then((result) => {
            //Filter out videos that aren't trailers
            const trailers = result.data.results.filter(
              (video) => video.type === "Trailer"
            );

            localStorage.setItem(
              `movie-trailers-${id}`,
              JSON.stringify(trailers)
            );

            setTrailers(trailers);
          })
          .catch((error) =>
            console.log("error fetching movie trailers", error)
          );
      }
    };

    return <Component {...props} trailers={trailers} />;
  };

  return WithTrailers;
};

export default withTrailers;

export { withTrailers };
