import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 35vw;
  height: 5vw;
  min-height: 50px;
  background: linear-gradient(
      90deg,
      rgba(255, 86, 132, 0.4) 0%,
      rgba(83, 50, 201, 0.4) 68%
    ),
    linear-gradient(
      90deg,
      rgba(255, 86, 132, 0.4) 0%,
      rgba(83, 50, 201, 0.4) 68%
    );
  /* border-left:3px solid rgba(255, 86, 132, 0.4); */
  /* border-right:3px solid rgba(83, 50, 201, 0.4); */
  border-radius: 10px;
  display: inline-block;
  padding: 3px;
  margin: 0 10px;
`;

const Button = styled.button`
  background: linear-gradient(165deg, #251431 0%, #161130 22%);
  border: none;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  color: white;
  outline: none !important;

  &:hover {
    background: #deb150;
    color: black;
  }
`;

const BorderWrap = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 5px;

  background: #eb4e7a;
`;

const LandingButton = ({ children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <BorderWrap>
        <Button>{children}</Button>
      </BorderWrap>
    </Wrapper>
  );
};

export default LandingButton;
