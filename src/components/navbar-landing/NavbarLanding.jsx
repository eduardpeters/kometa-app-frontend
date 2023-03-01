import React from "react";
import logo from '../../assets/Images/logo-kometa.png'
import '../../assets/styles/navbar-landing.css'
import { Link } from 'react-router-dom'

function NavbarLanding() {

    return (
        <>
            <div className='navbar-landing'>
                <div className='left-navbar-landing'>
                    <img className='logo-navbar-landing' height='40' width='136' src={logo} alt="Logo" />
                </div>
                <div className='right-navbar-landing'>
                    <Link to='/login'> <button className="btn-register1">Inicio de Sesión</button></Link>
                    <div>
                        <Link to={'/register'}><button className='btn-register' >Registro</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarLanding