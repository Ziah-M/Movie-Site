import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import API_KEY from '../private'

const MOVIE_URL = 'https://api.themoviedb.org/3/movie'
const TV_URL = 'https://api.themoviedb.org/3/tv'

const withTrailers = (Component) => {
  const WithTrailers = (props) => {
    const id =
      (props.match && props.match.params && props.match.params.id) || props.id

    const location = useLocation()

    const [trailers, setTrailers] = useState(null)

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
        getTrailers(conditionalUrl, conditionalLocalStorage)
      }
    }, [])

    const getTrailers = (conditionalUrl, conditionalLocalStorage) => {
      const cache = localStorage.getItem(
        `${conditionalLocalStorage}-trailers-${id}`,
      )
      if (cache) {
        setTrailers(JSON.parse(cache))
      } else {
        axios
          .request(`${conditionalUrl}/${id}/videos?api_key=${API_KEY}`)
          .then((result) => {
            // Filter out videos that aren't trailers
            const trailers = result.data.results.filter(
              (video) => video.type === 'Trailer',
            )

            localStorage.setItem(
              `${conditionalLocalStorage}-trailers-${id}`,
              JSON.stringify(trailers),
            )

            setTrailers(trailers)
          })
          .catch((error) => console.log('error fetching movie trailers', error))
      }
    }

    return <Component {...props} trailers={trailers} />
  }

  return WithTrailers
}

export default withTrailers

export { withTrailers }
