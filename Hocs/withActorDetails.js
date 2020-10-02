import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_KEY from '../private'
const MOVIE_URL = 'https://api.themoviedb.org/3/person'

const withActorDetails = (Component) => {
  const WithActorDetails = (props) => {
    const id =
      (props.match && props.match.params && props.match.params.id) || props.id

    const [actorDetails, setActorDetails] = useState(null)

    useEffect(() => {
      if (id) {
        getActorDetails()
      }
    }, [])

    const getActorDetails = () => {
      const cache = localStorage.getItem(`movie-actor-${id}`)
      if (cache) {
        setActorDetails(JSON.parse(cache))
      } else {
        axios
          .request(`${MOVIE_URL}/${id}?api_key=${API_KEY}`)
          .then((result) => {
            const actorDetails = result.data
            if (!actorDetails.name) {
              actorDetails.Name = 'Name not provided'
            }

            if (!actorDetails.rating) {
              actorDetails.rating = 0
            }

            if (actorDetails.gender === 0) {
              actorDetails.gender = 'Female'
            } else if (actorDetails.gender === 1) {
              actorDetails.gender = 'Male'
            } else {
              actorDetails.gender = 'Gender not provided'
            }

            if (!actorDetails.known_for_department) {
              actorDetails.known_for_department = 'Person'
            }

            localStorage.setItem(
              `movie-actor-${id}`,
              JSON.stringify(actorDetails),
            )
            setActorDetails(actorDetails)
          })
          .catch((error) => console.log('error fetching actor details', error))
      }
    }

    return <Component {...props} actor={actorDetails} />
  }

  return WithActorDetails
}

export default withActorDetails

export { withActorDetails }
