import React from "react"
import { useHistory } from "react-router-dom"
import { Carousel } from "antd"
import { DownOutlined } from "@ant-design/icons"

import "./Subheader.scss"
const memePortifolio = require("../../Assets/meme_portifolio.png")
const buildsPortifolio = require("../../Assets/builds_portifolio.png")
const betheheroPortifolio = require("../../Assets/bethehero_portifolio.png")

export default function SubHeader({ stackRef, aboutRef }) {
	const history = useHistory()

	return (
		<div className="subheader">
			<div className="sub-root">
				<div className="title">
					<p className="t1">Hi, I'm Alan.</p>
					<p className="t2">I design and code Web Interfaces</p>
				</div>
				<div className="projects">
					<div className="reference">
						<p onClick={() => { window.scroll(0,0); history.push("/projects")} } className="projects-descr">View portifolio</p>
					</div>
					<div className="project-content">
						<img src={betheheroPortifolio} alt="" />
						<img src={buildsPortifolio} alt="" />
						<img src={memePortifolio} alt="" />
						<p className="proj-descr"></p>
					</div>
				</div>
			</div>
		</div>
	)
}