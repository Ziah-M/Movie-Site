import {
  faBolt,
  faHome,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { routeMovieSite } from '../../../../private'

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`

const Navbar = styled.div`
  background: #1c262a;
  height: 100%;
  width: 100%;
  color: white;
`

const Ul = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & * {
    color: white;
  }
`

const Search = styled.input`
  width: 25vw;
  border-radius: 20px;
  background: white;
  color: gray;
  border: none !important;
  outline: none !important;
  font-size: 12px;
  padding: 5px 10px;

  .isactive {
    border: none !important;
  }
`

const Icon = styled(FontAwesomeIcon)`
  height: 50px;
  width: 50px;

  &:hover {
    & * {
      color: skyblue;
    }
  }

  & * {
    transform: translate(-5px) scale(1.3);
  }
`

const Searchbar = styled.form`
  width: auto;
  position: relative;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 500px) {
    width: 125px;
  }
`

const SearchIcon = styled.button`
  position: absolute;
  right: 0;
  height: 30px;
  border: none !important;
  border-radius: 20px;
  width: 70px;
  background: #eb4e7a;
  outline: none !important;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    width: 30px;
    right: 10px;
    font-size: 10px;
  }

  &:hover * {
    color: skyblue;
  }
`

const LandingNavbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const inputRef = useRef(null)
  const history = useHistory()

  useEffect(() => {
    const { current } = inputRef
    current.focus()
  })

  const handleSubmit = () => {
    searchTerm && history.push(`/${routeMovieSite}/search/${searchTerm}`)
  }

  return (
    <Wrapper>
      <Navbar>
        <Ul>
          <Link to="/">Portfolio</Link>
          <Searchbar onSubmit={() => handleSubmit()}>
            <Search
              value={searchTerm}
              ref={inputRef}
              placeholder="search..."
              onChange={(event) => setSearchTerm(event.target.value)}
            />
            <SearchIcon type="submit">
              <Icon icon={faSearch} />
            </SearchIcon>
          </Searchbar>
          <Link to={`/${routeMovieSite}`}>
            <Icon icon={faHome} />
          </Link>
          <Link to={`/${routeMovieSite}/actor/287`}>
            <Icon icon={faUser} />
          </Link>
          <Link to={`/${routeMovieSite}/movie/577922`}>
            <Icon icon={faBolt} />
          </Link>
        </Ul>
      </Navbar>
    </Wrapper>
  )
}

export default LandingNavbar
