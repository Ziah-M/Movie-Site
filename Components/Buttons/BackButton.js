import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'

const Icon=styled(FontAwesomeIcon)`
    font-size:30px;
`

const BackButton = () => {
    return (
        <Icon icon={faChevronLeft}/>
    )
}

export default BackButton
