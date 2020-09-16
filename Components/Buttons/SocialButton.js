import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'

const Icon=styled(FontAwesomeIcon)`
    font-size:30px;
`

const SocialButton = () => {
    return (
        <Icon icon={faShare} />
    )
}

export default SocialButton
