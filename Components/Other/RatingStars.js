import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: inline;
`;

const Star = ({ active = false }) => (
  <StyledStar icon={faStar} active={active} />
);

const StyledStar = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${(props) => (props.active ? "#24baef" : "white")};
`;

const RatingStars = ({ rating = 1 }) => {
  return (
    <Wrapper>
      {[...Array(5)].map((item, index) => (
        <Star active={index <= rating - 1 + 0.4} />
      ))}
    </Wrapper>
  );
};

export default RatingStars;
