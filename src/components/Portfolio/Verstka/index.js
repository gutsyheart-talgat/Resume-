import React from 'react'
import Name from '../../Name'
import Nav from '../../Nav'
import './verstka.css'
import {NavLink} from 'react-router-dom'

export default function verstka (){
    return (
        <div>
            <Name />
            <Nav />
            <div className="verstka-back">
                <div className="verstka-container">
                    <a href="https://github.com/gutsyheart-talgat/mariposa" className="verstka-proekt mariposa">
                         <p className="verstka-name">MARIPOSA</p>    
                    </a>
                    <a href="https://github.com/gutsyheart-talgat/apple" className="verstka-proekt apple">
                         <p className="verstka-name">APPLE</p>
                    </a>
                </div>
            </div>

        </div>
    )
}