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
  width: 13vw;
  height: calc(1.5 * 13 vw);
`;

const Overlay = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
`;

const MovieSection=styled.div`
  height:auto;
  width:13vw;
`

const Title=styled.div`
color:white;
opacity:0.6;
margin:5px 0;
font-size:16px;
font-weight:500;
`

const Genres=styled.div`
color:white;
opacity:0.6;
font-size:12px;
`


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
        <MovieSection>
          <MovieCard>
            <Overlay>
              <MovieRatingOverlay rating={movie.rating}/>
            </Overlay>
            <MovieCardSmall className='rounded'></MovieCardSmall>
          </MovieCard>
        <Title>
        {movie.title}
        </Title>
        <Genres>
        {movie.genres}
        </Genres>
        </MovieSection>
      ))}
    </Wrapper>
  );
};

export default LandingSlider;
