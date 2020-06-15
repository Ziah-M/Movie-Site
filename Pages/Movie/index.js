import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Button,
  Spinner,
  Container as UnstyledContainer,
  Row,
  Col,
  Navbar,
  Nav
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

  // TODO - TEMP FOR DEV BUILD - replace with query params and react-router
  const [activeComponent, setActiveComponent] = useState("ABOUT");

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
      <Navbar
        style={{ borderBottom: "1px solid white", height: "10vh" }}
        variant="dark"
      >
        <Nav>
          <Nav.Link onClick={() => setActiveComponent("ABOUT")}>HOME</Nav.Link>

          <Nav.Link onClick={() => setActiveComponent("ABOUT")}>ABOUT</Nav.Link>

          <Nav.Link onClick={() => setActiveComponent("CAST")}>CAST</Nav.Link>

          <Nav.Link onClick={() => setActiveComponent("REVIEWS")}>
            REVIEWS
          </Nav.Link>

          <Nav.Link onClick={() => setActiveComponent("TRAILERS")}>
            TRAILERS
          </Nav.Link>
        </Nav>

        <Nav className="ml-auto">
          <Nav.Link>Search</Nav.Link>
        </Nav>
      </Navbar>
      {movieDetails ? (
        <>
          <Row style={{ height: "90vh", minHeight: "90vh", maxHeight: "90vh" }}>
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
              </Row>
              <Row className="m-5">
                {activeComponent === "ABOUT" && (
                  <>
                    <h2 style={{ textAlign: "center", width: "100%" }}>
                      {movieDetails.tagline}
                    </h2>
                    <Summary data={movieDetails.overview} />
                  </>
                )}
                {activeComponent === "CAST" && (
                  <>
                    {movieCast ? (
                      <Cast castMembers={movieCast} />
                    ) : (
                      <Spinner animation="border" variant="warning" />
                    )}
                  </>
                )}
                {activeComponent === "REVIEWS" && (
                  <>
                    {movieReviews ? (
                      <Reviews reviews={movieReviews} />
                    ) : (
                      <Spinner animation="border" variant="warning" />
                    )}
                  </>
                )}
                {activeComponent === "TRAILERS" && (
                  <>
                    {movieTrailers ? (
                      <Trailers trailers={movieTrailers} />
                    ) : (
                      <Spinner animation="border" variant="warning" />
                    )}
                  </>
                )}
              </Row>
            </Col>
          </Row>
        </>
      ) : (
        <Spinner animation="border" variant="warning" />
      )}

      {/* <SimilarMovies /> */}
    </Container>
  );
};

const Container = styled(UnstyledContainer)`
  width: 100vw;
  height: 100vh;
`;

export default MoviePage;
