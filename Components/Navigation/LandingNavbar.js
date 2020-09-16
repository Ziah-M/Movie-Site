import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Navbar = styled.div`
  background: #1c262a;
  height: 100%;
  width: 100%;
  color: white;
`;

const Ul=styled.ul`
height:100%;
width:100%;
display:flex;
justify-content: space-evenly;
align-items: center;
`

const LandingNavbar = () => {
  return (
    <Wrapper>
      <Navbar>
          <Ul>
              <li>Portfolio Home</li>
              <li>Search</li>
              <li>Home</li>
              <li>Profile</li>
              <li>Discover</li>
          </Ul>
      </Navbar>
    </Wrapper>
  );
};

export default LandingNavbar;
