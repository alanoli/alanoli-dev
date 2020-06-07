import React from 'react'
import { useHistory, Link } from 'react-router-dom'
import { PageHeader } from "antd"
import './Header.css'
import gitHubIco from "../../Assets/github_icon.png"


export default () => {

    const history = useHistory()

    return (
        <PageHeader
            className="header-component"
            title={
                    <p
                        className="header-title"
                        onClick={() => history.push("/")}
                    >Alan Oliveira</p>
            }
            extra={[
                <input
                    key="1"
                    className="header-icon" type="image" src={gitHubIco}
                    onClick={() => window.open("https://github.com/alanoli")}
                />
            ]}
        />
    )
}