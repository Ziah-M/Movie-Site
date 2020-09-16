import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 30px;
  width: 50px;
  background: black;
  opacity: 0.8;
  color: white;
`;

const MovieRatingOverlay = ({ rating=0 }) => {
  return <Wrapper>STAR {rating}</Wrapper>;
};

export default MovieRatingOverlay;
