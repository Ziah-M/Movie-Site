import React, { useState } from "react";
import { Container } from "react-bootstrap";
import MoviePage from "../Movie";
import Movies from "../Movies";

const baseStyle = {
  background: "transparent",
  color: "white"
};

const Landing = props => {
  //TODO: Dummy data while building the Movie Page
  //This should come from the URL query parameter
  const [loadedMovie, setLoadedMovie] = useState(501);
  const [showMoviePage, setShowMoviePage] = useState(false);

  // TODO -> REPLACE WITH ROUTING -- TEMPORARY FOR BUILD PROTOTYPING PURPOSES ONLY
  const toggleShowMoviePage = () => {
    // TODO - temporary hack to reset loaded movie when going back to Movies Page
    if (showMoviePage === true) {
      setLoadedMovie(501);
    }
    setShowMoviePage(!showMoviePage);
  };

  const handleLoadMovie = id => {
    setLoadedMovie(id);
    setShowMoviePage(true);
  };

  return (
    <Container className="p-0" style={baseStyle} fluid>
      {showMoviePage && (
        <MoviePage
          loadedMovie={loadedMovie}
          toggleShowMoviePage={toggleShowMoviePage}
        />
      )}
      {!showMoviePage && (
        <Movies
          toggleShowMoviePage={toggleShowMoviePage}
          handleLoadMovie={handleLoadMovie}
          {...props}
        />
      )}
    </Container>
  );
};

export default Landing;
