import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: inline;
`

const Star = ({ isRated = false }) => (
  <StyledStar icon={faStar} className={`${isRated ? 'is-rated' : ''}`} />
)

const StyledStar = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: white;
  &.is-rated {
    color: #24baef;
  }
`

const RatingStars = ({ rating = 1 }) => (
  <Wrapper>
    {[...Array(5)].map((item, index) => (
      <Star key={`star-key-${index}`} isRated={index + 1 <= rating / 2 + 0.4} />
    ))}
  </Wrapper>
)

export default RatingStars
