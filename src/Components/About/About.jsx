import React from 'react'

import './About.css'
import foto from '../../Assets/fotoPerfil.png'

export default function About({ aboutRef }) {
    return (
        <div ref={aboutRef} className="about-root">
            <div className="about-container">
                <h1>Sobre mim</h1>
                <img src={foto} alt="photo" />
                <p>
                    Desenvolvedor de Aplicações Web e Sites
            </p>
            </div>
        </div>
    )
}