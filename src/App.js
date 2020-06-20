import React, { useRef } from "react"
import { Route, Switch, Redirect, HashRouter } from "react-router-dom"
import "./App.css"
import "../node_modules/antd/dist/antd.css"

import Header from "./Components/Header/Header"
import SubHeader from "./Components/SubHeader/SubHeader"
// import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Content from "./Components/Content/Content"
import AboutPage from "./Components/About/AboutPage"
import About from "./Components/About/About"
import Habilities from "./Components/Habilities/Habilities"
import Stack from "./Components/Stack/Stack"
import WhatsAppButton from "./Components/WhatsAppButton/WhatsAppButton"


export default function App() {

	const stackRef = useRef()
	const aboutRef = useRef()
	const contactRef = useRef()

	return (
		<HashRouter forceRefresh={true}>
			<Header />
			<Switch>
				<Route exact path="/">
					<SubHeader stackRef={stackRef} aboutRef={aboutRef} />
					<div className="main-page">
						<Habilities stackRef={stackRef}/>
						<About aboutRef={aboutRef}/>
						{/* <Contact contactRef={contactRef}/> */}
					</div>
				</Route>
				<Route exact path="/stack">
					<Stack />
					<WhatsAppButton />
				</Route>
				<Route exact path="/projects">
					<Content />
					<WhatsAppButton />
				</Route>
				<Route exact path="/about">
					<AboutPage />
					<WhatsAppButton />
				</Route>
				<Redirect to="/" />
			</Switch>
			<Footer aboutRef={aboutRef} contactRef={contactRef} stackRef={stackRef}/>
		</HashRouter>
	)
}