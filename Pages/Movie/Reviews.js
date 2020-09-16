import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Panel = styled.div`
  background: #1C262A;
  color: white;
  height: 250px;
  width: 70%;
  padding: 5%;
  margin: 50px 15%;
  border:4px solid transparent;
  border-left:4px solid white;

  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:start;
`;

const Reviews = ({ reviews }) => {
  return (
    <Wrapper>
      <h1>POPULAR REVIEWS</h1>
      {reviews.map((review) => (
        <Panel>
          <h1>NAME.</h1>
          <p>{review}</p>
          <p>See full review -></p>
        </Panel>
      ))}
    </Wrapper>
  );
};

export default Reviews;
