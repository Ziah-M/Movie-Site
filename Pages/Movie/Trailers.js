import React from "react";
import { Row, Container, Col } from "react-bootstrap";

const Trailers = ({ trailers }) => {
  console.log(trailers);
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <h1>Trailers</h1>
        </Col>
      </Row>
      <Row>
        {trailers &&
          trailers
            .filter(item => item.type !== "Trailer" || item.site !== "Youtube")
            .map(
              (trailer, index) =>
                index < 3 && ( // Want max 3 trailers
                  <Col>
                    <h5>{trailer.name}</h5>
                    <iframe
                      width="420"
                      height="315"
                      src={`https://www.youtube.com/embed/${trailer.key}`}
                      style={{ border: "none" }}
                    />
                  </Col>
                )
            )}
      </Row>
    </Container>
  );
};

export default Trailers;
