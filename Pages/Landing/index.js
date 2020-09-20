import React from "react";
import { LandingCarousel } from "../../Components";
import { LandingButton } from "../../Components";
import { LandingSlider } from "../../Components";
import { LandingNavbar as Navbar } from "../../Components";
import Footer from "./Footer";
import styled from "styled-components";
import { getCategories } from "../../Data";
import { withFetchMovies } from "../../Hocs";
import { useHistory } from "react-router-dom";

const Section = styled.div`
  width: 100vw;

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
  }
`;

const Category = styled.div`
  height: auto;
  padding: 0 10vw 50px 10vw;
`;

const CategoryTitle = styled.h2`
  font-size: 40px;
  text-transform: uppercase;
`;

const Divider = styled.div`
  background-image: radial-gradient(
    circle,
    rgba(210, 208, 207, 0.190913) 0%,
    rgba(210, 208, 207, 0) 90%
  );
  height: 2px;
  width: 100%;
`;

const Landing = ({
  categories = getCategories(),
  moviesComingSoon,
  moviesTopRated,
  moviesPopular,
  moviesTrending,
  moviesPlayingNow,
}) => {
  const history = useHistory();
  return (
    <div>
      <Section id="navbar">
        <Navbar />
      </Section>
      <Section id="carousel">
        <LandingCarousel movies={moviesTrending} />
      </Section>
      <Section id="select-category">
        <LandingButton onClick={() => history.push("/movieserver")}>
          Movies
        </LandingButton>
        <LandingButton onClick={() => history.push("/movieserver/tv")}>
          TV Shows
        </LandingButton>
      </Section>
      <Section id="categories">
        {/* MAP with heading for category and data */}

        {moviesComingSoon && (
          <Category id="upcoming">
            <CategoryTitle>{categories[0]}</CategoryTitle>
            <br />
            <LandingSlider movies={moviesComingSoon} />
            <br />
            <Divider />
          </Category>
        )}
        {moviesPopular && (
          <Category id="popular">
            <CategoryTitle>{categories[1]}</CategoryTitle>
            <br />
            <LandingSlider movies={moviesPopular} />
            <br />
            <Divider />
          </Category>
        )}

        {moviesPlayingNow && (
          <Category id="now-playing">
            <CategoryTitle>{categories[2]}</CategoryTitle>
            <br />
            <LandingSlider movies={moviesPlayingNow} />
            <br />
            <Divider />
          </Category>
        )}

        {moviesTopRated && (
          <Category id="top-rated">
            <CategoryTitle>{categories[3]}</CategoryTitle>
            <br />
            <LandingSlider movies={moviesTopRated} />
            <br />
            <Divider />
          </Category>
        )}
      </Section>
      <Footer />
    </div>
  );
};

export default Landing;
