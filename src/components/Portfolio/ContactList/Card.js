import React from 'react'
import { NavLink } from 'react-router-dom'
import './page.css'

function Card({ contact }) {
  return (
    <NavLink 
      style={{display: 'block'}} 
      to={{
        pathname: `/portfolio/contact-list/${contact.id}`,
        state: { contact }
      }}
      key={contact.id}
      className="contact"
    >
        <div className="name">
            <div> имя:</div>
            <div>{contact.name}</div>
            &nbsp;
            <div>номер:</div>
            <div>{contact.phone}</div>
        </div>
    </NavLink>
  )
}

export default Card