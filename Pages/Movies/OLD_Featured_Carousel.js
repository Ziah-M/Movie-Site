import React from "react";
import { Carousel, Container, Row, Col, Image } from "react-bootstrap";

const Featured = ({ movies }) => {
  // for carousel
  //     const backgroundStyle = movies
  // ? {
  //   backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" + `https://image.tmdb.org/t/p/w400/${movieDetails.backdrop_path}` + ")",
  //   backgroundRepeat:'no-repeat',
  //   backgroundSize:'100%',
  //   color: 'white',
  //   }
  // : {};

  return (
    <Container fluid className="p-0 m-0">
      <Row noGutters>
        <Col xs={12}>
          <Carousel>
            {movies &&
              movies.map(movie => {
                return (
                  <Carousel.Item>
                    <Image
                      src={`https://image.tmdb.org/t/p/original/${
                        movie.backdrop_path
                      }`}
                      style={{ width: "100%", height: "75vh" }}
                    />
                    <Carousel.Caption className="text-left">
                      <h1>{movie.title}</h1>
                      <i>Trending this week</i>
                    </Carousel.Caption>
                    <Carousel.Caption>
                      Rating: {movie.vote_average}
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Featured;
