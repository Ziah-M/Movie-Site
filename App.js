import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Landing from "./Pages/Landing";
import API_KEY from "./private";

const URL = "https://api.themoviedb.org/3";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const App = () => {
  const [trending, setTrending] = useState(null);
  const [playingNow, setPlayingNow] = useState(null);
  const [popular, setPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [comingSoon, setComingSoon] = useState(null);
  const [featuredMovieDetails, setFeaturedMovieDetails] = useState({});

  //Temporary until I use routing with query params for this
  const [featuredMovie, setFeaturedMovie] = useState(501);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    getTrending("movie", "week");
    getPlayingNow();
    getPopular();
    getTopRated();
    getComingSoon();
    getMovieDetails(featuredMovie);
  };

  const getTrending = (mediaType, timeWindow) => {
    axios
      .request(`${URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`)
      .then(result => setTrending(result.data.results))
      .catch(error => console.log("error fetching trending details", error));
  };

  const getMovieDetails = id => {
    axios
      .request(`${MOVIE_URL}/${id}?api_key=${API_KEY}`)
      .then(result => setFeaturedMovieDetails(result.data))
      .catch(error => console.log("error fetching movie details", error));
  };

  const getPlayingNow = () => {
    axios
      .request(`${URL}/movie/now_playing?api_key=${API_KEY}`)
      .then(result => setPlayingNow(result.data.results))
      .catch(error =>
        console.log("error fetching get playing now details", error)
      );
  };

  const getPopular = () => {
    axios
      .request(`${URL}/movie/popular?api_key=${API_KEY}`)
      .then(result => setPopular(result.data.results))
      .catch(error => console.log("error fetching get popular details", error));
  };

  const getTopRated = () => {
    axios
      .request(`${URL}/movie/top_rated?api_key=${API_KEY}`)
      .then(result => setTopRated(result.data.results))
      .catch(error => console.log("error fetching top rated details", error));
  };

  const getComingSoon = () => {
    axios
      .request(`${URL}/movie/upcoming?api_key=${API_KEY}`)
      .then(result => setComingSoon(result.data.results))
      .catch(error => console.log("error fetching coming soon details", error));
  };

  return (
    //TODO -- maxWidth is a temporary fix to width overflowing the viewport
    <GlobalStyles style={{ maxWidth: "98.7vw", overflow: "hidden" }}>
      <Landing
        featuredMovie={featuredMovieDetails}
        trending={trending}
        playingNow={playingNow}
        comingSoon={comingSoon}
        popular={popular}
        topRated={topRated}
      />
    </GlobalStyles>
  );
};

const GlobalStyles = styled.div`
  background: black;
`;

export default App;
