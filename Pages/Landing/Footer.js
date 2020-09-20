import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  return (
    <Wrapper>
      <ColLeft></ColLeft>
      <ColRight>
        <TmdbLogo />
        <SocialButtons>T, F, G</SocialButtons>
      </ColRight>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 90vh;

  background: black;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ColLeft = styled.div``;

const ColRight = styled.div`
  width: 150px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TmdbLogo = styled.img`
  width: 100%;
  height: 50px;
`;

const SocialButtons = styled.div``;

export default Footer;
