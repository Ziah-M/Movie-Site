import React from "react";
import { MovieCardSmall, MovieRatingOverlay } from "../index";
import styled from "styled-components";
import { getDefault } from "../../Data";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { withMovieDetails } from "../../Hocs";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 3,
  pauseOnHover: true,
  centrePadding: "2vw",
  centerMode: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const MovieCard = styled.div`
  position: relative;

  /* aspect ratio of card */
  width: 13vw;
  height: calc(1.5 * 13 vw);

  max-width: 300px;
  max-height: 300px * 1.5;
`;

const Overlay = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
`;

const MovieSection = styled.div`
  height: auto;
  width: 13vw;
`;

const Title = styled.div`
  color: white;
  opacity: 0.6;
  margin: 5px 0;
  font-size: 16px;
  font-weight: 500;
  max-width: 10vw;
`;

const GenresWrapper = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 12px;
  max-width: 10vw;
`;

const LandingSlider = ({ movies, isTv = false }) => {
  return (
    <Wrapper>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <MovieSection key={`landing-slider-${index}`}>
            <MovieCard>
              <Overlay>
                <MovieRatingOverlay rating={movie.vote_average} />
              </Overlay>
              <MovieCardSmall
                className="rounded"
                url={movie.poster_path}
                id={movie.id}
                isMovie={!isTv}
                isTv={isTv}
              ></MovieCardSmall>
            </MovieCard>
            <Title>{movie.title}</Title>
            <FetchedGenres id={movie.id} isTv={isTv}></FetchedGenres>
          </MovieSection>
        ))}
      </Slider>
    </Wrapper>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(-5vw, -4vw) scale(1.5)",
        zIndex: "1000",
        color: "transparent",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        transform: "translate(5vw, -4vw) scale(1.5)",
        zIndex: "1000",
      }}
      onClick={onClick}
    />
  );
}

const Genres = ({ movieDetails = null }) => {
  return (
    <GenresWrapper>
      {movieDetails &&
        movieDetails.genres &&
        movieDetails.genres[0] &&
        movieDetails.genres[0].name}
    </GenresWrapper>
  );
};

const FetchedGenres = withMovieDetails(Genres);

export default LandingSlider;
