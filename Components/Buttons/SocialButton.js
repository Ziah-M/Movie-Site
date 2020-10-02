import { faShare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'

const Icon = styled(FontAwesomeIcon)`
  font-size: 30px;
`

const SocialButton = () => <Icon icon={faShare} />

export default SocialButton
