import React from "react";
import CastMemberCard from "./CastMemberCard";
import { Container, Row, Col } from "react-bootstrap";

const Cast = ({ castMembers }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Row>
            {castMembers &&
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
              )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Cast;
