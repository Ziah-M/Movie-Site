import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const MovieDetailsOverlay = () => (
  <StyledContainer>
    <h1>Grizzly Man</h1>
    <span>2004 | Documentary | 1hr 55mins</span>
    <button>Watch Now</button>
    <button>Playlist</button>
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  position: absolute;
  top: 0px;
  left: 0px;
`;

export default MovieDetailsOverlay;
