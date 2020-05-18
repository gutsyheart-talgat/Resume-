import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return(
        <div>
            <NavLink to="/">About</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
        </div>
    )
}
