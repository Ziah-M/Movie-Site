import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

const DetailsOverlay = styled.div`
  position: absolute;
  left: 5%;
  bottom: 5%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
`;

const DarkOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  /* Black overlay */
  background: black;
  opacity: 0.4;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Category = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
`;

const Title = styled.h1`
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 500;
`;

const SubDetails = styled.h3`
  text-transform: capitalize;
  font-size: 18px;
`;

const LandingCarousel = ({
  url = "https://www.turnerpublishing.net/news/wp-content/uploads/2020/09/tenet-11-700x364.jpg",
  category = "latest",
  title = "Tenet",
  genre = "Action",
  rating = 6,
}) => {
  return (
    <Wrapper>
      <Image>
        <DarkOverlay />
        <Img src={url} alt="Movie Poster" />
      </Image>
      <DetailsOverlay>
        <Category>{category}</Category>
        <Title>{title}</Title>
        <SubDetails>
          {genre} | {rating} Rating
        </SubDetails>
      </DetailsOverlay>
    </Wrapper>
  );
};

export default LandingCarousel;
