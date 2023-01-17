import React from 'react'
import logo from './logo-kometa.png'
import "../../assets/styles/navbar.css";
import user from './user.png';

const navbar = () => {
  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <img className='logo-navbar' src={logo} alt="Logo" />
      </div>
      <div className='right-navbar'>
        <h5 className='btn-logout'>Cerrar Sesión</h5>
        <img className='user-picture' src={user} alt="user" />
      </div>
    </div>
  )
}

export default navbar