import React from 'react'
import { useHistory } from "react-router-dom"
import PortifolioContent from "../PortifolioContent/PortifolioContent"

import './Content.css'

// import seuhorario from "../../Assets/img_placeholder.png"
// import gabrielamuniz from "../../Assets/img_placeholder.png"

export default function Content() {
	const history = useHistory()

	return (
		<div className="content-root">
			<h1>Produtos</h1>
			<PortifolioContent
				classType="web-apps"
				title="Web Apps"
				description="Com o uso de aplicativos web seu negócio ..."
				projectArray={["meme.com", "seuhorario"]}
			/>
			<PortifolioContent
				classType="web-sites"
				title="Web Sites"
				description="Sites estáticos simples e de usos diversos."
				projectArray={["meme.com", "seuhorario"]}
			/>
			<PortifolioContent
				classType="devops"
				title="DevOps"
				description="Entrega de produtos e serviços de DevOps."
				projectArray={["meme.com", "seuhorario"]}
			/>
		</div>
	)
}