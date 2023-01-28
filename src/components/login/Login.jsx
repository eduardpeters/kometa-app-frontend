import React from "react";
import NavLogin from "../../components/nav-login/NavLogin.jsx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/styles/login.css'
import image from '../../assets/Images/repartidor.jpg'
import Register from "../register/Register";
// import Googlebtn from '../components/Googlebtn'

function Login() {

    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const navigateToFormlogin = () => {
        navigate('/register');
    };

    return (
        <>
            <section>
                <div class="contenedor">
                    <div class="contenedorImagen">
                        <img src={image} alt="" />
                    </div>
                    <div className="contenedorContenido">
                        <div className="navBarUno"><NavLogin /></div>
                        <div class="contenedorFormulario" >
                            <div className='init-title'>
                                <h2 className='title-log-in'>Inicio de sesión</h2>
                                <h4 className='subtitle-login'>Introduce tus datos para iniciar sesión</h4>
                            </div>
                            <div className="inputs">
                                <div>
                                    <h3 className='title-input'>Email</h3>
                                    <input className='input' value={usuario} onChange={(e) => setUsuario(e.target.value)} type="text" required placeholder='kometa@kometa.com' />
                                </div>
                                <div>
                                    <h3 className='title-input'>Contraseña</h3>
                                    <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type="text" required placeholder='*************' />
                                </div>
                                <div className="w-33">
                                    <div className="center1">
                                        <Register />
                                        <button className='btn-sesion'>Inicio de sesión</button>
                                    </div>
                                    {/* <Googlebtn /> */}
                                    <div className="link-register">
                                        <h4 className='subtitle-register' onClick={navigateToFormlogin}>¿No tienes cuenta? <b>Registrate</b></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login