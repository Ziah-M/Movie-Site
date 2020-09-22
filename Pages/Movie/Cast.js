import React from "react";
import styled from "styled-components";
import { CastSlider } from "../../Components";
import { withCredits } from "../../Hocs";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Title = styled.div`
  margin-bottom: 25px;
  font-size: 40px;
  text-transform: uppercase;
`;

const Cast = ({ credits }) => {
  return (
    <Wrapper>
      <Title>CAST</Title>
      <CastSlider cast={credits} />
    </Wrapper>
  );
};

export default withCredits(Cast);
