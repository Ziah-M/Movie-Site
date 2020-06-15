import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";

// TODO - might want to use a bootstrap badge instead of my custom built rating overlay

const styleMovieCard = {
  height: "200px",
  // fontSize: "10px",
  position: "relative",
  cursor: "pointer",
  userSelect: "none"
};

const MovieCard = ({
  itemProps,
  movie: {
    title,
    original_language: genre,
    vote_average: rating,
    poster_path: poster,
    id
  }
}) => {
  poster = `https://image.tmdb.org/t/p/original/${poster}`;
  return (
    <Container
      className="p-0"
      fluid
      style={styleMovieCard}
      onClick={() => itemProps().handleGoToMovie(id)}
    >
      <Row noGutters>
        <Col xs={12}>
          <Image
            fluid
            src={poster}
            alt={title}
            style={{ borderRadius: "10px" }}
          />
          <div
            id="Rating overlay"
            className="text-center"
            style={{
              backgroundColor: "black",
              opacity: "0.8",
              position: "absolute",
              top: ".8rem",
              left: "0px",
              color: "white",
              width: "45px"
            }}
          >
            {rating}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieCard;
