import React from "react"
import styled from "styled-components"
import headshot2 from "../resources/images/headshot2.jpg"
import Header from "./Header"

const About = () => {

	return (
		<Wrapper>
			<Header />
			<Page>
				<AboutSection>
					<ImageDiv> <Img src={headshot2}/></ImageDiv>
					<AboutText>
						<Greeting>ANNA CAREY</Greeting>
						<br />
                        <P>I&lsquo;m a full-stack software engineer, currently at <A href="www.vts.com">VTS</A> building in React and Ruby on Rails. Previously, I was Senior Communications Manager at <A href="www.artsy.net">Artsy</A>.</P>
						<br />
                        <P>My stack is JavaScript/React/Redux and Ruby/Rails.</P>
						<br />
                        <P>When I'm not coding, I <A href="https://medium.com/@anna_carey">write about tech</A> for Medium's publication OneZero and do all things fitness, indoors and in nature.</P>
                        <br />
						<Email>Let&lsquo;s build something together! <br /> <a href="mailto:anna@annajcarey.com">anna@annajcarey.com</a>
						</Email>
					</AboutText>
				</AboutSection>
				<QuoteWrapper><Quote>&ldquo;To develop a complete mind: Study the science of art; Study the art of science. Learn how to see. Realize that everything connects to everything else.&ldquo;<br/> <By>- Leonardo DaVinci</By></Quote></QuoteWrapper>
			</Page>
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
`
const AboutSection = styled.div`
    display: flex;
    max-width: 700px;
    margin-top: 5%;
    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Page = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    flex-grow: 1;
`
const Email = styled.h3`
    width: 100%;
    font-size: 12px;
`
const Img = styled.img`
    width: 260px;
`

const A = styled.a`
    color: #011ad8;
    text-decoration: underline;
`
const AboutText = styled.div`
    font-size: 12px;
    display: flex;
    min-width: 290px;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: 30px;
    margin-right: 30px;
    @media (max-width: 400px) {
        margin: 30px 30px 0 30px;
    }
`

const ImageDiv = styled.div`
    display: flex;
    padding-left: 20px;
    align-items: flex-start;
    @media (max-width: 400px) {
        padding: 0px;
    }
`

const Greeting = styled.h3`
    font-size: 20px;
    padding-top: -4px;
    margin: -3px 0 0 0;
    width: 100%;
`

const QuoteWrapper = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2%;
    flex-grow: 1;
    @media (max-width: 400px) {
        padding: 30px;
    }
`
const Quote = styled.h1`
    font-size: 20px;
    text-align: center;
`

const By = styled.div`
   text-align: right;
   font-size: 15px;
   padding-top: 10px;
`

const P = styled.div`
`