import React from "react"
import "./PortifolioContent.scss"


export default ({ title, description, image, classType, technologies }) => {

	return (
		<div className={"portifolio-content-root " + classType}>
			<div className="image-root">
				<img src={image} alt="" />
			</div>
			<div className="meta">
				<h2>{title}</h2>
				<div className="tech">
					{technologies.map((item) => {
						return <span>{item}</span>
					})}
				</div>
				<p className="descr">{description}</p>
			</div>
		</div>
	)
}