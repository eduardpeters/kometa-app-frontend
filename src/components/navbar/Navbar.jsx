import React from 'react'
import logo from '../../assets/Images/logo-kometa.png'
import "../../assets/styles/navbar.css";
import user from '../../assets/Images/user.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
      navigate('/');
  };

  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <img className='logo-navbar' onClick={navigateToHome} src={logo} alt="Logo" />
      </div>
      <div className='right-navbar'>
        <h5 className='btn-logout'>Cerrar Sesión</h5>
        <img className='user-picture' src={user} alt="user" />
      </div>
    </div>
  )
}

export default Navbar