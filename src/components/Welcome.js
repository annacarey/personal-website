import React from "react"
import styled from "styled-components"
import jamesturrell from "../resources/images/jamesturrell.jpeg"
import github from "../resources/images/github.png"
import portfolio from "../resources/images/portfolio.jpg"
import resume from "../resources/images/resume.jpg"
import about from "../resources/images/about.jpg"
import writing from "../resources/images/writing.jpg"
import Header from "./Header"
import {Link} from "react-router-dom"

const Welcome = () => {
	return (
		<Wrapper>
			<Header />
			<MainImageDiv>
				<Tagline>Full-stack software engineer at the intersection of technology and art.</Tagline>
			</MainImageDiv>
			<BottomNav>
				<Row>
					<Link to="/about" exact><SquareNav img = {about}><Text>About</Text></SquareNav></Link>
					<Link to="/portfolio" exact><SquareNav img = {portfolio}><Text>Portfolio</Text></SquareNav></Link>
				</Row>
				<Row>
					<a href="https://docs.google.com/document/d/1qjGsgXvPJEEsMYeFVT7GEanE5B5o5LaK10I65qfWLBk/edit?usp=sharing" rel="noopener noreferrer" target="_blank"><SquareNav img = {resume}><Text>Resume</Text></SquareNav></a>
					<a href="https://github.com/annacarey" rel="noopener noreferrer" target="_blank"><SquareNav img = {github}><Text>Github</Text></SquareNav></a>
				</Row>
          <a href="https://medium.com/@anna_carey" rel="noopener noreferrer" target="_blank"><SquareNav writing={true} img = {writing}><Text>Writing</Text></SquareNav></a>
			</BottomNav>
		</Wrapper>
	)
}

export default Welcome

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Text = styled.h3`
  margin: 0;
  font-size: 20px;
  z-index: 2;
  color: white;
  @media (max-width: 800px) {
    font-size: 30px;
  }
`

const BottomNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 3%;
    margin-bottom: 1.5%;
    @media (max-width: 450px) {
      margin: 0;
    }
`
const Row = styled.div`
    display: flex;
    width: 70%;
    flex: 1;
    flex-wrap: wrap;
    justify-content: center;
    @media (max-width: 800px) {
      margin-bottom: -1%;
    }
    @media (max-width: 450px) {
      width: 100%;
      margin: 0;
    }
`
const SquareNav = styled.div`
    height: 25vw;
    width: 25vw;
    cursor: pointer;
    display: ${props => props.writing? 'none' : 'flex'} ;
    background-color: black;
    z-index: -1;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 10px;
    @media (max-width: 800px) {
      height: 34vw;
      width: 55vw;
      margin-bottom: 5%;
      display: flex;
    }
    @media (max-width: 450px) {
      height: 54vw;
      width: 100vw;
      margin: 0;
      border-top: 4px solid white;
    }
    &:before {
      opacity: 0.5;
      background-image: ${props => `url(${props.img})`} ;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      content: "";
      width: 25vw;
      height: 25vw;
      z-index: 1;
      position: absolute;
      @media (max-width: 800px) {
        height: 34vw;
        width: 55vw;
        margin-bottom: 5%;
      }
      @media (max-width: 450px) {
        height: 54vw;
        width: 100vw;
        margin: 0;
      }
    }
    &:hover&:before {
      opacity: 0.8;
    }
`



const MainImageDiv = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  z-index: -1;
  &:after {
    opacity: 0.6;
    background-image: url(${jamesturrell}) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    width: 100%;
    height: 60vh;
    z-index: 1;
    position: absolute;
  }
`
const Tagline = styled.h3`
  font-size: 25px;
  margin: 0px;
  color: white;
  text-align: center;
  width: 100%;
  z-index: 2;
  padding: 30px;
`
// blue color #011ad8
