import React from "react";
import { Container, Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import Slider from "../../Components/Slider";

const MovieSlider = ({ movies, title, baseStyle, handleGoToMovie, width }) => {
  return (
    <Container fluid>
      <Row>
        <h1>{title}</h1>
        {movies && (
          <Slider
            itemProps={() => ({ handleGoToMovie })}
            scale={true}
            backgroundColor={baseStyle.backgroundColor}
            items={movies}
            spaceBetween={1}
            itemsPerSlide={width / 250}
            navPadding={80}
            renderItem={({
              item: movie,
              index,
              updateActive,
              removeActive,
              itemProps
            }) => (
              <MovieCard
                movie={movie}
                itemProps={itemProps}
                onMouseEnter={updateActive}
                onMouseLeave={removeActive}
                handleGoToMovie={handleGoToMovie}
              />
            )}
          />
        )}
      </Row>
    </Container>
  );
};

export default MovieSlider;
