import React from "react";
import { LandingCarousel } from "../../Components";
import { LandingButton } from "../../Components";
import { LandingSlider } from "../../Components";
import { LandingNavbar as Navbar } from "../../Components";
import Footer from "./Footer";
import styled from "styled-components";
import { getCategories } from "../../Data";

const Section = styled.div`
  width: 100vw;

  &#carousel {
    height: 60vh;
  }

  &#navbar {
    height: 50px;
  }

  &#categories {
  
  }

  &#select-category{
    display:flex;
    height:150px;
    justify-content: center;
    align-items: center;
  }
`;

const Category=styled.div`
height: auto;
    padding: 0 10vw 50px 10vw;
`

const CategoryTitle=styled.h2`
  text-transform:uppercase;
`

const Landing = ({ categories = getCategories() }) => {
  return (
    <div>
      <Section id="navbar">
        <Navbar />
      </Section>
      <Section id="carousel">
        <LandingCarousel />
      </Section>
      <Section id="select-category">
        <LandingButton>Movies</LandingButton>
        <LandingButton>TV Shows</LandingButton>
      </Section>
      <Section id="categories">
        {/* MAP with heading for category and data */}
        {categories.map((category) => (
          <Category>
            <CategoryTitle >{category}</CategoryTitle>
            <br />
            <LandingSlider category={category} />
            <br />
            <div id="divider">------</div>
          </Category>
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default Landing;
