import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  color: white;
  font-size: 40px;
  text-transform: uppercase;
`

const Text = styled.div`
  font-size: 18px;
  margin-top: 15px;
  text-transform: none;

  @media (max-width: 500px) {
    font-size: 14px;
  }
`

const Summary = ({ summary }) => (
  <Wrapper>
    <h1>SUMMARY</h1>
    <Text>{summary}</Text>
  </Wrapper>
)

export default Summary
