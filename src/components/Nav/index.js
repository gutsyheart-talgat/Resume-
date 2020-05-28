import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css'
export default function Nav() {
    return(
        <div className="background">
            <div className="container nav">
                <NavLink  activeClassName={style.active} exact className="text"  to="/">About</NavLink>
                <NavLink  activeClassName={style.active} exact className="text" to="/resume">Resume</NavLink>
                <NavLink  activeClassName={style.active} exact className="text" to="/portfolio">Portfolio</NavLink>
                <NavLink  activeClassName={style.active} exact className="text" to="/contacts">Contacts</NavLink>
            </div>
        </div>
    )
}
