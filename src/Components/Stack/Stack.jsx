import React from "react"
import "./Stack.css"

import img from "../../Assets/background.jpg"
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
            <h1 className="title">Serviços e tecnologias</h1>
            <div className="stack-type">
                <h1 className="type-title">Web Sites</h1>
                <img src={webSite} alt="" />
                <h2 className="definition">Definição</h2>
                <p className="descr">{`Web Sites são páginas na internet exibidas
                com conteúdo estático. Ideal para mostrar o seu trabalho para o mundo.
                Além disso, o seu desenvolvimento `}</p>
                <h2 className="definition">Aplicabilidade</h2>
                <p className="descr">{`São ideias para exibição de conteúdos estáticos
                 - textos, imagens e videos - ou seja, conteúdos fixos nas páginas do site.`}</p>
                <h2 className="definition">Tecnologias usadas</h2>
                <div className="tech">
                    {webSiteTech.map((item) => {
                        return <span>{item}</span>
                    })}
                </div>
                {/* <p className="descr"></p> */}
            </div>
            <div className="stack-type">
                <h1 className="type-title">Aplicações Web</h1>
                <img src={webApp} alt="" />
                <h2 className="definition">Definição</h2>
                <p className="descr">{`As Aplicações são páginas dinâmicas e ricas em
                funcionalidades. Se assemelham a programas e aplicativos.`}</p>
                <h2 className="definition">Aplicabilidade</h2>
                <p className="descr">{`Utilizadas em contextos que demandam mais interatividade
                com os seus usuários. Nesses casos entram e-commerces, aplicativos,
                integrações com meios de pagamentos.`}</p>
                <h2 className="definition">Tecnologias usadas</h2>
                <div className="tech">
                    {webAppTech.map((item) => {
                        return <span>{item}</span>
                    })}
                </div>
                {/* <p className="descr"></p> */}
            </div>
        </div>
    )
}