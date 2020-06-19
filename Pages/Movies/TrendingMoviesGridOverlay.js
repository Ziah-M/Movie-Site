import React from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Image,
  CardGroup,
  Card as UnstyledCard
} from "react-bootstrap";
import styled from "styled-components";

const TrendingMoviesGridOverlay = ({
  handleLoadMovie = () => null,
  movies = [{}]
}) => (
  <StyledContainer>
    {movies && (
      <Row
        noGutters
        style={{ maxWidth: "25vw", display: "flex", justifyContent: "center" }}
      >
        <h3 style={{ textAlign: "center" }}>Trending this week</h3>
        {movies.map(
          (movie, index) =>
            index < 9 && (
              <Col xs={4}>
                <MovieCard movie={movie} handleLoadMovie={handleLoadMovie} />
              </Col>
            )
        )}
      </Row>
    )}
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  position: absolute;
  top: 20%;
  left: 70%;
`;

const MovieCard = ({
  handleLoadMovie = () => null,
  movie: { poster_path, title, id }
}) => {
  const imgSrc = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <ContainerImg fluid>
      <StyledCardImg src={imgSrc} alt="" onClick={() => handleLoadMovie(id)} />
    </ContainerImg>
  );
};

const ContainerImg = styled(Container)`
  margin: 0.3vw 0;
  padding: 0;
`;

const StyledCardImg = styled(Image)`
  height: 9vw;
  width: 7vw;
  &:hover {
    border: 2px solid skyblue;
  }
`;

export default TrendingMoviesGridOverlay;
