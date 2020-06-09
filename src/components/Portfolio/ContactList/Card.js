import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './page.module.css'

function Card({ contact }) {
  return (
    <NavLink 
      style={{display: 'block'}} 
      to={{
        pathname: `/portfolio/contact-list/${contact.id}`,
        state: { contact }
      }}
      key={contact.id}
      className={style.contact}
    >
        <div className={style.name}>
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