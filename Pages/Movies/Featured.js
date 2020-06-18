import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";
import MovieDetailsOverlay from "./MovieDetailsOverlay";
import TrendingMoviesGridOverlay from "./TrendingMoviesGridOverlay";

const Featured = ({
  movie: { vote_average = 0, title = "", backdrop_path = "" }
}) => {
  // for carousel
  //     const backgroundStyle = movies
  // ? {
  //   backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + `https://image.tmdb.org/t/p/w400/${movieDetails.backdrop_path}` + ")",
  //   backgroundRepeat:'no-repeat',
  //   backgroundSize:'100%',
  //   color: 'white',
  //   }
  // : {};

  return (
    <StyledContainer fluid>
      <Row noGutters>
        <Col xs={12} style={{ height: "75vh", position: "relative" }}>
          <StyledImage
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
          />
          <MovieDetailsOverlay />
          <TrendingMoviesGridOverlay />
        </Col>
      </Row>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  background: red;
  padding: 0;
  margin: 0;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export default Featured;
