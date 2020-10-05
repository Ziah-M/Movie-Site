import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API_KEY from '../private'

const MOVIE_URL = 'https://api.themoviedb.org/3/movie'
const TV_URL = 'https://api.themoviedb.org/3/tv'

const withMovieReviews = (Component) => {
  const WithMovieReviews = (props) => {
    const id =
      (props.match && props.match.params && props.match.params.id) || props.id

    const [movieReviews, setMovieReviews] = useState(null)

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
        const conditionalLocalStorage = isTv ? 'tv' : 'movie'
        getMovieReviews(conditionalUrl, conditionalLocalStorage)
      }
    }, [])

    const getMovieReviews = (conditionalUrl, conditionalLocalStorage) => {
      const cache = localStorage.getItem(
        `${conditionalLocalStorage}-reviews-${id}`,
      )
      if (cache) {
        setMovieReviews(JSON.parse(cache))
      } else {
        axios
          .request(`${conditionalUrl}/${id}/reviews?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `${conditionalLocalStorage}-reviews-${id}`,
              JSON.stringify(result.data.results),
            )
            setMovieReviews(result.data.results)
          })
          .catch((error) => console.log('error fetching movie reviews', error))
      }
    }

    return <Component {...props} movieReviews={movieReviews} />
  }

  return WithMovieReviews
}

export default withMovieReviews

export { withMovieReviews }
