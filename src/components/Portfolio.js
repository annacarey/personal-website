import React from 'react';
import styled from 'styled-components'
import MenuBar from './MenuBar'


function Portfolio(props) {

    return (
    <Wrapper>
        <MenuBar />
        <div>Coming soon...</div>
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
    background-color: #bdb4d8;
`