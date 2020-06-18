import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import useEventListener from "../../Hooks/useEventListener.js";
import API_KEY from "../../private";
import { theme } from "../../Theme";
import Featured from "./Featured";
import MovieSlider from "./MovieSlider";

const URL = "https://api.themoviedb.org/3";
const MOVIE_URL = "https://api.themoviedb.org/3/movie";

const Movies = ({ toggleShowMoviePage }) => {
  const [trending, setTrending] = useState(null);
  const [playingNow, setPlayingNow] = useState(null);
  const [popular, setPopular] = useState(null);
  const [topRated, setTopRated] = useState(null);
  const [comingSoon, setComingSoon] = useState(null);
  const [featuredMovieDetails, setFeaturedMovieDetails] = useState({});

  //Temporary until I use routing with query params for this
  const [loadedMovie, setLoadedMovie] = useState(501);

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = () => {
    getTrending("movie", "week");
    // getPlayingNow();
    // getPopular();
    // getTopRated();
    // getComingSoon();
    getMovieDetails(loadedMovie);
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

  const baseStyle = {
    background: "transparent",
    color: "white",
    padding: 0
  };

  const handleGoToMovie = id => {
    console.log("Loading Movie with ID:", id);
    setLoadedMovie(id);
  };

  return (
    <Container fluid style={baseStyle} onClick={() => toggleShowMoviePage()}>
      <Row noGutters fluid>
        <Featured movie={featuredMovieDetails} movies={trending} />
      </Row>
      <DarkSection fluid>
        <MovieSlider
          movies={playingNow}
          title="In Cinemas Now"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
          width={width}
        />
      </DarkSection>

      <LightSection fluid>
        <MovieSlider
          movies={comingSoon}
          title="Coming Soon"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
          width={width}
        />
      </LightSection>
      <DarkSection fluid>
        <MovieSlider
          movies={popular}
          title="Popular"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
          width={width}
        />
      </DarkSection>
      <LightSection fluid>
        <MovieSlider
          movies={topRated}
          title="Top Rated"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
          width={width}
        />
      </LightSection>
    </Container>
  );
};

// base style for sections
const SectionBase = styled(Container)`
  padding: 20px;
  width: 100vw;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DarkSection = styled(SectionBase)`
  background-color: ${theme.darkBlue};
  color: ${theme.white};
`;

const LightSection = styled(SectionBase)`
  background-color: ${theme.white};
  color: ${theme.white};
`;

export default Movies;
