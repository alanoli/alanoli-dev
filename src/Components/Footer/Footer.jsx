import React from 'react'
import { useHistory } from "react-router-dom"

import './Footer.scss'

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
                    <p onClick={() => pushTo("/stack")} className="link text">Technology</p>
                    <p onClick={() => pushTo("/about")} className="link text">About</p>
                    <p onClick={() => pushTo("/projects")} className="link text">Portifolio</p>
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