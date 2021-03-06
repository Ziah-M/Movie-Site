import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  #trailer-carousel {
    width: 100%;
    height: auto;
    margin: 20px 0;

    max-width: 600px;
    max-height: 600px;
    position: relative;

    .carousel-indicators .active {
      background-color: skyblue;
    }
  }
`

const MovieCard = styled(Carousel.Item)`
  width: 100%;
  height: auto;

  max-width: 600px;
  max-height: 600px;
`

const IFrame = styled.iframe`
  width: 80vw;
  height: 80vw;
  max-width: 600px;
  max-height: 600px;
`

const Title = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const TrailerSlider = ({ trailers = [] }) => (
  <Wrapper>
    <Carousel interval={100000} id="trailer-carousel">
      {trailers &&
        trailers.map((trailer, index) => (
          <MovieCard key={`trailer-item-${index}`}>
            <Title>{trailer.name}</Title>
            <IFrame
              src={`https://www.youtube.com/embed/${trailer.key}`}
              style={{ border: 'none' }}
            />
          </MovieCard>
        ))}
    </Carousel>
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
        transform: 'scale(1.5)',
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

export default TrailerSlider
