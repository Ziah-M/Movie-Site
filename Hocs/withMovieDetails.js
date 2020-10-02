import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API_KEY from '../private'

const URL = 'https://api.themoviedb.org/3'
const MOVIE_URL = 'https://api.themoviedb.org/3/movie'
const TV_URL = 'https://api.themoviedb.org/3/tv'

const withMovieDetails = (Component) => {
  const WithMovieDetails = (props) => {
    const id =
      (props.match && props.match.params && props.match.params.id) || props.id

    const [movieDetails, setMovieDetails] = useState(null)

    const location = useLocation()

    useEffect(() => {
      if (id) {
        // set isTv from either props OR the route
        let isTv = props
        const urlMatchesTv = location && location.pathname.includes('tv')
        if (urlMatchesTv) {
          isTv = true
        }
        const conditionalUrl = isTv === true ? TV_URL : MOVIE_URL
        const conditionalLocalStorage = isTv ? 'tv-details' : 'movie-details'

        getMovieDetails(conditionalUrl, conditionalLocalStorage)
      }
    }, [])

    const getMovieDetails = (conditionalUrl, conditionalLocalStorage) => {
      const cache = localStorage.getItem(`${conditionalLocalStorage}-${id}`)
      if (cache) {
        setMovieDetails(JSON.parse(cache))
      } else {
        axios
          .request(`${conditionalUrl}/${id}?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `${conditionalLocalStorage}-${id}`,
              JSON.stringify(result.data),
            )
            setMovieDetails(result.data)
          })
          .catch((error) => console.log('error fetching movie details', error))
      }
    }

    return <Component {...props} movieDetails={movieDetails} />
  }

  return WithMovieDetails
}

export default withMovieDetails

export { withMovieDetails }
