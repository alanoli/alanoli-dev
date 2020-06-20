import React from "react"
import "./WhatsAppButton.css"

import wppLogo from "../../Assets/whatsapp-logo.png"
// import bubble from "../../Assets/bubble.jpg"

const wppContactLink = "https://api.whatsapp.com/send?phone=+5531996219428"

export default function WhatsAppButton() {
    
    return (
        <div className="wpp-root">
            <img id="logo" onClick={() => window.open(wppContactLink)} src={wppLogo} alt=""/>
            <p id="message">Entre em contato!</p>
            {/* <img id="message" src={bubble} alt=""/> */}
        </div>
    )
}