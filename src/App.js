import React from "react"
import "./App.css"
import styled from "styled-components"
import { Route, Switch} from "react-router-dom"
import Portfolio from "./components/Portfolio"
import About from "./components/About"
import Welcome from "./components/Welcome"
import PortfolioItem from "./components/PortfolioItem"
import projectInfo from "./resources/ProjectInfo"

function App() {
	return (
		<Wrapper>
			<Switch>
				<Route exact path ='/' component ={Welcome}></Route>
				<Route exact path='/portfolio' component={Portfolio}></Route>
				<Route exact path='/about' component={About}></Route>
				{projectInfo.map(project => {
					return <Route key={project.id} exact path = {`/${project.slug}`} render={ (props) =><PortfolioItem {...props} project={project} />} />
				})}
			</Switch>
		</Wrapper>
	)
}

export default App

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
`