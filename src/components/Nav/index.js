import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css'

export default function Nav() {
    return(
        <div>
            <NavLink activeClassName={style.active} exact to="/">About</NavLink>
            <NavLink activeClassName={style.active} exact to="/resume">Resume</NavLink>
            <NavLink activeClassName={style.active} exact to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName={style.active} exact to="/contacts">Contacts</NavLink>
        </div>
    )
}
