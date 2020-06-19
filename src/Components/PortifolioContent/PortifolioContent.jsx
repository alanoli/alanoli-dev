import React from "react"
import { Carousel } from "antd"
import "./PortifolioContent.css"


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
				{/* <p>REACT JS CSS ...</p> */}
				<p className="descr">{description}</p>
			</div>
			{/* <Carousel
				dots={true}
				autoplay
				className="carousel"
			>
				{projectArray.map((item, i) => {
					return (
						<h1 key={i}>{item}</h1>
					)
				})}
			</Carousel> */}
		</div>
	)
}