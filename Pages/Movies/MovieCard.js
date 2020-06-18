import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// TODO - might want to use a bootstrap badge instead of my custom built rating overlay

const MovieCard = ({
  itemProps,
  movie: {
    title,
    original_language: genre,
    vote_average: rating,
    poster_path: poster,
    id
  }
}) => {
  poster = `https://image.tmdb.org/t/p/original/${poster}`;
  return (
    <StyledContainer fluid onClick={() => itemProps().handleGoToMovie(id)}>
      <Row noGutters>
        <Col xs={12}>
          <MoviePoster fluid src={poster} alt={title} />
          <RatingOverlay>
            <Stars rating={rating} />
          </RatingOverlay>
        </Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  height: 200px;
  padding: 0;
  font-size: 10px;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin: 0px 5px;
  &:hover {
    border: 2px solid skyblue;
  }
`;

const RatingOverlay = styled.div`
  text-align: center;
  opacity: 0.8;
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
  color: white;
  min-width: 45px;
  font-size: 1rem;
`;

const MoviePoster = styled(Image)`
  border-radius: 10px;
`;

const Star = ({ active = false }) => (
  <StyledStar icon={faStar} active={active} />
);

const StyledStar = styled(FontAwesomeIcon)`
  ${props => (props.active ? "color: skyblue" : "color:transparent")}
`;

const Stars = ({ rating = 1 }) => {
  return (
    <div>
      {[...Array(5)].map((item, index) => (
        <Star active={index + 1 < (rating + 1.6) / 2} />
      ))}
    </div>
  );
};

export default MovieCard;
