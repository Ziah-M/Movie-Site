import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
`;
const Summary = ({ summary }) => {
  return (
    <Wrapper>
      <h1>SUMMARY</h1>
      <p>{summary}</p>
    </Wrapper>
  );
};

export default Summary;
