import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Spinner,
  Container as UnstyledContainer,
  Row,
  Col
} from "react-bootstrap";
import Cast from "./Cast";
import Reviews from "./Reviews";
import Summary from "./Summary";
import TitleCard from "./TitleCard";
import Trailers from "./Trailers";
import SimilarMovies from "./SimilarMovies";
import API_KEY from "../../private";
import styled from "styled-components";

/* NOTE: back-drop path is what is used for the
Featured movie (netflix-style at top of landing page)
*/

const URL = "https://api.themoviedb.org/3/movie";

const MoviePage = ({ loadedMovie }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [movieTrailers, setMovieTrailers] = useState(null);
  const [movieCast, setMovieCast] = useState(null);
  const [movieReviews, setMovieReviews] = useState(null);
  const [id, setId] = useState(loadedMovie);

  //API call when loaded movie changes
  useEffect(() => {
    handleFetch(loadedMovie);
  }, [loadedMovie]);

  const handleFetch = id => {
    getMovieDetails(id);
    getMovieCast(id);
    getMovieReviews(id);
    getMovieTrailers(id);
  };

  const getMovieDetails = id => {
    axios
      .request(`${URL}/${id}?api_key=${API_KEY}`)
      .then(result => setMovieDetails(result.data))
      .catch(error => console.log("error fetching movie details", error));
  };

  const getMovieCast = id => {
    axios
      .request(`${URL}/${id}/credits?api_key=${API_KEY}`)
      .then(result => setMovieCast(result.data.cast))
      .catch(error => console.log("error fetching movie cast", error));
  };

  const getMovieTrailers = id => {
    axios
      .request(`${URL}/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then(result => setMovieTrailers(result.data.results))
      .catch(error => console.log("error fetching movie trailers", error));
  };

  const getMovieReviews = id => {
    axios
      .request(`${URL}/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
      .then(result => setMovieReviews(result.data.results))
      .catch(error => console.log("error fetching movie reviews", error));
  };

  //TODO - backdrop at top of page of the movie's backdrop img path

  const backgroundStyle = movieDetails
    ? {
        backgroundImage:
          "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(" +
          `https://image.tmdb.org/t/p/w400/${movieDetails.backdrop_path}` +
          ")",
        backgroundStyle: "fixed",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        color: "white"
      }
    : {};

  return (
    <Container fluid style={backgroundStyle}>
      {movieDetails ? (
        <>
          <Row
            style={{ height: "100vh", minHeight: "100vh", maxHeight: "100vh" }}
          >
            <Col xs={12} className="d-flex flex-column justify-content-between">
              <Row>
                <TitleCard
                  rating={movieDetails.vote_average}
                  title={movieDetails.original_title}
                  released={movieDetails.release_date}
                  language={movieDetails.original_language}
                  genres={movieDetails.genres}
                  poster={movieDetails.poster_path}
                  tagline={movieDetails.tagline}
                />

                {movieCast ? (
                  <Cast castMembers={movieCast} />
                ) : (
                  <Spinner animation="border" variant="warning" />
                )}
              </Row>
              <Row className="m-4">
                <h2 style={{textAlign:'center', width:'100%'}}>{movieDetails.tagline}</h2>
                <Summary data={movieDetails.overview} />
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}

      {movieTrailers ? (
        <Trailers trailers={movieTrailers} />
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
      {movieReviews ? (
        <Reviews reviews={movieReviews} />
      ) : (
        <Spinner animation="border" variant="warning" />
      )}
      {/* --------------------------
       */}
      {/* <SimilarMovies /> */}
    </Container>
  );
};

const Container = styled(UnstyledContainer)`
  width: 100vw;
  height: 100vh;
`;

export default MoviePage;
