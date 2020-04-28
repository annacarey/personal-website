import React from 'react';
import styled from 'styled-components'
import jt6 from '../resources/images/jt6.jpg'
import MenuBar from './MenuBar'

function Welcome() {
  return (
    <Wrapper>
        
      <MenuBar />
      <ContentWrapper>
            <Header>Anna Carey</Header>
            <p>Full-stack software engineer passionate about the intersection of technology and art.</p>
        </ContentWrapper>
    </Wrapper>
  );
}

export default Welcome;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-image: url(${jt6}) ;
  background-repeat: no-repeat;
  background-size: cover;
`
const Header = styled.h1`
    font-size: 80px;
    margin: 0px;
    text-align: center;
`
const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:auto;
    padding-left: 20px;
    padding-right: 20px;
`

