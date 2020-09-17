import React from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & ${Carousel} {
    width: 50vw;
    height: 50vw;

    max-width: 1000px;
  max-height: 1000px;

    .carousel-indicators .active {
      background-color: skyblue;
    }
  }
`;

const MovieCard = styled(Carousel.Item)`
  width: 50vw;
  height: 50vw;

  max-width: 1000px;
  max-height: 1000px;
`;

const IFrame = styled.iframe`
  width: 50vw;
  height: 50vw;
  max-width: 1000px;
  max-height: 1000px;
`;

const TrailerSlider = ({ trailers = [] }) => {
  return (
    <Wrapper>
      <Carousel interval={0}>
        {trailers &&
          trailers.map((trailer, index) => (
            <MovieCard key={`trailer-item-${index}`}>
              <h5 style={{ textAlign: "center", width: "100%" }}>
                {trailer.name}
              </h5>
              <IFrame
                src={`https://www.youtube.com/embed/${trailer.key}`}
                style={{ border: "none" }}
              />
            </MovieCard>
          ))}
      </Carousel>
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

export default TrailerSlider;
