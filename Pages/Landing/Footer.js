import { faFacebook, faTwitter } from '@fortawesome/fontawesome-free-brands'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom'

const ATTRIBUTION_LOGO =
  'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'

const Footer = (props) => (
  <Wrapper>
    <ColLeft>
      <LeftInner>
        <Headings>
          MOVIE SERVER &nbsp;&nbsp;&nbsp;{' '}
          <MyLink onClick={() => scroll.scrollToTop()}>Home</MyLink>
        </Headings>
        <LeftRow>
          <span>portfolio: </span>
          <span>
            <Link to="/">Portfolio Home</Link>
          </span>
        </LeftRow>
        <LeftRow>Copyright &copy; 2020</LeftRow>
      </LeftInner>
    </ColLeft>
    <ColRight>
      <RightInner>
        <TmdbLogo src={ATTRIBUTION_LOGO} />
        <SocialButtons>
          <Link to="https://www.twitter.com/themoviedb">
            <IconContainer>
              <Icon icon={faTwitter} />
            </IconContainer>
          </Link>
          <Link to="https://www.facebook.com/themoviedb">
            <IconContainer>
              <Icon icon={faFacebook} />
            </IconContainer>
          </Link>
          <Link to="https://www.themoviedb.org/documentation/api">
            <IconContainer>
              <Icon icon={faFileCode} />
            </IconContainer>
          </Link>
        </SocialButtons>
      </RightInner>
    </ColRight>
  </Wrapper>
)

const MyLink = styled.div`
  &:hover {
    color: slategray;
  }
`

const Wrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  min-height: 500px;
  height: auto;

  background: black;
  color: white;

  display: flex;
  justify-content: start;
  align-items: center;
`

const ColLeft = styled.div`
  width: 50vw;
  padding: 0 20px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const ColRight = styled.div`
  width: 50vw;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const RightInner = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const LeftInner = styled.div`
  height: 200px;
`

const Headings = styled.div`
  text-transform: capitalize;
  color: white;
  font-size: 18px;
  margin-bottom: 75px;
`

const LeftRow = styled.div`
  width: 100%;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  text-transform: lowercase;
`

const TmdbLogo = styled.img`
  width: 100%;
  height: 50px;
`

const SocialButtons = styled.div`
  display: flex;
  height: auto;
  justify-content: center;
`

const Icon = styled(FontAwesomeIcon)`
  line-height: 40px;
`

const IconContainer = styled.div`
  border-radius: 50%;
  margin: 0 10px;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: black;
  text-align: center;
  background: rgba(255, 255, 255, 0.7);

  &:hover {
    background: rgba(255, 255, 255, 1);
    * {
      color: #deb150;
    }
  }
`

export default Footer
