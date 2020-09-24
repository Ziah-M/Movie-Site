import React from "react";
import styled from "styled-components";
import {
  BackButton,
  LikeButton,
  MovieCardSmall,
  RatingStars,
  SocialButton,
} from "../../Components";
import { numberWithCommas } from "../../Helper";

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
  margin-left: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 500px) {
    transform: scale(0.7);
    margin-left:10px;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
`;

const Position = styled.div`
  height: auto;
  width: auto;
  position: absolute;

  &.tl {
    top: 10vw;
    left: 10vw;
  }

  &.tr {
    top: 10vw;
    right: 10vw;
  }

  &.bl {
    bottom: 10vw;
    left: 10vw;
  }

  &.br {
    bottom: 10vw;
    right: 10vw;
  }
`;

const MovieCard = styled.div`
  min-width: 100px;
  min-height: 150px;
  width: 13vw;
  height: calc(1.5 * 13 vw);
`;

const Title = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const Ratings = styled.div`
  font-size: 18px;
`;

const Released = styled.div`
  font-size: 22px;
  margin: 15px 0;
`;

const Genres = styled.div`
  color: #bfbfbf;
  font-weight: 400;
  font-size: 18px;
`;

const Cover = ({ movie }) => {
  const {
    backdrop_path,
    poster_path,
    title,
    vote_average,
    genres = [],
    release_date,
    revenue = 0,
  } = movie || {};
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  const revenueWithCommas = numberWithCommas(revenue);
  return (
    <Wrapper url={imageUrl}>
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
          <MovieCard>
            <MovieCardSmall url={poster_path} className="rounded" />
          </MovieCard>
          <Details>
            <Title>{title}</Title>
            <Ratings>
              <span>{vote_average}</span>&nbsp;
              <RatingStars rating={vote_average} />
            </Ratings>
            <Released>
              {release_date && release_date.substr(0, 4)} &nbsp;|&nbsp; $
              {revenueWithCommas} <br />
            </Released>
            <Genres>
              {genres.map((genre, index) => (
                <React.Fragment key={`movie-cover-genre${index}`}>
                  {genre["name"]},&nbsp;
                </React.Fragment>
              ))}
            </Genres>
          </Details>
        </Container>
      </Position>
    </Wrapper>
  );
};

export default Cover;
