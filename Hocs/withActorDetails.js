import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
const MOVIE_URL = "https://api.themoviedb.org/3/person";

const withActorDetails = (Component) => {
  const WithActorDetails = (props) => {
    const id = props.match && props.match.params && props.match.params.id || props.id;


    const [actorDetails, setActorDetails] = useState(null);

    useEffect(() => {
      if (id) {
        getActorDetails();
      }
    }, []);

    const getActorDetails = () => {
      const cache = localStorage.getItem(`movie-actor-${id}`);
      if (cache) {
        setActorDetails(JSON.parse(cache));
      } else {
        console.log("FETCHING ACTOR DETAILS");
        axios
          .request(`${MOVIE_URL}/${id}?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `movie-actor-${id}`,
              JSON.stringify(result.data)
            );
            setActorDetails(result.data);
          })
          .catch((error) => console.log("error fetching actor details", error));
      }
    };

    return <Component {...props} actor={actorDetails} />;
  };

  return WithActorDetails;
};

export default withActorDetails;

export { withActorDetails };
