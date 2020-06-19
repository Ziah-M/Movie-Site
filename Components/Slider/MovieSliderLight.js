import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieCard from "../../Pages/Movies/MovieCard";
import Slider from "react-slick";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const theme = {
  borderColors: "",
  textColor: "",
  arrowColors: ""
};

const MovieSlider = ({ movies, title, handleGoToMovie }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false
  };

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };

  const prev = () => {
    sliderRef.slickPrev();
  };

  return (
    <>
      <Container fluid className="p-0">
        <Row noGutters>
          <Col xs={4}>
            <SideContainer fluid>
              <Col xs={3} style={{ borderTop: "1px solid gray" }} />
              <Row>
                <h2 style={{ color: "darkslategray" }}>{title}</h2>
              </Row>
              <Row noGutters>
                <Col xs={2}>
                  <ArrowContainer onClick={prev}>
                    <Icon icon={faArrowLeft} />
                  </ArrowContainer>
                </Col>
                <Col xs={2}>
                  <ArrowContainer onClick={next}>
                    <Icon icon={faArrowRight} />
                  </ArrowContainer>
                </Col>
              </Row>
              <Row
                style={{
                  color: "darkslategray",
                  borderTop: "1px solid grey",
                  padding: "15px 0 0 0"
                }}
              >
                VIEW ALL >
              </Row>
            </SideContainer>
          </Col>
          <Col>
            {movies && (
              <Slider ref={c => (sliderRef = c)} {...settings}>
                {movies.map(movie => (
                  <Col className="p-2">
                    <MovieCard
                      movie={movie}
                      handleGoToMovie={handleGoToMovie}
                    />
                  </Col>
                ))}
              </Slider>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

const Icon = styled(FontAwesomeIcon)`
  color: lightgray;
  &:hover {
    color: slategray;
  }
`;

const ArrowContainer = styled(Container)`
  border: 2px solid lightgray;
  border-radius: 50%;
  padding: 10px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid slategray;
  }
`;

const SideContainer = styled(Container)`
  height: 100%;
  padding: 8%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default MovieSlider;
