import axios from "axios";
import React, { useState, useEffect } from "react";
import API_KEY from "../private";
import { withFetchMovies } from "./index";

const MOVIE_URL = "https://api.themoviedb.org/3/movie";
const MULTI_SEARCH = "https://api.themoviedb.org/3/search/multi";
const SPECIAL_SEARCHES = [
  "top-rated-movies",
  "upcoming-movies",
  "now-playing-movies",
  "popular-movies",
  "popular-people",
];

const withSearch = (Component) => {
  const WithSearch = (props) => {
    const searchTerm =
      (props.match && props.match.params && props.match.params.searchTerm) ||
      null;

    const [search, setSearch] = useState(null);

    useEffect(() => {
      if (searchTerm && !SPECIAL_SEARCHES.includes(searchTerm)) {
        getSearch();
      }
    }, []);

    const getSearch = () => {
      const cache = localStorage.getItem(`movie-search-${searchTerm}`);
      if (cache) {
        setSearch(JSON.parse(cache));
      } else {
        console.log("Searching");
        const searchQueryString=encodeURI(searchTerm);
        axios
          .request(`${MULTI_SEARCH}?api_key=${API_KEY}&query=${searchQueryString}`)
          .then((result) => {
            localStorage.setItem(
              `movie-search-${searchTerm}`,
              JSON.stringify(result.data.results)
            );
            setSearch(result.data.results);
          })
          .catch((error) => console.log("error fetching movie search", error));
      }
    };

    if (SPECIAL_SEARCHES.includes(searchTerm)) {
      const SpecialSearchComponet = withFetchMovies(Component);
      return <SpecialSearchComponet {...props} results={search} />;
    } else {
      return <Component {...props} results={search} />;
    }
  };

  return WithSearch;
};

export default withSearch;

export { withSearch };
