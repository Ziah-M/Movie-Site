import React from "react";
import * as P from "./Pages";
import styled from "styled-components";

const DefaultStyles = styled.div`
  background: #eb4e7a;
  color: white;
  text-transform: capitalize;
  user-select: none;
`;

const Wrapper = styled.div`
  background: linear-gradient(165deg, #251431 0%, #161130 22%);
`;

const App = () => {
  return (
    <DefaultStyles>
      <Wrapper>
        <P.Landing />
        <P.Movie />
        <P.Actor />
      </Wrapper>
    </DefaultStyles>
  );
};

export default App;
