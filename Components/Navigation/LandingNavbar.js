import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Ul = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & * {
    color: white;
  }
`;

const LandingNavbar = () => {
  return (
    <Wrapper>
      <Navbar>
        <Ul>
          <Link to="/">Portfolio Home</Link>
          <Link to="/movieserver/movie/577922">Search</Link>
          <Link to="/movieserver">Home</Link>
          <Link to="/movieserver/actor/287">Profile</Link>
          <Link to="/movieserver/movie/577922">Discover</Link>
        </Ul>
      </Navbar>
    </Wrapper>
  );
};

export default LandingNavbar;
