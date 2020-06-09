import React from 'react';
import Nav from '../Nav'
import { NavLink } from 'react-router-dom';
import Name from '../Name';
import './portfolio.css'


export default function Portfolio (){
    return(
        <div>
            <Name />
            <Nav />
            <div className="port-back">
               <div className="container port-container">
                    <NavLink  to="./portfolio/contact-list" className="port-link">Contact List</NavLink>
                    <NavLink  to="./portfolio/Web-page-layout" className="port-link">Web page layout</NavLink>
               </div>
            </div>
        </div>
    )
}