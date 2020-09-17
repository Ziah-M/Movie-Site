import React from "react";
import styled from "styled-components";
import { MovieCardSmall as Poster } from "../../Components";
import {withReviews} from '../../Hocs'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Panel = styled.div`
  background: #1c262a;
  color: white;
  height: auto;
  width: 70vw;
  padding: 2vw 4vw 4vw 4vw;
  margin: 50px 0;
  border: 4px solid transparent;

  &.accent-left {
    border-left: 4px solid white;
  }

  &.accent-right {
    border-right: 4px solid white;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: auto;
  width: 100%;
`;

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`;

const Review = styled.div`
  font-size: 18px;
  color: white;
  margin: 30px 0;
  text-transform: none;
`;

const Link = styled.div`
  color: #bfbfbf;
  font-size: 18px;
`;

const Reviews = ({ movieReviews:reviews=[]}) => {
  return (
    <Wrapper>
      <h1>POPULAR REVIEWS</h1>
      {reviews && reviews.map((review, index) => (
        <Panel
          className={`${index % 2 === 1 ? "accent-left" : "accent-right"}`}
        >
          <Container>
            <Name>{review.author}</Name>
            <Review>{review.content.substr(0, 400)}...</Review>
            <Link><a href={review.url}>See full review &nbsp;&nbsp;></a></Link>
          </Container>
        </Panel>
      ))}
    </Wrapper>
  );
};

export default withReviews(Reviews);
