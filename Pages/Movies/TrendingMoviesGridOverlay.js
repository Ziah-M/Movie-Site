import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";
import styled from "styled-components";

const TrendingMoviesGridOverlay = () => (
  <StyledContainer>
    <h3>Trending this week</h3>
  </StyledContainer>
);

const StyledContainer = styled(Container)`
  position: absolute;
  bottom: 0px;
  left: 0px;
`;

export default TrendingMoviesGridOverlay;
