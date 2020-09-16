import React from "react";
import {LandingCarousel} from "../../Components";
import {LandingButton} from "../../Components";
import {LandingSlider} from "../../Components";
import {LandingNavbar as Navbar} from "../../Components";
import Footer from "./Footer";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <LandingCarousel />
      <section id="select-category">
        <LandingButton>Movies</LandingButton>
        <LandingButton>TV Shows</LandingButton>
      </section>
      <section id="categories">
        {/* MAP with heading for category and data */}
        <h2>Upcoming</h2>
        <br />
        <LandingSlider />
        <br />
        <div id="divider">------</div>
      </section>
      <Footer />
    </div>
  );
};

export default Landing;
