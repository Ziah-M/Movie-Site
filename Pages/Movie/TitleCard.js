import React from "react";

import { Card as UnstyledCard, Container, Row, Col } from "react-bootstrap";

import styled from "styled-components";

// have removed use of tagline & title now as they are displayed outside the component now

const TitleCard = ({
  title,
  poster,
  released,
  language,
  genres,
  rating,
  tagline
}) => {
  const posterUrl = `https://image.tmdb.org/t/p/original/${poster}`;
  const formattedDate = released;
  return (
    <Card
      style={{
        backgroundColor: "transparent",
        userSelect: "none"
      }}
    >
      <Card.Img
        src={posterUrl}
        style={{ width: "15vw", minHeight: "260px", minWidth: "170px" }}
      />
      <Card.ImgOverlay className="d-flex flex-column justify-content-between">
        <Row noGutters>
          <Col xs={2}>{language}</Col>
          <Col xs={10} className="text-right">
            {formattedDate}
          </Col>
        </Row>
        <Row noGutters>
          <Col xs={10} className="text-left">
            {genres.map(genre => genre.name)}
          </Col>
          <Col xs={2} className="text-right">
            {rating}
          </Col>
        </Row>
      </Card.ImgOverlay>
    </Card>
  );
};

const Card = styled(UnstyledCard)`
  &:hover {
    border: 1px solid skyblue;
  }
`;

export default TitleCard;
