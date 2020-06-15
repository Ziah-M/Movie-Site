import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import MovieCard from "./MovieCard";

/*

PROBLEM: Carousel isn't appropriate for the data I want to display
I need a slider component

*/

const MovieCarousel = ({ movies, headline = "" }) => {
  return (
    <Container>
      <h4>{headline.toUpperCase()}</h4>

      {movies && (
        <Carousel>
          {movies.map(movie => (
            <Carousel.Item>
              <MovieCard movie={movie} />
            </Carousel.Item>
          ))}
        </Carousel>
      )}
    </Container>
  );
};

export default MovieCarousel;
