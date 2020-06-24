import React from 'react'
import { useHistory } from 'react-router-dom'
// import { PageHeader } from "antd"
import './Header.css'
import gitHubIco from "../../Assets/github_icon.png"


export default () => {

    const history = useHistory()

    return (
        <div className="header-root">
            <p className="title">Alan Oli</p>
            <div className="home">Home</div>
            <div className="about">About</div>
            <div className="contact">Contact</div>
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