import React from "react"
import styled from "styled-components"
import PortfolioItem from "./PortfolioItem"
import projectInfo from "../resources/ProjectInfo"
import Header from "./Header"
import portfolio from "../resources/images/portfolio.jpg"
import bestie from "../resources/images/bestie.jpg"
import painterly from "../resources/images/painterly.png"
import processing from "../resources/images/processing.png"
import graffitti from "../resources/images/graffitti.jpg"
import jamesturrell from "../resources/images/jamesturrell.jpeg"
import stacked from "../resources/images/stacked.jpg"
import instagram from "../resources/images/instagram.jpg"
import writing from "../resources/images/writing.jpg"

import {Link, Switch, Route} from "react-router-dom"


const Portfolio = () => {

	return (
		<Wrapper>
			<Header />
			<Page>
				<Row>
					<StyledLink to="/dreamscore" exact><SquareNav img = {portfolio}><Text>DreamScore</Text></SquareNav></StyledLink>
					<StyledLink to="/painterly" exact><SquareNav img = {painterly}><Text>Painterly</Text></SquareNav></StyledLink>
					<StyledLink to="/bestie" exact><SquareNav img = {bestie}><Text>Bestie</Text></SquareNav></StyledLink>
				</Row>
				<Row>
					<StyledA href="https://medium.com/@anna_carey" target="_blank"><SquareNav img = {writing}><Text>Writing</Text></SquareNav></StyledA>
					<StyledLink to="/annajcarey" exact><SquareNav img = {jamesturrell}><Text>This Website!</Text></SquareNav></StyledLink>
					<StyledLink to="/graffiti" exact><SquareNav img = {graffitti}><Text>Graffiti the Internet</Text></SquareNav></StyledLink>
				</Row>
				<Row>
					<StyledLink to="/stackedco"><SquareNav img = {stacked}><Text>Stacked Co</Text></SquareNav></StyledLink>
					<StyledLink to="/scraper"><SquareNav img = {instagram}><Text>Instagram Scraper</Text></SquareNav></StyledLink>
					<StyledLink to="/processing"><SquareNav img = {processing}><Text>Processing Art</Text></SquareNav></StyledLink>
				</Row>
			</Page>
			<Switch>
				{projectInfo.map(project => {
					const slug = project.name
					return <Route key={project.id} exact path = {`/${slug}`} render={ (props) =><PortfolioItem {...props} project={project} />} />
				})}
			</Switch>
		</Wrapper>
	)
}

export default Portfolio

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    
`
const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    // flex-grow: 1;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin-top: 1.5%;
    align-items: center;
`

const Text = styled.h3`
  margin: 0;
  font-size: 20px;
  z-index: 2;
  color: white;
  text-align: center;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 400px) {
      flex-direction: column;
      align-items: center;
      margin-bottom: -1%;
    }
`
const SquareNav = styled.div`
    height: 22vw;
    width: 22vw;
    min-width: 175px;
    min-height: 175px;
    cursor: pointer;
    display: flex;
    background-color: black;
    z-index: -1;
    align-items: center;
    justify-content: center;
    flex: 1;
    // margin: 3%;
    // margin-bottom: 10%;
    @media (max-width: 400px) {
      height: 44vw;
      width: 44vw;
      margin-top: 1.5%;
    }
    &:before {
      opacity: 0.7;
      background-image: ${props => `url(${props.img})`} ;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      content: "";
      width: 22vw;
      height: 22vw;
      min-width: 175px;
    min-height: 175px;
      z-index: 1;
      @media (max-width: 400px) {
        height: 44vw;
        width: 44vw;
      }
      position: absolute;
    }
`

const StyledLink = styled(Link)`
    margin: 1.5%;

`

const StyledA = styled.a`
    margin: 1.5%;

`