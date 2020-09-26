import React from "react";
import styled from "styled-components";
import { withActorDetails, withActorRoles } from "../../Hocs";
import Biography from "./Biography";
import Cover from "./Cover";
import Roles from "./Roles";

const Section = styled.div`
  width: 100%;
  max-width:100%;
  margin: 100px 0 0 0;
  padding: 0 15vw;

  @media (max-width:500px){
    padding:0 40px;
    margin:40px 0 0 0;
  }
`;

const Wrapper = styled.div`
  padding-bottom: 100px;
`;

const Actor = ({ actor, actorRoles }) => {
  const { biography = "" } = actor || {};
  return (
    <Wrapper>
      {actor && actorRoles && (
        <>
          <Cover actor={actor} backdrop_path={actorRoles[0].backdrop_path} />
          <Section>
            <Biography biography={biography} />
          </Section>
          <Section>{actorRoles && <Roles roles={actorRoles} />}</Section>
        </>
      )}
    </Wrapper>
  );
};

export default withActorDetails(withActorRoles(Actor));
