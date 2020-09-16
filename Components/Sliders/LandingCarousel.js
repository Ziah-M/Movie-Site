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
        <h2 style={{textTransform:'uppercase'}}>{category}</h2>
        <h1>{title}</h1>
        <div id="row">
          <h4>
            {genre} | {rating} Rating
          </h4>
        </div>
      </DetailsOverlay>
    </Wrapper>
  );
};

export default LandingCarousel;
