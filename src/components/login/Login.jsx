import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/login.css'
import image from '../../assets/Images/repartidorlogin.png'
import NavLogin from "../../components/nav-login/NavLogin.jsx";
// import Googlebtn from '../components/Googlebtn'

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLoginSubmit(event) {
        event.preventDefault();
        console.log("Post Login!");
    }

    return (
        <section className="login">
            <div class="login-image-container">
                <img src={image} alt="delivery person" />
            </div>
            <div className="login-content">
                <div className="login-navbar">
                    <NavLogin />
                </div>
                <form class="login-form" onSubmit={handleLoginSubmit}>
                    <div className='form-title'>
                        <h2 className='title-log-in'>Inicio de sesión</h2>
                        <h4 className='subtitle-login'>Introduce tus datos para iniciar sesión</h4>
                    </div>
                    <div className="login-inputs">
                        <div className="login-field">
                            <label htmlFor="email" className='title-input'>Email</label>
                            <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' id="email" />
                        </div>
                        <div className="login-field">
                            <label htmlFor="password" className='title-input'>Contraseña</label>
                            <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="center4">
                            <div class="check-container">
                                <input className="checkbox" type="checkbox" id="remember" />
                                <label htmlFor="remember" className="slider"> Recuérdame</label>
                            </div>
                        </div>
                        <button className='btn-login' type="submit">Inicio de sesión</button>
                    </div>
                </form>
                {/* <Googlebtn /> */}
                <div className="box-register">
                    <h4 className='subtitle-log-in' >
                        <Link to="/register" className="text-link">
                            ¿No tienes cuenta? <b>Registrate</b>
                        </Link>
                    </h4>
                </div>
            </div>
        </section>
    )
}

export default Login;