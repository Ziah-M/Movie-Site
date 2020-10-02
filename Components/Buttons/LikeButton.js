import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  &:hover {
    color: #ff6666;
  }
`

const LikeButton = () => <Icon icon={faHeart} />

export default LikeButton
