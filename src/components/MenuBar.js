import React from 'react';
import styled from 'styled-components'
import {NavLink, Link} from "react-router-dom";

function MenuBar(props) {

    return (
        <Wrapper>
            <InternalLink to="/about" exact>About</InternalLink>
            <InternalLink to="/portfolio" exact>Portfolio</InternalLink>
            <ExternalLink target="_blank" href='https://docs.google.com/document/d/1qjGsgXvPJEEsMYeFVT7GEanE5B5o5LaK10I65qfWLBk/edit?usp=sharing'>Resume</ExternalLink>
            <ExternalLink target="_blank" href='https://github.com/annacarey'>Github</ExternalLink>
            <ExternalLink target="_blank" href='https://medium.com/@anna_carey'>Writing</ExternalLink>
      </Wrapper>
    )
}

export default MenuBar

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-around;
`

const InternalLink = styled(NavLink)`
    color: black;
    padding: 0px;
    text-decoration: none;
    &:visited {
        color: black;
    }
    &:hover {
        color: #322c37;
    }
`

const ExternalLink = styled.a`
    color: black;
    padding: 0px;
    text-decoration: none;
    &:visited {
        color: black;
    }
    &:hover {
        color: #322c37;
    }
`

// purple: #7156a6