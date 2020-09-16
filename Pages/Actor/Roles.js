import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Panel = styled.div`
  background: #1c262a;
  color: white;
  height: 250px;
  width: 70%;
  padding: 5%;
  margin: 50px 15%;
  border: 4px solid transparent;
  border-left: 4px solid white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const Poster = styled.div`
  display: inline-block;
`;

const Roles = ({ roles }) => {
  return (
    <Wrapper>
      <h1>POPULAR ROLES</h1>
      {roles.map((role) => (
        <Panel>
          <div id="area">
            <Poster>
              <img src={role.imgPosterMovie} />
            </Poster>
            <div id="col" style={{ display: "inline-block" }}>
              {role.title}
              <br />
              {role.character}
            </div>
          </div>
          <p>{role.summary}</p>
        </Panel>
      ))}
    </Wrapper>
  );
};

export default Roles;
