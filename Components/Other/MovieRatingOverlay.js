import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 25px;
  width: 40px;
  background: black;
  opacity: 0.8;
  color: white;
  text-align: center;
  padding: 1px 0;
  font-size: 14px;
`;

const MovieRatingOverlay = ({ rating = 0 }) => {
  return (
    <Wrapper>
      <FontAwesomeIcon style={{ opacity: 0.8 }} icon={faStar} /> {rating}
    </Wrapper>
  );
};

export default MovieRatingOverlay;
