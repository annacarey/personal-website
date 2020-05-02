import React from 'react';
import styled from 'styled-components'
import Header from './Header'
import Iframe from 'react-iframe'

function PortfolioItem(props) {

    const project = props.project

    return (
        <Wrapper>
            <Header />
            <Page>
                <HeroImage position={project.image.position} imageURL= {project.image.imageURL}></HeroImage>
                <MainInfo>
                    <Introduction>
                        <TitleContainer href={project.websiteURL} target="_blank"><Title>{project.name.toUpperCase()}</Title></TitleContainer>
                        <P>{project.longDescription}</P>
                        <VideoContainer>
                            <Iframe url={project.demoVideo}
                                width="100%"
                                height= '100%'
                                position='absolute'
                                />
                        </VideoContainer>
                    </Introduction>
                    <InfoBox>
                        <Table>
                            <TR>
                                <TD><strong>Name:</strong></TD>
                                <TD>{project.name}</TD>
                            </TR>
                            <TR>
                                <TD><strong>Website:</strong></TD>
                                <TDVal><A href={project.websiteURL}>{project.websiteURL}</A>
                                </TDVal>
                            </TR>
                            <TR>
                                <TD><strong>About:</strong></TD>
                                <TD>{project.shortDescription}</TD>
                            </TR>
                            <TR>
                                <TD><strong>Github:</strong></TD>
                                <TD>{project.github.main!== "" && <A href={project.github.main}>Repo</A>} 
                                    {project.github.frontend!== "" && <A href={project.github.frontend}>Frontend</A>} {" "}
                                    {project.github.backend!== "" && <A href={project.github.backend}>Backend</A>}
                                </TD>
                            </TR>
                            <TR>
                                <TD><strong>Technologies:</strong></TD>
                                <TD>{project.technologies}</TD>
                            </TR>
                        </Table>
                        
                    </InfoBox>
                </MainInfo>
            </Page>
            
        </Wrapper>
      
    )
}

export default PortfolioItem

const Table = styled.table`
`
const TR = styled.tr`
    vertical-align: top;
`

const TD =styled.td`
    padding: 4px;
`

const TDVal =styled.td`
    word-break: break-all;
`

const A = styled.a`
    color: #011ad8;
    text-decoration: underline;
`

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
`


const HeroImage = styled.div`
    display: flex;
    height: 50vh;
    width: 100%;
    background-image: ${props => `url(${props.imageURL})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => props.position };
`
const MainInfo = styled.div`
    display: flex;
    // flex-wrap: wrap;
    padding-bottom: 5%;
    box-sizing: content-box;
    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const Introduction = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    min-width: 400px;
    padding-top: 3%;
    padding-bottom: 3%;
`
const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 0px;
    width: 90%;
    padding-bottom: 56.25%;
    position: relative;
    @media (max-width: 400px) {
        margin-bottom: -3%;
    }
`

const InfoBox = styled.div`
    background-color: #ededed;
    padding: 2%;
    font-size: 12px;
    height: 100%;
    box-sizing: border-box;
    @media (max-width: 400px) {
        width: 86%;
    }
`

const Title = styled.h3`
    margin: 0px;
    font-size: 30px;
`

const TitleContainer = styled.a`
    width: 90%;
    padding-bottom: 20px;
    text-align: center;
`

const P = styled.p`
    margin: 0px;
    font-size: 12px;
    width: 90%;
    padding-bottom: 6%;
`