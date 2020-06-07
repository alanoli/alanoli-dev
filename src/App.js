import React from "react"
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom"
import "./App.css"
import "../node_modules/antd/dist/antd.css"

import Header from "./Components/Header/Header"
import SubHeader from "./Components/SubHeader/SubHeader"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Content from "./Components/Content/Content"
import About from "./Components/About/About"
import Habilities from "./Components/Habilities/Habilities"
import Stack from "./Components/Stack/Stack"


export default function App() {
	return (
		<BrowserRouter forceRefresh={true}>
			<Header />
			<Switch>
				<Route exact path="/">
					<SubHeader />
					<div className="main-page">
						<Content />
						<Habilities />
						<About />
						<Contact />
					</div>
				</Route>
				<Route exact path="/stack">
					<Stack />
				</Route>
				<Redirect to="/" />
			</Switch>
			<Footer />
		</BrowserRouter>
	)
}