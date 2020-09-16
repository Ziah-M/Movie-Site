import React from "react";
import { MovieCardSmall, MovieRatingOverlay } from "../index";
import styled from "styled-components";
import { getDefault } from "../../Data";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const MovieCard = styled.div`
  position: relative;

  /* aspect ratio of card */
  width: 10vw;
  height: calc(1.481 * 10 vw);
`;

const Overlay = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
`;

const LandingSlider = ({ category }) => {
  const movies = [
    getDefault().movie,
    getDefault().movie,
    getDefault().movie,
    getDefault().movie,
    getDefault().movie,
  ];
  return (
    <Wrapper>
      {movies.map((movie) => (
        <MovieCard>
          <Overlay>
            <MovieRatingOverlay />
          </Overlay>
          <MovieCardSmall></MovieCardSmall>
        </MovieCard>
      ))}
    </Wrapper>
  );
};

export default LandingSlider;
