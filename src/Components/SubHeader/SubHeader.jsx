import React, { Component } from 'react'
import { Parallax } from "react-parallax"


import './SubHeader.css'

export default class SubHeader extends Component {
    render() {
        return (
            <Parallax
                blur={2}
                bgImage={require("../../Assets/background.jpg")}
                bgImageAlt=""
                strength={80}
            >
                <div className="subheader">
                    <h1 className="">Alan Oliveira</h1>
                    <p className="">Desenvolvimento Web</p>
                </div>
            </Parallax>
        )
    }
}