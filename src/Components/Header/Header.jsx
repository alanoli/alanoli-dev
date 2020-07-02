import React from 'react'
import { useHistory } from 'react-router-dom'
// import { PageHeader } from "antd"
// import './Header.css'
import "./Header.scss"
import gitHubIco from "../../Assets/github_icon.png"


export default () => {

    const history = useHistory()

    return (
        <div className="header-main">
            <div className="title-root">
                <p onClick={() => history.push("/")} className="title">Alan Oli</p>
            </div>
            <div className="menus">
                <div className="desktop-menu home">Home</div>
                <div className="desktop-menu about">About</div>
                <div onClick={() => history.push("/about")} className="contact">Contact</div>
            </div>
        </div>
        // <PageHeader
        //     className="header-component"
        //     title={
        //             <p
        //                 className="header-title"
        //                 onClick={() => history.push("/")}
        //             >Alan Oliveira</p>
        //     }
        //     extra={[
        //         <input
        //             key="1"
        //             className="header-icon" type="image" src={gitHubIco}
        //             onClick={() => window.open("https://github.com/alanoli")}
        //         />
        //     ]}
        // />
    )
}