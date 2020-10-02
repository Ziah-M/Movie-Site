import React from 'react'
import { Route, Switch } from 'react-router'
import styled from 'styled-components'
import { withFetchMovies, withScrollToTopOnRouteChange } from './Hocs'
import * as P from './Pages'
import * as R from './ROUTES'

const DefaultStyles = styled.div`
  background: #eb4e7a;
  color: white;
  text-transform: capitalize;
  user-select: none;
`

const Wrapper = styled.div`
  background: linear-gradient(165deg, #251431 0%, #161130 22%);
  max-width: 100%;
`

const App = ({
  moviesComingSoon,
  moviesTopRated,
  moviesPopular,
  moviesTrending,
  moviesPlayingNow,
}) => (
  <DefaultStyles>
    <Wrapper>
      <Switch>
        <Route path={R.MOVIE} component={P.Movie} />
        <Route path={R.ACTOR} component={P.Actor} />
        <Route path={R.SEARCH} component={P.Search} />
        <Route path={R.TV_DETAILS} component={P.Movie} />
        <Route path={R.LANDING_TV} component={P.LandingTv} />
        <Route
          exact
          path={R.LANDING}
          render={(props) => (
            <P.Landing
              moviesComingSoon={moviesComingSoon}
              moviesTrending={moviesTrending}
              moviesTopRated={moviesTopRated}
              moviesPopular={moviesPopular}
              moviesPlayingNow={moviesPlayingNow}
            />
          )}
        />
        {/* <P.Movie id={577922} /> */}
        {/* <P.Actor id={11288} /> */}
      </Switch>
    </Wrapper>
  </DefaultStyles>
)

export default withScrollToTopOnRouteChange(withFetchMovies(App))
