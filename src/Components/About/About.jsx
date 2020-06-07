import React from 'react'

import './About.css'
import foto from '../../Assets/foto.png'

export default function About() {
    return (
        <div className="about-root">
            <div className="about-container">
                <h1>Sobre mim</h1>
                <img src={foto} alt="photo" />
                <p>
                    Desenvolvedor de Aplicações Web e Sites em geral.
                    Implantação de aplicações e DevOps em processos.
            </p>
            </div>
        </div>
    )
}