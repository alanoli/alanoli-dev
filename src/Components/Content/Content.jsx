import React from 'react'
import { useHistory } from "react-router-dom"
import PortifolioContent from "../PortifolioContent/PortifolioContent"

import './Content.scss'

const memePortifolio = require("../../Assets/meme_portifolio.png")
const buildsPortifolio = require("../../Assets/builds_portifolio.png")
const betheheroPortifolio = require("../../Assets/bethehero_portifolio.png")

export default function Content() {
	const history = useHistory()

	return (
		<div className="content-root">
			<h1>Portifolio</h1>
			<PortifolioContent
				image={memePortifolio}
				technologies={["REACT", "NODE", "SQL Server", "KONVA", "Google API", "Axios"]}
				title="Meme creator"
				description={`Web Application for creating and visualizing memes.
				With it it's possible to create and edit meme images directly in the browser.`}
			/>
			<PortifolioContent
				image={buildsPortifolio}
				technologies={["REACT", "SASS"]}
				title="Paixão pelo cantildes"
				description={`Portifolio Web Site for singer. It statically shows YouTube videos.`}
			/>
			<PortifolioContent
				image={betheheroPortifolio}
				technologies={["REACT", "Axios"]}
				title="Be The Hero"
				description={`Web Application that engages people on donating to abandoned animals.
				It was developed as part of the Oministack Week, from Rocket Seat.`}
			/>
			{/* <PortifolioContent
				classType="devops"
				title="DevOps"
				description="Entrega de produtos e serviços de DevOps."
				projectArray={["meme.com", "seuhorario"]}
			/> */}
		</div>
	)
}