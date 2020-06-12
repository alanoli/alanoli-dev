import React from "react"
import { useHistory } from "react-router-dom"
import { Parallax } from "react-parallax"

import "./Habilities.css"
import tech1 from "../../Assets/html.png"
import tech2 from "../../Assets/css3.png"
import tech3 from "../../Assets/javascript.png"
import tech4 from "../../Assets/sql.png"
import tech5 from "../../Assets/react.png"
import tech6 from "../../Assets/docker.png"

export default function Habilities({ stackRef }) {
	const history = useHistory()
	return (
		<Parallax
			blur={2}
			bgImage={require("../../Assets/background_2.jpg")}
			bgImageAlt=""
			strength={100}
			style={{"width": "100%"}}
		>
			{/* <div style={{ height: '200px' }} */}
			<div ref={stackRef} className="habilities">
				<h1>Tecnologias utilizadas</h1>
				<div className="habilities-root">
					<img src={tech1} className="hability-item" alt="photo" />
					<img src={tech2} className="hability-item" alt="photo" />
					<img src={tech3} className="hability-item" alt="photo" />
					<img src={tech4} className="hability-item" alt="photo" />
					<img src={tech5} className="hability-item" alt="photo" />
					<img src={tech6} className="hability-item" alt="photo" />
				</div>
				{/* <p onClick={() => history.push("/stack")} >Saiba mais</p> */}
			</div>
		</Parallax>
	)
}