import React from "react";

import { Card, Container, Row, Col } from "react-bootstrap";

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
    <Container>
      <Row>
        <Col xs={3}>
          <Card style={{ backgroundColor: "transparent" }}>
            <Card.Title className="text-center">{title}</Card.Title>
            <Card.Subtitle>
              <Row>
                <Col>{language}</Col>
                <Col className="text-right">{formattedDate}</Col>
              </Row>
            </Card.Subtitle>
            <Card.Subtitle>{genres.map(genre => genre.name)}</Card.Subtitle>
            <Card.Img src={posterUrl} style={{ width: "35%" }} />
            <Card.Body>
              <Card.Text className="text-center">{tagline}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-center">{rating}</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TitleCard;
