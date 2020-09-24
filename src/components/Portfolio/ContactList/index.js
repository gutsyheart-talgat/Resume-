import React from 'react'
import Card from './Card'
import './page.css'
import Name from '../../Name'
import Nav from '../../Nav'

function ContactList() {
  const initialState = {
    contacts: [],
    name: '',
    phone: ''
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'CHANGE_NAME':
        return {...state, name: action.payload };
      case 'CHANGE_PHONE':
        return {...state, phone: action.payload };
      case 'ADD_NEW_CONTACT':
        return {...state, contacts: [...state.contacts, action.payload] };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = React.useReducer(reducer, initialState)
  const { name, phone, contacts } = state


  const handleAdd = (e) => {
    e.preventDefault()
    if (!name || !phone) {
      alert('заполните все поля')
      return
    }
    const newContact = { id: Math.random()*100, name, phone }
    dispatch({ type: 'CHANGE_NAME', payload: '' })
    dispatch({ type: 'CHANGE_PHONE', payload: '' })
    dispatch({ type: 'ADD_NEW_CONTACT', payload: newContact })
  }

  return (
    <div>
      <Name />
      <Nav />
      <div className="page">
        <div className="container">
          <form className="form col-12 col-md-6 col-lg-6">
            <h3>Новый контакт</h3>
            <input 
              type="text" 
              placeholder="Имя" 
              value={name}
              onChange={(e) => dispatch({ type: 'CHANGE_NAME', payload: e.target.value })}
            />
            <input 
              type="text" 
              placeholder="Телефон" 
              value={phone}
              onChange={(e) => dispatch({ type: 'CHANGE_PHONE', payload: e.target.value })}
            />
            <button
              onClick={handleAdd}
              className="btn-Add"
            >
              Добавить
            </button>
          </form>
          <div className="list">
          { contacts.map(c => <Card key={c.id} contact={c}/>) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactList