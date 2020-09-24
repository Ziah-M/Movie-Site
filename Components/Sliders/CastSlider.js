import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { MovieCardSmall } from "../index";

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 5,
  slidesToScroll: 3,
  pauseOnHover: true,
  centerMode: true,
  centerPadding: "2vw",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 5,
      },
    },
  ],
};

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const MovieCard = styled.div`
  position: relative;

  /* aspect ratio of card */
  width: 13vw;
  height: calc(1.5 * 13 vw);
`;

const Overlay = styled.div`
  position: absolute;
  top: 5%;
  left: 0;
`;

const MovieSection = styled.div`
  height: auto;
  width: 13vw;
`;

const Title = styled.div`
  color: white;
  opacity: 0.6;
  margin: 5px 0 0 5px;
  font-size: 14px;
  font-weight: 500;
  max-width: 100%;

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

const CastSlider = ({ cast = [] }) => {
  return (
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
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        transform: "translate(-5vw, -4vw) scale(1.5)",
        zIndex: "1000",
        color: "transparent",
        background: "transparent",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        transform: "translate(5vw, -4vw) scale(1.5)",
        zIndex: "1000",
      }}
      onClick={onClick}
    />
  );
}

export default CastSlider;
