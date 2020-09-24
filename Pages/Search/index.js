import React from "react";
import styled from "styled-components";
import { LandingNavbar, MovieCardSmall } from "../../Components";
import { withMovieDetails, withSearch } from "../../Hocs";

const Wrapper = styled.div`
  text-transform: uppercase;
  min-height: 100vh;
  width: 100vw;
  padding: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const ResultsGrid = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  display: block;
  height: auto;
  width: 100%;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 600;
`;

const MovieSection = styled.div`
  height: auto;
  width: 150px;
  margin: 20px 20px;
`;

const MovieCard = styled.div`
  /* aspect ratio of card */
  width: 150px;
  height: 150px * 1.5;
`;

const GenresWrapper = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 12px;
  max-width: 100%;
  text-transform: capitalize;
`;

const Heading = styled.div`
  width: auto;
  height: 100px;
  font-size: 26px;
  font-weight: 600;
`;

const HeadingBorder = styled.div`
  width: 50%;
  border-bottom: 1px solid #eb4e7a;
  margin: 8% auto;
`;

const Search = ({
  match: { params },
  results,
  moviesTrending,
  moviesPlayingNow,
  moviesComingSoon,
  moviesPopular,
  moviesTopRated,
}) => {
  //NECESSARY BECAUSE API RESULTS FROM SPECIAL SEARCHES
  //DON'T CONTAIN THE MEDIA_TYPE PROPERTY
  var isAllMovies = false;
  var isAllActors = false;

  var data;
  // depending on whether HOC is providing data from a special-search
  switch (params.searchTerm) {
    case "top-rated-movies":
      data = moviesTopRated;
      isAllMovies = true;
      break;

    case "upcoming-movies":
      data = moviesComingSoon;
      isAllMovies = true;
      break;

    case "now-playing-movies":
      data = moviesPlayingNow;
      isAllMovies = true;
      break;

    case "popular-movies":
      data = moviesPopular;
      isAllMovies = true;
      break;

    default:
      data = results;
  }

  return (
    <>
      <LandingNavbar />
      <Wrapper>
        <Heading>
          Search RESULTS FOR {params && params.searchTerm}
          <br />
          <HeadingBorder />
        </Heading>
        {data && (
          <ResultsGrid>
            {data.map((result, index) => {
              const title = result.name || result.title;
              const imgUrl = result.poster_path || result.profile_path;

              return (
                <MovieSection key={`search-grid-${index}`}>
                  <MovieCard>
                    <MovieCardSmall
                      className="rounded"
                      url={imgUrl}
                      id={result.id}
                      isMovie={result.media_type === "movie"}
                      isPerson={result.media_type === "person"}
                    ></MovieCardSmall>
                  </MovieCard>
                  <Title>{title}</Title>
                  {(result.media_type === "movie" || isAllMovies) && (
                    <FetchedGenres id={result.id}></FetchedGenres>
                  )}
                </MovieSection>
              );
            })}
          </ResultsGrid>
        )}
      </Wrapper>
    </>
  );
};

const Genres = ({ movieDetails = null }) => {
  return (
    <GenresWrapper>
      {movieDetails &&
        movieDetails.genres &&
        movieDetails.genres[0] &&
        movieDetails.genres[0].name}
    </GenresWrapper>
  );
};

const FetchedGenres = withMovieDetails(Genres);

export default withSearch(Search);
