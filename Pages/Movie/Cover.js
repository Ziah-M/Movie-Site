import React from "react";
import styled from "styled-components";
import {
  BackButton,
  SocialButton,
  LikeButton,
  MovieCardSmall,
  RatingStars,
} from "../../Components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.url});
  background-size: 100% 100%;
  position: relative;
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background: black;
  opacity: 0.4;
  position: absolute;
  top: 0;
  left: 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
`;

const Position = styled.div`
  height: auto;
  width: auto;
  position: absolute;

  &.tl {
    top: 5vw;
    left: 5vw;
  }

  &.tr {
    top: 5vw;
    right: 5vw;
  }

  &.bl {
    bottom: 5vw;
    left: 5vw;
  }

  &.br {
    bottom: 5vw;
    right: 5vw;
  }
`;

const Cover = ({ movie }) => {
  const { imgPosterLarge, title, rating, genres } = movie;
  return (
    <Wrapper url={imgPosterLarge}>
      <Overlay />
      <Position className="tl">
        <BackButton />
      </Position>
      <Position className="tr">
        <SocialButton />
      </Position>
      <Position className="br">
        <LikeButton />
      </Position>
      <Position className="bl">
        <Container>
          <MovieCardSmall />
          <Details>
            <h1>{title}</h1>
            {rating} <RatingStars rating={rating} />
            Released | EN <br/>
            {genres[0]}
          </Details>
        </Container>
      </Position>
    </Wrapper>
  );
};

export default Cover;
