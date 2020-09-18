import React from "react";
import styled from "styled-components";
import { MovieCardSmall as Poster } from "../../Components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Panel = styled.div`
  background: #1c262a;
  color: white;
  height: auto;
  width: 80%;
  padding: 2.5% 5%;
  margin: 50px 10%;
  border: 4px solid transparent;

  &.accent-left {
    border-left: 4px solid white;
  }

  &.accent-right {
    border-right: 4px solid white;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
`;

const MovieCard = styled.div`
  width: 13vw;
  height: calc(1.5 * 13 vw);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const Released = styled.div`
  font-size: 16px;
  margin: 10px 0;
`;

const Details = styled.div`
  margin-left: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Summary = styled.div`
  margin: 20px 0;
  text-transform: none;
`;

const HeadingTitle=styled.div`
  font-size:40px;
text-transform:uppercase;
`

const Roles = ({ roles }) => {
  return (
    <Wrapper>
      <HeadingTitle>POPULAR ROLES</HeadingTitle>
      {roles.map(
        (role, index) =>
          index < 5 && (
            <Panel
              key={`roles-map-${index}`}
              className={`${index % 2 === 1 ? "accent-left" : "accent-right"}`}
            >
              <Container>
                <MovieCard>
                  <Poster url={role.poster_path} isMovie id={role.id}/>
                </MovieCard>
                <Details>
                  <Title>{role.name || role.title}</Title>
                  <Released>{role.character}</Released>
                </Details>
              </Container>
              <Summary>{role.overview}</Summary>
            </Panel>
          )
      )}
    </Wrapper>
  );
};

export default Roles;
