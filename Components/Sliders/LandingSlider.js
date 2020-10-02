import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { withMovieDetails } from '../../Hocs'
import { MovieCardSmall, MovieRatingOverlay } from '../index'

const settings = {
  className: 'center',
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  centrePadding: '10px',
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 4,
      },
    },
  ],
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const MovieCard = styled.div`
  position: relative;

  /* aspect ratio of card */
  min-width: 100px;
  min-height: 150px;
  width: 13vw;
  height: calc(1.5 * 13 vw);

  max-width: 300px;
  max-height: 300px * 1.5;
`

const Overlay = styled.div`
  position: absolute;
  top: 5%;
  left: 0;

  @media (max-width: 450px) {
    transform: scale(0.7) translate(-15%);
  }
`

const MovieSection = styled.div`
  height: auto;
  min-width: 100px;
  width: 13vw;
`

const Title = styled.div`
  color: white;
  opacity: 0.6;
  margin: 5px 0;
  font-size: 16px;
  font-weight: 500;
  max-width: 100%;

  @media (max-width: 450px) {
    font-size: 11px;
  }
`

const GenresWrapper = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 12px;
  @media (max-width: 450px) {
    font-size: 10px;
  }
  max-width: 10vw;
`

const LandingSlider = ({ movies, isTv = false }) => (
  <Wrapper id="landing-slider">
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
)

function NextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        transform: 'translate(-5vw, -8vh) scale(1.5)',
        zIndex: '1000',
        color: 'transparent',
        background: 'transparent',
      }}
      onClick={onClick}
    />
  )
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'transparent',
        transform: 'translate(5vw, -8vh) scale(1.5)',
        zIndex: '1000',
      }}
      onClick={onClick}
    />
  )
}

const Genres = ({ movieDetails = null }) => (
  <GenresWrapper>
    {movieDetails &&
      movieDetails.genres &&
      movieDetails.genres[0] &&
      movieDetails.genres[0].name}
  </GenresWrapper>
)

const FetchedGenres = withMovieDetails(Genres)

export default LandingSlider
