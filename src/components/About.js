import React from 'react';
import styled from 'styled-components'
import MenuBar from './MenuBar'
import headshot from '../resources/images/headshot.jpeg'

function About(props) {

    return (
    <Wrapper>
        <MenuBar />
        <Page>
        <AboutSection>
            <ImageDiv> <Img src={headshot}/></ImageDiv>
            
            <AboutText>
                <Greeting>Hi, I'm Anna!</Greeting>
                I'm a full-stack software engineer with a background in communications and art. 
                <br /> <br />
                Software has the power to solve real world problems, so I'm looking to join a team of builders who are tackling something big.
                <br /> <br />
                My programming experience includes JavaScript, React, Ruby, Rails, Redux, SQL, Sinatra, ActiveRecord, Git, HTML, CSS, and APIs such as Twilio, Google Natural Language Processing, and Google Geocoding.
                <br /> <br />
                <Email>Let's build something together! => <a href="mailto:anna@annajcarey.com">anna@annajcarey.com</a>
</Email>
            </AboutText>
        </AboutSection>
        </Page>
        <Quote> "To develop a complete mind: Study the science of art; Study the art of science. Learn how to see. Realize that everything connects to everything else." <br/> <By>- Leonardo DaVinci</By></Quote>

    </Wrapper>
    )
}

export default About

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    background-color: #bdb4d8;
`

const Page = styled.div`
    display: flex;
    flex-direction: column;

`
const Email = styled.div`
    width: 100%;
`
const Img = styled.img`
    border-radius: 20px;
`
const AboutText = styled.div`
    font-size: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    box-sizing: border-box;
`

const ImageDiv = styled.div`
    display: flex;
    padding-left: 20px;
    align-items: flex-start;
`

const Greeting = styled.div`
    font-size: 20px;
    padding-bottom: 10px;
    width: 100%;
`

const AboutSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-grow: 1;
`

const Quote = styled.div`
    margin: 0px;
    padding: 20px;
    align-self: flex-end;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const By = styled.div`
   text-align: right;
`