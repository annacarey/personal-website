import React from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"

const Header = () => {

	return (
		<HeaderWrapper>
			<Link to="/" exact><HeaderText>ANNA CAREY</HeaderText></Link>
			<Link to="/" exact><Subheader>Software Engineer</Subheader></Link>
		</HeaderWrapper>
      
	)
}

export default Header

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
  justify-content: center;
  align-items: center;
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