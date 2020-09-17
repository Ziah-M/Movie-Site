import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const withCredits = (Component) => {
  const WithCredits = (props) => {
    const { id } = props;

    const [credits, setCredits] = useState(null);

    useEffect(() => {
      if (id) {
        getCredits();
      }
    }, []);

    const getCredits = () => {
      const cache = localStorage.getItem(`movie-credits-${id}`);
      if (cache) {
        setCredits(JSON.parse(cache));
      } else {
        console.log("FETCHING CREDITS");
        axios
          .request(`${MOVIE_URL}/${id}/credits?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `movie-credits-${id}`,
              JSON.stringify(result.data.cast)
            );
            setCredits(result.data.cast);
          })
          .catch((error) => console.log("error fetching movie credits", error));
      }
    };

    return <Component {...props} credits={credits} />;
  };

  return WithCredits;
};

export default withCredits;

export { withCredits };
