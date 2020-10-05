import React, { useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { routeMovieSite } from '../../../../private'

const MovieCardSmall = ({
  url = '',
  children,
  className,
  isTv,
  isMovie,
  isPerson,
  id,
}) => {
  const [mouseXStart, setMouseXStart] = useState(null)

  const imageUrl = url
    ? `https://image.tmdb.org/t/p/w185${url}`
    : // PROFILE PICTURE NOT FOUND IMAGE
      'https://i.imgur.com/dnj1Cko.png'

  const history = useHistory()

  const handleMouseDown = (event) => {
    setMouseXStart(event.clientX)
  }

  const handleMouseUp = (event) => {
    if (
      event.clientX >= mouseXStart - 20 &&
      event.clientX <= mouseXStart + 20
    ) {
      triggerRouting()
    }
  }

  const triggerRouting = () => {
    if (isMovie) {
      history.push(`/${routeMovieSite}/movie/${id}`)
    }

    if (isTv) {
      history.push(`/${routeMovieSite}/tv/details/${id}`)
    }

    if (isPerson) {
      history.push(`/${routeMovieSite}/actor/${id}`)
    }
  }

  return (
    <Wrapper
      className={className}
      onMouseDown={(event) => handleMouseDown(event)}
      onMouseUp={(event) => handleMouseUp(event)}
    >
      <Img src={imageUrl} />
      {children}
    </Wrapper>
  )
}

// POSTER ASPECT RATIO = Height = 1.5 x Width

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid skyblue;
  }

  &.rounded {
    * {
      border-radius: 5px;
    }
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

export default MovieCardSmall
