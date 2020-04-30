import React from 'react';
import styled from 'styled-components'
import MenuBar from './MenuBar'
import Header from './Header'
import github from '../resources/images/github.png'
import portfolio from '../resources/images/portfolio.jpg'
import resume from '../resources/images/resume.jpg'
import about from '../resources/images/about.jpg'
import {NavLink, Link} from "react-router-dom";


function Portfolio(props) {

    return (
    <Wrapper>
        <Header />
        <div>Work in progress...</div>
        <Page>
            <Row>
                <Link to="/portfolio" exact><SquareNav img = {portfolio}><Text>DreamScore</Text></SquareNav></Link>
                <Link to="/about" exact><SquareNav img = {about}><Text>Painterly</Text></SquareNav></Link>
                <Link to="/about" exact><SquareNav img = {about}><Text>Bestie</Text></SquareNav></Link>
            </Row>
            <Row>
                <a href="https://medium.com/@anna_carey" target="_blank"><SquareNav img = {github}><Text>Writing</Text></SquareNav></a>
                <Link to="/about" exact><SquareNav img = {about}><Text>Grafftti the Internet</Text></SquareNav></Link>
                <a href="https://docs.google.com/document/d/1qjGsgXvPJEEsMYeFVT7GEanE5B5o5LaK10I65qfWLBk/edit?usp=sharing" target="_blank"><SquareNav img = {resume}><Text>Processing Art</Text></SquareNav></a>
            </Row>
        </Page>
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
    margin-bottom: 1.5%;
    align-items: center;
`

const Text = styled.h3`
  margin: 0;
  font-size: 25px;
  z-index: 2;
  color: white;
  text-align: center;
`

const Row = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;
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
    margin: 3%;
    margin-bottom: 10%;
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