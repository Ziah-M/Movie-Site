import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

// POSTER ASPECT RATIO = Height = 1.5 x Width

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid skyblue;
  }

  &.rounded {
    * {
      border-radius: 5px;
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const MovieCardSmall = ({
  url = "",
  children,
  className,
  isTv,
  isMovie,
  isPerson,
  id,
}) => {
  const imageUrl = url
    ? `https://image.tmdb.org/t/p/original${url}`
    : // PROFILE PICTURE NOT FOUND IMAGE
      "https://i.imgur.com/dnj1Cko.png";

  const history = useHistory();

  const handleClick = () => {
    if (isMovie) {
      history.push(`/movieserver/movie/${id}`);
    }

    if (isTv) {
      history.push(`/movieserver/tv/details/${id}`);
    }

    if (isPerson) {
      history.push(`/movieserver/actor/${id}`);
    }
  };

  return (
    <Wrapper className={className} onClick={() => handleClick()}>
      <Img src={imageUrl} />
      {children}
    </Wrapper>
  );
};

export default MovieCardSmall;
