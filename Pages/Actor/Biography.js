import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  text-transform: none;
  font-size: 18px;
`;

const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`;

const Biography = ({ biography }) => {
  return (
    <Wrapper>
      <Title>BIOGRAPHY</Title>
      <p>{biography.substr(0, 750)}...</p>
    </Wrapper>
  );
};

export default Biography;
