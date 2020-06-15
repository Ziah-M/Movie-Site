import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useEventListener from "../../Hooks/useEventListener.js";
import MoviePage from "../Movie";
import Featured from "./Featured";
import MovieSlider from "./MovieSlider";
import API_KEY from "../../private";

const URL = "https://api.themoviedb.org/3";

const Movies = () => {
  const [trending, setTrending] = useState(null);
  const [playingNow, setPlayingNow] = useState(null);
  const [popular, setPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [comingSoon, setComingSoon] = useState(null);

  //Temporary until I use routing with query params for this
  const [loadedMovie, setLoadedMovie] = useState(500);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    getTrending("movie", "week");
    getPlayingNow();
    getPopular();
    getTopRated();
    getComingSoon();
  };

  const [width, setWidth] = useState(null);

  // RESIZE SIDE EFFECT
  // Determines items per slide
  const handleResize = useCallback(() => {
    setWidth(window.innerWidth);
  }, [setWidth]);

  useEventListener("resize", handleResize);

  // HACK TO MAKE SURE RESIZE RUNS ON MOUNT TO SET SCROLL PROPERLY
  useEffect(() => {
    handleResize();
  }, []);

  const getTrending = (mediaType, timeWindow) => {
    axios
      .request(`${URL}/trending/${mediaType}/${timeWindow}?api_key=${API_KEY}`)
      .then(result => setTrending(result.data.results))
      .catch(error => console.log("error fetching trending details", error));
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

  const baseStyle = {
    background: "transparent",
    color: "white"
  };

  const handleGoToMovie = id => {
    console.log("Loading Movie with ID:", id);
    setLoadedMovie(id);
  };

  return (
    <Container fluid style={baseStyle}>
      <Row noGutters fluid>
        <Featured movies={trending} />
      </Row>
      <MovieSlider
        movies={playingNow}
        title="In Cinemas Now"
        baseStyle={baseStyle}
        handleGoToMovie={handleGoToMovie}
        width={width}
      />
      <MovieSlider
        movies={comingSoon}
        title="Coming Soon"
        baseStyle={baseStyle}
        handleGoToMovie={handleGoToMovie}
        width={width}
      />
      <MovieSlider
        movies={popular}
        title="Popular"
        baseStyle={baseStyle}
        handleGoToMovie={handleGoToMovie}
        width={width}
      />
      <MovieSlider
        movies={topRated}
        title="Top Rated"
        baseStyle={baseStyle}
        handleGoToMovie={handleGoToMovie}
        width={width}
      />
    </Container>
  );
};

export default Movies;
