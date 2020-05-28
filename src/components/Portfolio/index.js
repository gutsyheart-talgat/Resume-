import React from 'react';
import Nav from '../Nav'
import { NavLink } from 'react-router-dom';
import Name from '../Name'


export default function Portfolio (){
    return(
        <div>
            <Name />
            <Nav />
            <div>
            <NavLink  to="/portfolio/contact-list">Contact List</NavLink>
            </div>
        </div>
    )
}