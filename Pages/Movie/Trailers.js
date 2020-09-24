import React from "react";
import styled from "styled-components";
import { TrailerSlider } from "../../Components";
import { withTrailers } from "../../Hocs";

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  font-size: 40px;
  text-transform: uppercase;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.div`
  font-size: 40px;
  font-weight: 600;
  width: 100%;
`;

const TrailersContainer=styled.div`
width:100%;
height:auto;
`

const Trailers = ({ trailers }) => {
  return (
    <Wrapper>
      <Heading>TRAILERS</Heading>
      <TrailersContainer>
        {trailers && <TrailerSlider trailers={trailers} />}
      </TrailersContainer>
    </Wrapper>
  );
};

export default withTrailers(Trailers);
