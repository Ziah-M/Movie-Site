import React from "react";
import { getDefault } from "../../Data";
import Biography from "./Biography";
import Cover from "./Cover";
import Roles from "./Roles";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  margin: 100px 0 0 0;
  padding:0 15vw;
`;

const Wrapper=styled.div`
  padding-bottom:100px;
`

const Actor = ({ actor = getDefault().actor }) => {
  const { biography = "", roles = [] } = actor;
  return (
    <Wrapper>
      <Cover actor={actor} />
      <Section>
        <Biography biography={biography} />
      </Section>
      <Section>
        <Roles roles={roles} />
      </Section>
    </Wrapper>
  );
};

export default Actor;
