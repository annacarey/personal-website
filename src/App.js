import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import projectInfo from './resources/ProjectInfo'
import jt5 from './resources/images/jt5.jpg'
import { Route, Switch, Link} from 'react-router-dom';
import Portfolio from './components/Portfolio'
import About from './components/About'
import Welcome from './components/Welcome'

function App() {
  return (
    <Wrapper>
      <Switch>
        <Route exact path ='/' component ={Welcome}></Route>
        <Route exact path='/portfolio' component={Portfolio}></Route>
        <Route exact path='/about' component={About}></Route>
      </Switch>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: url(${jt5}) ;
  background-repeat: no-repeat;
  background-size: cover;
`