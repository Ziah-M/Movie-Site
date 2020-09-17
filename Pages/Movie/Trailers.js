import React from "react";
import styled from "styled-components";
import {withTrailers} from '../../Hocs'
import {TrailerSlider} from '../../Components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Trailers = ({trailers}) => {
  return <Wrapper>
      <h1>TRAILERS</h1>
      <br />
      {trailers && <TrailerSlider trailers={trailers} />}
  </Wrapper>;
};

export default withTrailers(Trailers);
