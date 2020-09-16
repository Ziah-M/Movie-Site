import React from "react";
import styled from "styled-components";
import { getDefault } from "../../Data";

// POSTER ASPECT RATIO = Height = 1.5 x Width

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  &.rounded{
    * {
      border-radius:5px;
    }
  }
`;

const Img=styled.img`
  width:100%;
  height:100%;
`

const MovieCardSmall = ({
  url = getDefault().movie.imgPosterSmall,
  children,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <Img src={url} />
      {children}
    </Wrapper>
  );
};

export default MovieCardSmall;
