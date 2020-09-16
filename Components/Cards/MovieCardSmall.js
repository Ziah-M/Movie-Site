import React from "react";
import styled from "styled-components";
import { getDefault } from "../../Data";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Img=styled.img`
  width:100%;
  height:100%;
`

const MovieCardSmall = ({
  url = getDefault().movie.imgPosterSmall,
  children,
}) => {
  return (
    <Wrapper>
      <Img src={url} />
      {children}
    </Wrapper>
  );
};

export default MovieCardSmall;
