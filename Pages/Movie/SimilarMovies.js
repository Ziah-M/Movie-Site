import React from "react";
import { Container } from "react-bootstrap";

const SimilarMovies = ({ similarMovies }) => {
  return (
    <Container>
      <h1>You might also like these similar movies:</h1>
      {similarMovies && similarMovies.title}
    </Container>
  );
};

export default SimilarMovies;
