import React from "react";
import * as P from "./Pages";
import styled from "styled-components";
import { withFetchMovies } from "./Hocs";

const DefaultStyles = styled.div`
  background: #eb4e7a;
  color: white;
  text-transform: capitalize;
  user-select: none;
`;

const Wrapper = styled.div`
  background: linear-gradient(165deg, #251431 0%, #161130 22%);
`;

const App = ({
  moviesComingSoon,
  moviesTopRated,
  moviesPopular,
  moviesTrending,
  moviesPlayingNow,
}) => {
  return (
    <DefaultStyles>
      <Wrapper>
        <P.Landing
          moviesComingSoon={moviesComingSoon}
          moviesTrending={moviesTrending}
          moviesTopRated={moviesTopRated}
          moviesPopular={moviesPopular}
          moviesPlayingNow={moviesPlayingNow}
        />
        <P.Movie id={577922} />
        <P.Actor id={11288} />
      </Wrapper>
    </DefaultStyles>
  );
};

// WRAP WITH withFetchMovies HOC
export default withFetchMovies(App);
