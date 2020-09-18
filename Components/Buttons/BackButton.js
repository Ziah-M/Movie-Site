import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styled from 'styled-components'
import {useHistory} from 'react-router'

const Icon=styled(FontAwesomeIcon)`
    font-size:30px;
    &:hover{
        color:skyblue;
    }
`

const BackButton = () => {
    const history=useHistory()
    return (
        <Icon icon={faChevronLeft} onClick={() => history.push('/movieserver')}/>
    )
}

export default BackButton
