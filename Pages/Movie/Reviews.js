import React from "react";
import {
  Carousel,
  Container as UnstyledContainer,
  Row,
  Col
} from "react-bootstrap";
import styled from "styled-components";

/*
-Popular reviews
-Carousel component (NEW)
-limit to 3 lines
-Click to see full review

*/

const Reviews = ({ reviews }) => {
  console.log(reviews);
  return (
    <Container
      fluid
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h1>Reviews:</h1>
      {reviews && reviews.length > 0 ? (
        <Carousel>
          {reviews.map(review => {
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
      ) : (
        <h3 style={{ color: "orange" }}>TMDB has no reviews for this movie.</h3>
      )}
    </Container>
  );
};

const Container = styled(UnstyledContainer)`
  padding: 0;
  margin: 0;
`;

export default Reviews;
