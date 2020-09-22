import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { LandingButton, LandingCarousel, LandingNavbar as Navbar, LandingSlider } from "../../Components";
import { getCategories } from "../../Data";
import { withFetchTv } from "../../Hocs";
import Footer from "../Landing/Footer";

const Section = styled.div`
  width: 100vw;

  &#carousel {
    height: 60vw;
  }

  &#navbar {
    height: 50px;
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
  tvAiringToday,
  tvOnTheAir,
  tvPopular,
  tvTopRated,
}) => {
  const history = useHistory();
  return (
    <div>
      <Section id="navbar">
        <Navbar />
      </Section>
      <Section id="carousel">
        <LandingCarousel movies={tvPopular} />
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

        {tvAiringToday && (
          <Category id="today">
            <CategoryTitle>TV Airing Today</CategoryTitle>
            <br />
            <LandingSlider movies={tvAiringToday} isTv />
            <br />
            <Divider />
          </Category>
        )}
        {tvPopular && (
          <Category id="popular">
            <CategoryTitle>{categories[1]}</CategoryTitle>
            <br />
            <LandingSlider movies={tvPopular} isTv />
            <br />
            <Divider />
          </Category>
        )}

        {tvOnTheAir && (
          <Category id="on-the-air">
            <CategoryTitle>TV aired this week</CategoryTitle>
            <br />
            <LandingSlider movies={tvOnTheAir} isTv />
            <br />
            <Divider />
          </Category>
        )}

        {tvTopRated && (
          <Category id="top-rated">
            <CategoryTitle>{categories[3]}</CategoryTitle>
            <br />
            <LandingSlider movies={tvTopRated} isTv />
            <br />
            <Divider />
          </Category>
        )}
      </Section>
      <Footer />
    </div>
  );
};

export default withFetchTv(Landing);
