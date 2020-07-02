import React from "react"
import "./Stack.scss"

import webApp from "../../Assets/webapp.gif"
import webSite from "../../Assets/builds_portifolio.png"

const webSiteTech = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
    "SASS"
]

const webAppTech = [
    "HTML5",
    "CSS3",
    "JAVASCRIPT",
    "REACT",
    "SASS",
    "NODE",
    "SQL Server",
    "CASSANDRA"
]

export default function Stack() {

    return (
        <div className="stack-root">
            <h1 className="title">Services and Technologies</h1>
            <div className="stack-type">
                <h1 className="type-title">Web Sites</h1>
                <img src={webSite} alt="" />
                <h2 className="definition">Definition</h2>
                <p className="descr">{`Web Sites are web pages displayed with static content.
                It's ideal to show your work to the world.`}</p>
                <h2 className="definition">Applicability</h2>
                <p className="descr">{`Are ideally used for display static content - text, images and videos
                 - that is, content that does not change often and is not interactable with the user.`}</p>
                <h2 className="definition">Applied technologies</h2>
                <div className="tech">
                    {webSiteTech.map((item) => {
                        return <span>{item}</span>
                    })}
                </div>
            </div>
            <div className="stack-type">
                <h1 className="type-title">Web Applications</h1>
                <img src={webApp} alt="" />
                <h2 className="definition">Definition</h2>
                <p className="descr">{`The applications are dynamic pages rich in funcionalities.
                They look like programs and apps`}</p>
                <h2 className="definition">Applicability</h2>
                <p className="descr">{`They're used in contexts that demand more interativity with the end-user.
                Some exemples are e-commerces, applications and integrations with payment methods.`}</p>
                <h2 className="definition">Applied technologies</h2>
                <div className="tech">
                    {webAppTech.map((item) => {
                        return <span>{item}</span>
                    })}
                </div>
            </div>
        </div>
    )
}