import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const CastMemberCard = ({
  castMember: { character, name, profile_path: photo }
}) => {
  const photoUrl = `https://image.tmdb.org/t/p/w200/${photo}`;

  // fallback image in case there is no profile pic for an actor
  const defaultPhotoUrl =
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kU3B75TyRiCgE270EyZnHjfivoq.jpg";
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ background: "transparent" }}>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{character}</Card.Subtitle>
            <Card.Body>
              {photo ? (
                <Card.Img src={photoUrl} alt={`${name} Profile Pic`} />
              ) : (
                <Card.Img src={defaultPhotoUrl} alt={`Default Profile Pic`} />
              )}
            </Card.Body>
            <Card />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CastMemberCard;
