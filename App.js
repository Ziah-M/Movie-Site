import React from "react";
import Landing from "./Pages/Landing";
import styled from "styled-components";

const theme = {};

const App = () => {
  return (
    //TODO -- maxWidth is a temporary fix to width overflowing the viewport
    <GlobalStyles style={{ maxWidth: "98.7vw", overflow: "hidden" }}>
      <Landing />
    </GlobalStyles>
  );
};

const GlobalStyles = styled.div`
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  margin: 0;
  background-image: url(https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
`;

export default App;
