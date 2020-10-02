import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
  &:hover {
    color: skyblue;
  }
`

const BackButton = () => {
  const history = useHistory()
  return (
    <Icon icon={faChevronLeft} onClick={() => history.push('/movieserver')} />
  )
}

export default BackButton
