import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './nav.module.css'
export default function Nav() {
    return(
        <div className={style["background"]}>
            <div className={style["nav"]}>
                <NavLink exact className={style["text"]}  to="/">About</NavLink>
                <NavLink exact className={style["text"]} to="/resume">Resume</NavLink>
                <NavLink exact className={style["text"]} to="/portfolio">Portfolio</NavLink>
                <NavLink exact className={style["text"]} to="/contacts">Contacts</NavLink>
            </div>
        </div>
    )
}
