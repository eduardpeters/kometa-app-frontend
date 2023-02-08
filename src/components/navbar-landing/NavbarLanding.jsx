import React from "react";
import logo from '../../assets/Images/logo-kometa.png'
import '../../assets/styles/navbar-landing.css'
import { useNavigate } from "react-router";


function NavbarLanding() {
    
    const navigate = useNavigate();

    const navigateInit = () => {
        navigate('/login');
    };

    const navigateRegister = () => {
        navigate('/register');
    };


    return (
        <>
            <div className='navbarLanding'>
                <div className='left-navbarLanding'>
                    <img className='logo-navbarLanding' height='42' width='157' src={logo}  alt="Logo" />
                </div>
                <div className='right-navbarLanding'>
                    <button className='btn-loginlanding' onClick={navigateInit} >Inicio de Sesión</button>
                    <div>
                    <button onClick={navigateRegister} className='btn-register' >Registro</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavbarLanding