import React from "react";
import {
  Carousel,
  Container,
  Row as UnstyledRow,
  Col,
  Image
} from "react-bootstrap";
import styled from "styled-components";
import { theme } from "../../Theme";

const MovieDetailsOverlay = ({
  movie: {
    title = "Grizzly Man",
    year = "2004",
    genre = "Documentary",
    runTime = "1hr 55mins"
  }
}) => (
  <StyledContainer fluid>
    <Row noGutters>
      <Title>{title}</Title>
    </Row>
    <Row noGutters>
      <Details>
        <span style={{ padding: "0 10px", borderRight: "1px solid white" }}>
          {year}
        </span>
        <span style={{ padding: "0 10px", borderRight: "1px solid white" }}>
          {genre}
        </span>
        <span style={{ padding: "0 10px" }}>{runTime}</span>
      </Details>
    </Row>
    <Row noGutters>
      <Col xs={12}>
        <WatchButton>Launch</WatchButton>
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
  max-width: 300px;
  max-height: 200px;
  top: 30%;
  left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${theme.white};
`;

const Details = styled.div``;

const WatchButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 5px;
  color: ${theme.white};
  border: none;
  margin: 0px 10px;
  background-color: ${theme.lightBlue};
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
