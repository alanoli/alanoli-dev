import React from "react"
import { useHistory } from "react-router-dom"
import { Carousel } from "antd"
import { DownOutlined } from "@ant-design/icons"

import "./SubHeader.css"
const memePortifolio = require("../../Assets/meme_portifolio.png")
const buildsPortifolio = require("../../Assets/builds_portifolio.png")
const betheheroPortifolio = require("../../Assets/bethehero_portifolio.png")

export default function SubHeader({ stackRef, aboutRef }) {
	const history = useHistory()

	return (
		<div className="subheader">
			<div className="sub-root">
				<div className="title">
					<p className="">Soluções que geram valor</p>
				</div>
				<div className="projects">
					<div className="reference">
						<p className="projects-descr">Projetos</p>
						{/* <p onClick={() => stackRef.current.scrollIntoView({ behavior: "smooth", block: "start" })} className="more">Saiba mais</p> */}
						<p onClick={() => { window.scroll(0,0); history.push("/projects") }} className="more">Saiba mais</p>
					</div>
					<div className="project-content">
						<img src={buildsPortifolio} alt="" />
						<img src={betheheroPortifolio} alt="" />
						<img src={memePortifolio} alt="" />
						{/* <Carousel effect={"fade"} autoplay autoplaySpeed={3000}>
								<img src={memePortifolio} alt="" />
								<img src={buildsPortifolio} alt="" />
							</Carousel> */}
					</div>
				</div>
				{/* <div className="nav-below">
					<DownOutlined
						onClick={() => stackRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}
					/>
				</div> */}
			</div>
		</div>
	)
}