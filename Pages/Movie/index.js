import React from "react";
import styled from "styled-components";
import { withMovieDetails } from "../../Hocs";
import Cast from "./Cast";
import Cover from "./Cover";
import Reviews from "./Reviews";
import Summary from "./Summary";
import Trailers from "./Trailers";

const Section = styled.div`
  width: 100vw;
  margin: 100px 0 0 0;
  padding: 0 15vw;

`;

const Wrapper = styled.div`
  padding-bottom: 100px;
`;

const Movie = ({ movieDetails = {} }) => {
  const { overview = null, trailers = null, cast = null, reviews = null } =
    movieDetails || {};

  return (
    <Wrapper>
      <Cover movie={movieDetails} />
      {movieDetails && (
        <>
          <Section>
            <Summary summary={overview} />
          </Section>
          <Section>
            <Cast id={movieDetails && movieDetails.id} />
          </Section>
          <Section>
            <Trailers id={movieDetails && movieDetails.id} />
          </Section>
          <Section>
            <Reviews id={movieDetails && movieDetails.id} />
          </Section>
        </>
      )}
    </Wrapper>
  );
};

export default withMovieDetails(Movie);
