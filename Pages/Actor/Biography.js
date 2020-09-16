import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  text-transform: none;
  font-size: 18px;
`;
const Biography = ({ biography }) => {
  return (
    <Wrapper>
      <h1>BIOGRAPHY</h1>
      <p>{biography.substr(0, 750)}...</p>
    </Wrapper>
  );
};

export default Biography;
