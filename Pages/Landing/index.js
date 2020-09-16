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
    height: auto;
    padding: 30px 10vw;
  }
`;

const Landing = ({ categories = getCategories() }) => {
  return (
    <div>
      <Section id="navbar">
        <Navbar />
      </Section>
      <Section id="carousel">
        <LandingCarousel />
      </Section>
      <section id="select-category">
        <LandingButton>Movies</LandingButton>
        <LandingButton>TV Shows</LandingButton>
      </section>
      <Section id="categories">
        {/* MAP with heading for category and data */}
        {categories.map((category) => (
          <>
            <h2 style={{ textTransform: "uppercase" }}>{category}</h2>
            <br />
            <LandingSlider category={category} />
            <br />
            <div id="divider">------</div>
          </>
        ))}
      </Section>
      <Footer />
    </div>
  );
};

export default Landing;
