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

const TrendingMoviesGridOverlay = ({ movies = [{}] }) => (
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
                <MovieCard movie={movie} />
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

const MovieCard = ({ movie: { poster_path, title } }) => {
  const imgSrc = `https://image.tmdb.org/t/p/original/${poster_path}`;
  return (
    <ContainerImg fluid>
      <StyledCardImg src={imgSrc} alt="" />
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
`;

export default TrendingMoviesGridOverlay;
