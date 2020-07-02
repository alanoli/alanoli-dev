import React from 'react'
import { useHistory } from 'react-router-dom'
import "./Header.scss"


export default () => {

    const history = useHistory()

    function pushTo(page) {
        window.scroll(0,0)
        history.push(page)
    }

    return (
        <div className="header-main">
            <div className="title-root">
                <p onClick={() => pushTo("/")} className="title pointer-hover">Alan Oli</p>
            </div>
            <div className="menus">
                <div onClick={() => pushTo("/")} className="desktop-menu home pointer-hover">Home</div>
                <div onClick={() => pushTo("/about")} className="desktop-menu about pointer-hover">About</div>
                <div onClick={() => pushTo("/about")} className="contact pointer-hover">Contact</div>
            </div>
        </div>
    )
}