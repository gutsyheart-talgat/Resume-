import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Nav() {
    return(
        <div>
            <Navlink to="/">About</Navlink>
            <Navlink to="/resume">Resume</Navlink>
            <Navlink to="/portfolio">Portfolio</Navlink>
            <Navlink to="/contacts">Contacts</Navlink>
        </div>
    )
    
}