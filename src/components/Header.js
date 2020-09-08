import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Header = () => {

	return (
		<Wrapper>
			<StyledLink to="/about">About</StyledLink>
			<StyledLink to="/portfolio">Portfolio</StyledLink>
			<HeaderWrapper>
				<Link to="/" exact><HeaderText>ANNA CAREY</HeaderText></Link>
				<Link to="/" exact><Subheader>Software Engineer</Subheader></Link>
			</HeaderWrapper>
			<StyledA href="https://github.com/annacarey" rel="noopener noreferrer" target="_blank">Github</StyledA>
			<StyledA href="https://medium.com/@anna_carey" rel="noopener noreferrer" target="_blank">Writing</StyledA>
		</Wrapper>
	)
}

export default Header

const Wrapper = styled.div`
  display: flex;
  height: 20vh;
  align-items: center;
  justify-content: center;
`

const HeaderText = styled.h1`
  font-size: 20px;
  margin: 0px;
  text-align: center;
  width: 100%;
`

const Subheader = styled.p`
  font-size: 15px;
  margin: 0px;
  text-align: center;
  width: 100%;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: none;
  padding: 30px;
  min-width: 140px;
  &:hover ${HeaderText} {
    color: #696969
  };
  &:hover ${Subheader} {
    color: #696969
  }
  @media (max-width: 700px) {
    padding: 14px;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
`

const StyledLink = styled(Link)`
  padding: 30px;
  font-size: 15px;
  &:hover {
    color: #696969
  }
  @media (max-width: 700px) {
    padding: 14px;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`

const StyledA = styled.a`
  padding: 30px;
  font-size: 15px;
  &:hover {
    color: #696969
  }
  @media (max-width: 700px) {
    padding: 14px;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
  @media (max-width: 450px) {
    display: none;
  }
`