import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import {
  LandingButton,
  LandingCarousel,
  LandingNavbar as Navbar,
  LandingSlider,
} from '../../Components'
import { getCategories } from '../../Data'
import Footer from './Footer'

const Section = styled.div`
  width: 100vw;
  max-width: 100%;
  margin: 0;

  &#carousel {
    height: 60vw;
  }

  &#navbar {
    height: 50px;
  }

  &#categories {
  }

  &#select-category {
    display: flex;
    height: 150px;
    min-height: 150px;
    justify-content: center;
    align-items: center;

    @media (max-width: 450px) {
      height: 100px;
      min-height: 100px;
    }
  }

  & #landing-slider {
    margin-bottom: 20px;
  }
`

const Category = styled.div`
  height: auto;
  padding: 0 10vw 50px 10vw;

  @media (max-width: 450px) {
    padding-bottom: 25px;
  }
`

const CategoryTitle = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 20px;
`

const Divider = styled.div`
  background-image: radial-gradient(
    circle,
    rgba(210, 208, 207, 0.190913) 0%,
    rgba(210, 208, 207, 0) 90%
  );
  height: 2px;
  width: 100%;
`

const Landing = ({
  categories = getCategories(),
  moviesComingSoon,
  moviesTopRated,
  moviesPopular,
  moviesTrending,
  moviesPlayingNow,
}) => {
  const history = useHistory()
  return (
    <div>
      <Section id="navbar">
        <Navbar />
      </Section>
      <Section id="carousel">
        <LandingCarousel movies={moviesTrending} />
      </Section>
      <Section id="select-category">
        <LandingButton onClick={() => history.push('/movieserver')}>
          Movies
        </LandingButton>
        <LandingButton onClick={() => history.push('/movieserver/tv')}>
          TV Shows
        </LandingButton>
      </Section>
      <Section id="categories">
        {moviesPopular && (
          <Category id="popular">
            <CategoryTitle>{categories[1]}</CategoryTitle>
            <LandingSlider movies={moviesPopular} />
            <Divider />
          </Category>
        )}

        {moviesPlayingNow && (
          <Category id="now-playing">
            <CategoryTitle>{categories[2]}</CategoryTitle>
            <LandingSlider movies={moviesPlayingNow} />
            <Divider />
          </Category>
        )}

        {moviesComingSoon && (
          <Category id="upcoming">
            <CategoryTitle>{categories[0]}</CategoryTitle>
            <LandingSlider movies={moviesComingSoon} />
            <Divider />
          </Category>
        )}

        {moviesTopRated && (
          <Category id="top-rated">
            <CategoryTitle>{categories[3]}</CategoryTitle>
            <LandingSlider movies={moviesTopRated} />
            <Divider />
          </Category>
        )}
      </Section>
      <Footer />
    </div>
  )
}

export default Landing
