import React from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/login.css'
import image from '../../assets/Images/repartidorlogin.png'
import NavLogin from "../../components/nav-login/NavLogin.jsx";
import Register from "../register/Register";
// import Googlebtn from '../components/Googlebtn'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const navigateToFormlogin = () => {
        navigate('/register');
    };

    return (
        <section className="login">
            <div class="login-image-container">
                <img src={image} alt="delivery person" />
            </div>
            <div className="login-content">
                <div className="login-navbar">
                    <NavLogin />
                </div>
                <form class="login-form" >
                    <div className='form-title'>
                        <h2 className='title-log-in'>Inicio de sesión</h2>
                        <h4 className='subtitle-login'>Introduce tus datos para iniciar sesión</h4>
                    </div>
                    <div className="login-inputs">
                        <div className="login-field">
                            <h3 className='title-input'>Email</h3>
                            <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' />
                        </div>
                        <div className="login-field">
                            <h3 className='title-input'>Contraseña</h3>
                            <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="text" required placeholder='*************' />
                        </div>
                        <div className="w-33">
                            <div className="center1">
                                <Register />
                                <button className='btn-sesion'>Inicio de sesión</button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* <Googlebtn /> */}
                <div className="box-register">
                    <h4 className='subtitle-log-in' onClick={navigateToFormlogin}>¿No tienes cuenta? <b>Registrate</b></h4>
                </div>
            </div>
        </section>
    )
}

export default Login