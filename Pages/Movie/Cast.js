import React from "react";
import CastMemberCard from "./CastMemberCard";
import { Container, Row, Col } from "react-bootstrap";

const Cast = ({ castMembers }) => {
  console.log(castMembers);
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            {castMembers && castMembers.length > 0 ? (
              castMembers.map((castMember, index) =>
                index < 3 ? (
                  <Col xs={3}>
                    <CastMemberCard
                      className="d-flex"
                      castMember={castMember}
                    />
                  </Col>
                ) : (
                  <></>
                )
              )
            ) : (
              <h3 style={{ color: "orange" }}>
                TMDB has no cast members for this movie.
              </h3>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Cast;
