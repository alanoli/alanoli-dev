import React from "react"
import { useHistory } from "react-router-dom"
import { Carousel } from "antd"
import { DownOutlined } from "@ant-design/icons"

import "./SubHeader.css"
const sampleImg = require("../../Assets/css3.png")

export default function SubHeader({ stackRef }) {
    const history = useHistory()

    return (
        <div className="subheader">
            <div className="root">
                <div className="title">
                    <p className="">Desenvolvimento de ótimas experiências de usuário</p>
                </div>
                <div className="projects">
                    <div className="reference">
                        <p className="projects-descr">Projetos</p>
                        <button onClick={() => history.push("/projects")}>Demais projetos</button>
                    </div>
                    <div className="project-content">
                        <div className="carousel-div">
                            <Carousel>
                                <img style={"height: 80%"} src={sampleImg} alt="" />
                                <img src={sampleImg} alt="" />
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div className="nav-below">
                    <DownOutlined
                        onClick={() => stackRef.current.scrollIntoView({ behavior: "smooth", block: "start" })}
                    />
                </div>
            </div>
        </div>
    )
}