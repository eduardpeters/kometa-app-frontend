import React from 'react'
import logo from '../../assets/Images/logo-kometa.png'
import "../../assets/styles/navbar.css";
import deliver from '../../assets/Images/delivery-man.png';
import { useNavigate } from 'react-router-dom';

const NavbarDeliver = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
      navigate('/order-delivery');
  };

  const navigateToLanding = () => {
    localStorage.removeItem('kometaToken');
    navigate('/');
};

  return (
    <div className='navbar'>
      <div className='left-navbar'>
        <img className='logo-navbar' onClick={navigateToHome} src={logo} alt="Logo" />
      </div>
      <div className='right-navbar'>
        <h5 className='btn-logout' onClick={navigateToLanding}>Cerrar Sesión</h5>
        <img className='user-picture' src={deliver} alt="user" />
      </div>
    </div>
  )
}

export default NavbarDeliver