import React from 'react';
import Nav from '../Nav';
import Name from '../Name';
import './contacts.css'



export default function Contacts (){
    return (
        <div >
            <Name />
            <Nav />
            <div className="cont-back">
                <div className="container contact-container">
                    <a href="https://api.whatsapp.com/send?phone=996558770978&text=&source=&data=&app_absent=" className="cont-block">
                        <p className="cont-set">WHATSAPP:</p>
                        <p className="cont-name">+996558770978</p>
                    </a >
                    <a href="https://www.instagram.com/dzhailikeev_/" className="cont-block">
                        <p className="cont-set">INSTAGRAM:</p>
                        <p className="cont-name">dzhailikeev_</p>
                    </a >
                    <a className="cont-block">
                        <p className="cont-set">PHONE:</p>
                        <p className="cont-name">+996558770978</p>
                    </a >
                    <a href="https://github.com/gutsyheart-talgat" className="cont-block">
                        <p className="cont-set">GITHUB:</p>
                        <p className="cont-name">gutsyheart-talgat</p>
                    </a >
                    <a  className="cont-block">
                        <p className="cont-set">GMAIL:</p>
                        <p className="cont-name">dzhailikeevtalgat@gmail.com</p>
                    </a >
                </div>
            </div>
        </div>
    )
}

