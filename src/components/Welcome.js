import React from 'react';
import styled from 'styled-components'
import jamesturrell from '../resources/images/jamesturrell.jpeg'
import github from '../resources/images/github.png'
import portfolio from '../resources/images/portfolio.jpg'
import resume from '../resources/images/resume.jpg'
import about from '../resources/images/about.jpg'
import Header from './Header'
import {NavLink, Link} from "react-router-dom";

function Welcome() {
  return (
    <Wrapper>
      <Header />
      <MainImageDiv>
        <Tagline>Full-stack software engineer at the intersection of technology and art.</Tagline>
      </MainImageDiv>
      <BottomNav>
          <Row>
            <Link to="/portfolio" exact><SquareNav img = {portfolio}><Text>Portfolio</Text></SquareNav></Link>
            <Link to="/about" exact><SquareNav img = {about}><Text>About</Text></SquareNav></Link>
          </Row>
          <Row>
            <a href="https://docs.google.com/document/d/1qjGsgXvPJEEsMYeFVT7GEanE5B5o5LaK10I65qfWLBk/edit?usp=sharing" target="_blank"><SquareNav img = {resume}><Text>Resume</Text></SquareNav></a>
            <a href="https://github.com/annacarey" target="_blank"><SquareNav img = {github}><Text>Github</Text></SquareNav></a>
          </Row>
      </BottomNav>
    </Wrapper>
  );
}

export default Welcome;

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
  font-size: 25px;
`

const BottomNav = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5%;
    margin-bottom: 1.5%;
`
const Row = styled.div`
    display: flex;
    width: 50%;
    justify-content: space-evenly;
    flex: 1;
    flex-wrap: wrap;
    @media (max-width: 400px) {
      display: block;
      margin-bottom: -1%;
    }
`
const SquareNav = styled.div`
    height: 22vw;
    width: 22vw;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 3%;
    @media (max-width: 400px) {
      height: 44vw;
      width: 44vw;
      margin-top: 1.5%;
    }
    &:before {
      opacity: 0.4;
      background-image: ${props => `url(${props.img})`} ;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      content: "";
      width: 22vw;
      height: 22vw;
      z-index: -2;
      @media (max-width: 400px) {
        height: 44vw;
        width: 44vw;
      }
      position: absolute;
    }
`



const MainImageDiv = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:before {
    opacity: 0.6;
    background-image: url(${jamesturrell}) ;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    content: "";
    width: 100%;
    height: 50vh;
    z-index: -2;
    position: absolute;
  }
`
const Tagline = styled.h3`
  font-size: 20px;
  margin: 0px;
  text-align: center;
  width: 100%;
`
// blue color #011ad8
