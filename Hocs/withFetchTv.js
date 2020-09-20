import React, { useState, useEffect } from "react";
import axios from "axios";
import API_KEY from "../private";
const URL = "https://api.themoviedb.org/3";
const TV_URL = "https://api.themoviedb.org/3/tv";

const withFetchTv = (Component) => {
  const WithFetchTv = (props) => {
    const [popular, setPopular] = useState(null);
    const [topRated, setTopRated] = useState(null);
    const [airingToday, setAiringToday] = useState(null);
    const [onTheAir, setOnTheAir] = useState(null);

    useEffect(() => {
      getOnTheAir();
      getPopular();
      getAiringToday();
      getTopRated();
    }, []);

    const getOnTheAir = () => {
      const localData = localStorage.getItem("tv-on-the-air");
      if (localData) {
        setOnTheAir(JSON.parse(localData));
      } else {
        axios
          .request(`${TV_URL}/on_the_air?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "tv-on-the-air",
              JSON.stringify(result.data.results)
            );
            setOnTheAir(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching on-the-air movie details", error)
          );
      }
    };

    const getAiringToday = () => {
      const localData = localStorage.getItem("tv-airing-today");
      if (localData) {
        setAiringToday(JSON.parse(localData));
      } else {
        axios
          .request(`${TV_URL}/airing_today?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "tv-airing-today",
              JSON.stringify(result.data.results)
            );
            setAiringToday(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching get tv-airing-today details", error)
          );
      }
    };

    const getPopular = () => {
      const localData = localStorage.getItem("tv-popular");
      if (localData) {
        setPopular(JSON.parse(localData));
      } else {
        axios
          .request(`${TV_URL}/popular?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "tv-popular",
              JSON.stringify(result.data.results)
            );
            setPopular(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching get tv-popular details", error)
          );
      }
    };

    const getTopRated = () => {
      const localData = localStorage.getItem("tv-top-rated");
      if (localData) {
        setTopRated(JSON.parse(localData));
      } else {
        axios
          .request(`${TV_URL}/top_rated?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              "tv-top-rated",
              JSON.stringify(result.data.results)
            );
            setTopRated(result.data.results);
          })
          .catch((error) =>
            console.log("error fetching tv top rated details", error)
          );
      }
    };

    return (
      <Component
        {...props}
        tvAiringToday={airingToday}
        tvOnTheAir={onTheAir}
        tvPopular={popular}
        tvTopRated={topRated}
      />
    );
  };

  return WithFetchTv;
};

export default withFetchTv;

export { withFetchTv };
