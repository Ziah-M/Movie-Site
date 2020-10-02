import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'
import { MovieCardSmall } from '../index'

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
`

const MovieSection = styled.div`
  height: auto;
  min-width: 100px;
  width: 13vw;
`

const Title = styled.div`
  color: white;
  opacity: 0.6;
  margin: 5px 0 0 5px;
  font-size: 14px;
  font-weight: 500;
  max-width: 100%;

  @media (max-width: 500px) {
    font-size: 11px;
  }
`

const CastSlider = ({ cast = [] }) => (
  <Wrapper>
    <Slider {...settings}>
      {cast &&
        cast.map((actor, index) => (
          <MovieSection key={`cast-slider-${index}`}>
            <MovieCard>
              <MovieCardSmall
                className="rounded"
                url={actor.profile_path}
                id={actor.id}
                isPerson
              ></MovieCardSmall>
            </MovieCard>
            <Title>{actor.name}</Title>
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
        transform: 'translate(-5vw, -4vw) scale(1.5)',
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
        transform: 'translate(5vw, -4vw) scale(1.5)',
        zIndex: '1000',
      }}
      onClick={onClick}
    />
  )
}

export default CastSlider
