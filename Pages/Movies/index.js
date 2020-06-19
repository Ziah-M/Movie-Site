import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import styled from "styled-components";
import useEventListener from "../../Hooks/useEventListener.js";
import API_KEY from "../../private";
import { theme } from "../../Theme";
import Featured from "./Featured";
import MovieSlider from "../../Components/Slider/MovieSlider";
import MovieSliderLight from "../../Components/Slider/MovieSliderLight";

const Movies = ({
  toggleShowMoviePage,
  handleLoadMovie = () => null,
  featuredMovieDetails,
  trending,
  playingNow,
  comingSoon,
  featuredMovie,
  topRated,
  popular
}) => {
  const baseStyle = {
    background: "transparent",
    color: "white",
    padding: 0
  };

  const handleGoToMovie = id => {
    console.log("Loading Movie with ID:", id);
    handleLoadMovie(id);
  };

  return (
    <Container fluid style={baseStyle}>
      <Row noGutters fluid>
        <Featured
          movie={featuredMovie}
          movies={trending}
          toggleShowMoviePage={toggleShowMoviePage}
          handleLoadMovie={handleLoadMovie}
        />
      </Row>
      <DarkSection fluid>
        <MovieSlider
          movies={playingNow}
          title="In Cinemas Now"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
        />
      </DarkSection>

      <LightSection fluid>
        <MovieSliderLight
          movies={comingSoon}
          title="Coming Soon"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
        />
      </LightSection>
      <DarkSection fluid>
        <MovieSlider
          movies={popular}
          title="Popular"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
        />
      </DarkSection>
      <LightSection fluid>
        <MovieSliderLight
          movies={topRated}
          title="Top Rated"
          baseStyle={baseStyle}
          handleGoToMovie={handleGoToMovie}
        />
      </LightSection>
    </Container>
  );
};

// base style for sections
const SectionBase = styled(Container)`
  padding: 20px;
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
  color: ${theme.darkBlue};
`;

export default Movies;
