import React from 'react'
import styled from 'styled-components'
import { withReviews } from '../../Hocs'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Panel = styled.div`
  background: #1c262a;
  color: white;
  height: auto;
  width: 100%;
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
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  height: auto;
  width: 100%;
`

const Name = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
`

const Review = styled.div`
  font-size: 18px;
  max-width: 100%;
  color: white;
  height: auto;
  text-transform: none;
  overflow-x: hidden;
  overflow-y: visible;

  padding: 30px 0;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const LinkContainer = styled.div`
  color: #bfbfbf;
  font-size: 18px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`

const Reviews = ({
  movieReviews: reviews = [
    {
      author: '',
      url: '',
      content: 'No reviews for this movie have been posted yet.',
    },
  ],
}) => {
  if (!reviews) {
    reviews = [
      {
        author: '',
        url: '',
        content: 'No reviews for this movie have been posted yet.',
      },
    ]
  }
  return (
    <Wrapper>
      <Title>POPULAR REVIEWS</Title>
      {reviews &&
        reviews.map((review, index) => (
          <Panel
            key={`review-panel-${index}`}
            className={`${index % 2 === 1 ? 'accent-left' : 'accent-right'}`}
          >
            <Container>
              <Name>{review.author}</Name>
              <Review>{review.content.substr(0, 400)}...</Review>
              <LinkContainer>
                <Link to={review.url}>See full review &nbsp;&nbsp;</Link>
              </LinkContainer>
            </Container>
          </Panel>
        ))}
    </Wrapper>
  )
}

export default withReviews(Reviews)
