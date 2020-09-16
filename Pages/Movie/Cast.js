import React from "react";
import styled from "styled-components";
import {CastSlider} from '../../Components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Title=styled.div`
margin-bottom:25px;
font-size:40px;
text-transform:uppercase;
`

const Cast = ({cast}) => {
    return (
        <Wrapper>
            <Title>CAST</Title>
            <CastSlider cast={cast}/>
        </Wrapper>
    )
}

export default Cast
