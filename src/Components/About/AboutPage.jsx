import React from "react"
import About from "./About"

import "./AboutPage.scss"


export default function AboutPage() {
    return (
        <div className="page-root">
            <About />
            <div className="contact">
                <h1>Get in touch</h1>
                <p>Email: alanoli.contact@gmail.com</p>
                <p>Phone: +55 31 99621-9428</p>
            </div>
        </div>
    )
}