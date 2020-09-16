import React from 'react'
import Cover from './Cover'
import Summary from './Summary'
import Cast from './Cast'
import Trailers from './Trailers'
import Reviews from './Reviews'

const Movie = () => {
    return (
        <div>
            <Cover />
            <Summary />
            <Cast />
            <Trailers />
            <Reviews />
        </div>
    )
}

export default Movie
