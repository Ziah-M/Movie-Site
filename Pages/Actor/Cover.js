import React from "react";
import styled from "styled-components";
import { BackButton, MovieCardSmall, SocialButton } from "../../Components";

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

const Released = styled.div`
  font-size: 22px;
  margin: 15px 0;
`;

const Genres = styled.div`
  color: #bfbfbf;
  font-weight: 500;
  font-size: 18px;
`;

const Cover = ({ actor, backdrop_path }) => {
  const {
    name,
    rating,
    gender:genderString,
    known_for_department,
    birthday,
    profile_path,
  } = actor;

  const year = new Date().getFullYear();
  const age =
    year - parseInt(birthday && birthday.substr(0, 4)) || "Age not found";

  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;

  return (
    <Wrapper url={imageUrl}>
      <Overlay />
      <Position className="tl">
        <BackButton />
      </Position>
      <Position className="tr">
        <SocialButton />
      </Position>
      <Position className="bl">
        <Container>
          <MovieCard>
            <MovieCardSmall className="rounded" url={profile_path} />
          </MovieCard>
          <Details>
            <Title>{name}</Title>
            <Released>
              {genderString} &nbsp;|&nbsp; {known_for_department}
            </Released>
            <Genres>
              {birthday} &nbsp;&nbsp;| &nbsp;&nbsp;{age}
            </Genres>
          </Details>
        </Container>
      </Position>
    </Wrapper>
  );
};

export default Cover;
