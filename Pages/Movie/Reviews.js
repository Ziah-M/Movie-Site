import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";

/*
-Popular reviews
-Carousel component (NEW)
-limit to 3 lines
-Click to see full review

*/

const Reviews = ({ reviews }) => {
  return (
    <Container>
      <h1>Reviews:</h1>
      <Carousel>
        {reviews &&
          reviews.map(review => {
            return (
              <Carousel.Item>
                <Row>
                  <Col xs={9}>{review.content}</Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <h5>~{review.author}</h5>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <a href={review.url}>Read full review on TMDB</a>
                  </Col>
                </Row>
              </Carousel.Item>
            );
          })}
      </Carousel>
    </Container>
  );
};

export default Reviews;
