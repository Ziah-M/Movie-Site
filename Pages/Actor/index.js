import React from "react";
import { getDefault } from "../../Data";
import Biography from "./Biography";
import Cover from "./Cover";
import Roles from "./Roles";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  margin: 50px 0;
`;

const Actor = ({ actor = getDefault().actor }) => {
  const { biography = "", roles = [] } = actor;
  return (
    <div>
      <Cover actor={actor} />
      <Section>
        <Biography biography={biography} />
      </Section>
      <Section>
        <Roles roles={roles} />
      </Section>
    </div>
  );
};

export default Actor;
