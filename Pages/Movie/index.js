import React from "react";
import Cover from "./Cover";
import Summary from "./Summary";
import Cast from "./Cast";
import Trailers from "./Trailers";
import Reviews from "./Reviews";
import { getDefault } from "../../Data";
import styled from "styled-components";

const Section = styled.div`
  width: 100vw;
  margin: 100px 0 0 0;
  padding:0 15vw;
`;

const Wrapper=styled.div`
  padding-bottom:100px;
`

const Movie = ({ movie = getDefault().movie }) => {
  const {
    imgPosterLarge,
    title,
    rating,
    genres,
    summary,
    trailers,
    cast,
    reviews,
  } = movie;

  return (
    <Wrapper>
      <Cover movie={movie} />
      <Section>
        <Summary summary={summary} />
      </Section>
      <Section>
        <Cast cast={cast} />
      </Section>
      <Section>
        <Trailers trailers={trailers} />
      </Section>
      <Section>
        <Reviews reviews={reviews} />
      </Section>
    </Wrapper>
  );
};

export default Movie;
