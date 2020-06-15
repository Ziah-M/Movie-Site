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
  const [loadedMovie, setLoadedMovie] = useState(500);

  return (
    <Container className="p-0" style={baseStyle} fluid>
      <MoviePage loadedMovie={loadedMovie} />
      {/* <Movies /> */}
    </Container>
  );
};

export default Landing;
