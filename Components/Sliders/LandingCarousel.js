import React from 'react'
import { Carousel } from 'react-bootstrap'
import styled from 'styled-components'
import { withMovieDetails } from '../../Hocs'

const LandingCarousel = ({ movies = [] }) => (
  <Wrapper>
    <Carousel
      interval={4000}
      controls={false}
      style={{ width: '100%', height: '100%' }}
    >
      {movies &&
        movies.map(
          (movie, index) =>
            index < 3 &&
            movie.backdrop_path && (
              <Carousel.Item key={`landing-carousel-item-${index}`}>
                <CarouselInner id={movie.id} />
              </Carousel.Item>
            ),
        )}
    </Carousel>
  </Wrapper>
)

const CarouselInnerJSX = ({ movieDetails }) => {
  const { backdrop_path, title, name, genres = [{ name: '' }], vote_average } =
    movieDetails || {}
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`
  return (
    <>
      <Image>
        <DarkOverlay />
        <Img src={imageUrl} alt="Movie Poster" />
      </Image>
      <DetailsOverlay>
        <Category>Trending</Category>
        <Title>{title || name}</Title>
        <SubDetails>
          {genres[0] && genres[0].name} | {vote_average} Rating
        </SubDetails>
      </DetailsOverlay>
    </>
  )
}

const CarouselInner = withMovieDetails(CarouselInnerJSX)

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  /* OVERWRITING CAROUSEL INDICATOR STYLING AND POSITIONING */
  & .carousel-indicators {
    li {
      margin: 0 0.1vw;
      width: 33.3vw;
    }

    .active {
      color: skyblue;
      background-color: skyblue;
    }
  }
`

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
`

const DarkOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  /* Black overlay */
  background: black;
  opacity: 0.4;
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Category = styled.h2`
  text-transform: uppercase;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 500;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const SubDetails = styled.h3`
  text-transform: capitalize;
  font-size: 18px;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`

export default LandingCarousel
