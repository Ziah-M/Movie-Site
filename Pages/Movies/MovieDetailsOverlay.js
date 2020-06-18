import React from "react";
import {
  Carousel,
  Container,
  Row as UnstyledRow,
  Col,
  Image
} from "react-bootstrap";
import styled from "styled-components";

const MovieDetailsOverlay = () => (
  <StyledContainer fluid>
    <Row noGutters>
      <Title>Grizzly Man</Title>
    </Row>
    <Row noGutters>
      <Details>2004 | Documentary | 1hr 55mins</Details>
    </Row>
    <Row noGutters>
      <Col xs={12}>
        <WatchButton>Watch Now</WatchButton>
        <PlaylistButton>Playlist</PlaylistButton>
      </Col>
    </Row>
  </StyledContainer>
);

const Row = styled(UnstyledRow)`
  margin: 10px 0;
`;

const StyledContainer = styled(Container)`
  position: absolute;
  top: 30%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1``;

const Details = styled.div``;

const WatchButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  color: white;
  border: none;
  margin: 0px 10px;
  background-color: #24baef;
  &:hover {
    background-color: #007bff;
  }
`;

const PlaylistButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  margin: 0px 10px;
`;

export default MovieDetailsOverlay;
