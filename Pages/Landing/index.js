import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MoviePage from "../Movie";
import Movies from "../Movies";

const baseStyle = {
  background: "transparent",
  color: "white"
};

const Landing = () => {
  //TODO: Dummy data while building the Movie Page
  //This should come from the URL query parameter
  const [loadedMovie, setLoadedMovie] = useState(501);
  const [showMoviePage, setShowMoviePage] = useState(false);

  // TODO -> REPLACE WITH ROUTING -- TEMPORARY FOR BUILD PROTOTYPING PURPOSES ONLY
  const toggleShowMoviePage = () => setShowMoviePage(!showMoviePage);

  return (
    <Container className="p-0" style={baseStyle} fluid>
      {showMoviePage && (
        <MoviePage
          loadedMovie={loadedMovie}
          toggleShowMoviePage={toggleShowMoviePage}
        />
      )}
      {!showMoviePage && <Movies toggleShowMoviePage={toggleShowMoviePage} />}
    </Container>
  );
};

export default Landing;
