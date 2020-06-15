import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const CastMemberCard = ({
  castMember: { character, name, profile_path: photo }
}) => {
  const photoUrl = `https://image.tmdb.org/t/p/w200/${photo}`;

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ background: "transparent" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{character}</Card.Subtitle>
            <Card.Body>
              <Card.Img src={photoUrl} />
            </Card.Body>
            <Card />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CastMemberCard;
