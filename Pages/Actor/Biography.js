import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
`;
const Biography = ({ biography }) => {
  return (
    <Wrapper>
      <h1>BIOGRAPHY</h1>
      <p>{biography}</p>
    </Wrapper>
  );
};

export default Biography;
