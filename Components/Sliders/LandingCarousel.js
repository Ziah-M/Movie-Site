import React from "react";
import styled from "styled-components";
import { Carousel } from "react-bootstrap";
import { withMovieDetails } from "../../Hocs";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  /* OVERWRITING CAROUSEL INDICATOR STYLING AND POSITIONING */
  & .carousel-indicators {
    position: absolute;
    top: -2%;
    left: 0;

    li {
      margin: 0.1vw;
      width: 33.3vw;
    }

    .active {
      color: skyblue;
      background-color: skyblue;
    }
  }
`;

const DetailsOverlay = styled(Carousel.Caption)`
  /* OVERWRITING CAROUSEL CAPTION POSITONING & STYLING */
  position: absolute;
  left: 5%;
  bottom: 5%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;

const DarkOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  /* Black overlay */
  background: black;
  opacity: 0.4;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Category = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 500;
`;

const SubDetails = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
`;

const LandingCarousel = ({ movies = [] }) => {
  return (
    <Wrapper>
      <Carousel
        interval={4000}
        controls={false}
        style={{ width: "100%", height: "100%" }}
      >
        {movies &&
          movies.map((movie, index) => (
            <Carousel.Item key={`landing-carousel-item-${index}`}>
              <CarouselInner id={movie.id} />
            </Carousel.Item>
          ))}
      </Carousel>
    </Wrapper>
  );
};

const CarouselInnerJSX = ({ movieDetails }) => {
  const { backdrop_path, title, genres = [{ name: "" }], vote_average } =
    movieDetails || {};
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  return (
    <>
      <Image>
        <DarkOverlay />
        <Img src={imageUrl} alt="Movie Poster" />
      </Image>
      <DetailsOverlay>
        <Category>Trending</Category>
        <Title>{title}</Title>
        <SubDetails>
          {genres[0]["name"]} | {vote_average} Rating
        </SubDetails>
      </DetailsOverlay>
    </>
  );
};

const CarouselInner = withMovieDetails(CarouselInnerJSX);

export default LandingCarousel;
