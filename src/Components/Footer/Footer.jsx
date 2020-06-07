import React, { Component } from 'react'

import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer text-center">
                <div className="card-body">
                    <h5 className="footer-text card-title">Alan Oliveira - Desenvolvimento Web</h5>
                </div>
                <div className="footer-text card-footer">
                    Copyright @ 2020 Alan Oliveira
                </div>
            </div>
        )
    }
}