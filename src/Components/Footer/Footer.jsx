import React from 'react'
import { useHistory } from "react-router-dom"

import './Footer.css'

export default function Footer({ aboutRef, contactRef }) {
    const history = useHistory()
    
    function goToRef(ref) {
        ref.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    return (
        <div className="footer-root">
            <div className="main-title text">Alan Oliveira</div>
            <div className="middle">
                <div className="links">
                    <p onClick={() => goToRef(contactRef)} className="link text">Contato</p>
                    <p onClick={() => history.push("/stack")} className="link text">Tecnologias</p>
                </div>
                <div className="links">
                    <p onClick={() => goToRef(aboutRef)} className="link text">Sobre</p>
                </div>
            </div>
            <div className="footer-footer text">Copyright @ 2020 Alan Oliveira</div>
        </div>
    )
}