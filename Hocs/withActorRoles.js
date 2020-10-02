import axios from 'axios'
import React, { useEffect, useState } from 'react'
import API_KEY from '../private'
const MOVIE_URL = 'https://api.themoviedb.org/3/person'

const withActorRoles = (Component) => {
  const WithActorRoles = (props) => {
    const id =
      (props.match && props.match.params && props.match.params.id) || props.id

    const [actorRoles, setActorRoles] = useState(null)

    useEffect(() => {
      if (id) {
        getActorRoles()
      }
    }, [])

    const getActorRoles = () => {
      const cache = localStorage.getItem(`movie-actor-${id}-roles`)
      if (cache) {
        setActorRoles(JSON.parse(cache))
      } else {
        console.log('FETCHING ACTOR ROLES for: ', id)
        axios
          .request(`${MOVIE_URL}/${id}/combined_credits?api_key=${API_KEY}`)
          .then((result) => {
            localStorage.setItem(
              `movie-actor-${id}-roles`,
              JSON.stringify(result.data.cast),
            )
            setActorRoles(result.data.cast)
          })
          .catch((error) => console.log('error fetching actor roles', error))
      }
    }

    return <Component {...props} actorRoles={actorRoles} />
  }

  return WithActorRoles
}

export default withActorRoles

export { withActorRoles }
