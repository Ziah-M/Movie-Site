import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
import { useLocation } from "react-router-dom";

const MOVIE_URL = "https://api.themoviedb.org/3/movie";
const TV_URL = "https://api.themoviedb.org/3/tv";

const withCredits = (Component) => {
  const WithCredits = (props) => {
    const id = props.match && props.match.params && props.match.params.id || props.id;


    const [credits, setCredits] = useState(null);

    const location = useLocation();


    useEffect(() => {
      if (id) {
        //set isTv from either props OR the route
        var isTv = props;
        var urlMatchesTv = location && location.pathname.includes("tv");
        if (urlMatchesTv) {
          isTv = true;
        }
        const conditionalUrl = isTv === true ? TV_URL : MOVIE_URL;
        const conditionalLocalStorage = isTv ? "tv" : "movie";
        getCredits(conditionalUrl, conditionalLocalStorage);
      }
    }, []);

    const getCredits = (conditionalUrl, conditionalLocalStorage) => {
      const cache = localStorage.getItem(`${conditionalLocalStorage}-credits-${id}`);
      if (cache) {
        setCredits(JSON.parse(cache));
      } else {
        console.log("FETCHING CREDITS");
        axios
          .request(`${conditionalUrl}/${id}/credits?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `${conditionalLocalStorage}-credits-${id}`,
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
