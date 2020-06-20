import React from 'react'
import { useHistory } from "react-router-dom"

import './Footer.css'

export default function Footer() {
    const history = useHistory()

    function pushTo(page) {
        window.scroll(0,0)
        history.push(page)
    }

    return (
        <div className="footer-root">
            <div className="main-title text">Alan Oliveira</div>
            <div className="middle">
                <div className="links">
                    <p onClick={() => pushTo("/stack")} className="link text">Tecnologias</p>
                    <p onClick={() => pushTo("/about")} className="link text">Sobre</p>
                    <p onClick={() => pushTo("/projects")} className="link text">Portifólio</p>
                </div>
                <div className="links">
                    <p>+55 (31) 99621-9428</p>
                    <p>alanoli.contact@gmail.com</p>
                </div>
            </div>
            <div className="footer-footer text">Copyright @ 2020 Alan Oliveira</div>
        </div >
    )
}