import React from "react";
import logo from '../../assets/Images/logo-kometa.png'
import '../../assets/styles/navbar-landing.css'
import { Link } from 'react-router-dom'

function NavbarLanding() {

    return (
        <>
            <div className='navbarLanding'>
                <div className='left-navbarLanding'>
                    <img className='logo-navbarLanding' height='42' width='157' src={logo} alt="Logo" />
                </div>
                <div className='right-navbarLanding'>
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