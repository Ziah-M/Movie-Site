import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
width:40vw;
height:5vw;
background:linear-gradient(90deg, rgba(255, 86, 132, 0.4) 0%, rgba(83, 50, 201, 0.4) 68%), linear-gradient(90deg, rgba(255, 86, 132, 0.4) 0%, rgba(83, 50, 201, 0.4) 68%);
border-left:3px solid rgba(255, 86, 132, 0.4);
border-right:3px solid rgba(83, 50, 201, 0.4);
padding:3px;
border-radius:10px;
display:inline-block;
margin:10px;
`

const Button=styled.button`
background:purple;
border:none;
height:100%;
width:100%;
border-radius:10px;
color:white;
`

const LandingButton = ({children}) => {
    return (
        <Wrapper>
            <Button>
                {children}
            </Button>
        </Wrapper>
    )
}

export default LandingButton
