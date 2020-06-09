import React from 'react'

import './Contact.css'

export default function Contact({ contactRef }) {

    return (
        <div ref={contactRef} className="contact-page">
            <div className="contact-container">
                <h1 className="title">Fale comigo</h1>
                <form>
                    <div className="form-group">
                        {/* <label for="exampleInputEmail1">Nome</label> */}
                        <input type="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Nome" />
                        {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                    </div>
                    <div className="form-group">
                        {/* <label for="exampleInputPassword1">Password</label> */}
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <textarea type="message" className="form-control" id="message" rows="5" placeholder="Sua mensagem" />
                    </div>
                    <button type="submit" className="btn">Enviar</button>
                </form>
            </div>
        </div>
    )
}