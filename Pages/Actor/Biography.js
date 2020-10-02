import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  text-transform: none;
  font-size: 18px;
`

const Title = styled.div`
  font-size: 40px;
  text-transform: uppercase;
`

const Text = styled.div`
  width: 100%;
  padding: 10px;
  font-size: 18px;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const Biography = ({ biography }) => (
  <Wrapper>
    <Title>BIOGRAPHY</Title>
    <Text>{biography.substr(0, 750)}...</Text>
  </Wrapper>
)

export default Biography
