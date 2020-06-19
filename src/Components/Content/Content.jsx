import React from 'react'
import { useHistory } from "react-router-dom"
import PortifolioContent from "../PortifolioContent/PortifolioContent"

import './Content.css'

const memePortifolio = require("../../Assets/meme_portifolio.png")
const buildsPortifolio = require("../../Assets/builds_portifolio.png")
const betheheroPortifolio = require("../../Assets/bethehero_portifolio.png")

export default function Content() {
	const history = useHistory()

	return (
		<div className="content-root">
			<h1>Portifólio</h1>
			<PortifolioContent
				image={memePortifolio}
				technologies={["REACT", "NODE", "SQL Server", "KONVA", "Google API", "Axios"]}
				title="Meme creator"
				description={`Aplicativo Web para criação e visualização de memes.
				Com ele é possível criar e editar imagens de memes diretamente pelo browser.`}
			/>
			<PortifolioContent
				image={buildsPortifolio}
				technologies={["REACT", "SASS"]}
				title="Paixão pelo cantildes"
				description={`Web Site de portifólio para canto. Exibe de forma estática
				vídeos do YouTube.`}
			/>
			<PortifolioContent
				image={betheheroPortifolio}
				technologies={["REACT", "Axios"]}
				title="Be The Hero"
				description={`Web App para engajamento de ajudas e doações para animais abandonados.
				Foi desenvolvido no curso da semana Ominstack, da Rocket Seat`}
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