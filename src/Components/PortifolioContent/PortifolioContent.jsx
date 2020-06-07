import React from "react"
import { Carousel } from "antd"

import "./PortifolioContent.css"


export default ({ title, description, projectArray, classType }) => {

	console.log(projectArray)

	return (
		<div className={"portifolio-content-root " + classType}>
			<div className="title-root">
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<Carousel
				dots={true}
				autoplay
				className="carousel"
			>
				{projectArray.map((item, i) => {
					return (
						<h1 key={i}>{item}</h1>
					)
				})}
			</Carousel>
		</div>
	)
}