import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import loginAPI from "../../services/loginAPI";
import '../../assets/styles/login.css'
import image from '../../assets/Images/repartidorlogin.png'
import NavLogin from "../../components/nav-login/NavLogin.jsx";
import { useUserContext } from "../../context/UserContext";
// import Googlebtn from '../components/Googlebtn'

function Login() {

    const navigate = useNavigate();

    const userContext = useUserContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [storeToken, setStoreToken] = useState(false);

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const response = await loginAPI.postLogin(email, password);
        if (response.error) {
            console.error(response.error);
        } else {
            console.log(`You are a ${response.userRole} with UUID: ${response.userUUID}. This is your token: ${response.token}`);
            userContext.setUserUUID(response.userUUID);
            userContext.setToken(response.token);
            userContext.setRole(response.userRole);
            console.log("Store token in localStorage?", storeToken);
            if (storeToken) {
                localStorage.setItem('kometaToken', response.token);
            }
            if (response.userRole == 'client'){
            navigate('/order');
            }
            else if (response.userRole == 'delivery'){
                navigate('/order-delivery');
            }

        }
    }

    return (
        <section className="login">
            <div className="login-image-container">
                <img src={image} alt="delivery person" />
            </div>
            <div className="login-content">
                <div className="login-navbar">
                    <NavLogin />
                </div>
                <form className="login-form" onSubmit={handleLoginSubmit}>
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
                        <div className="check-container">
                            <input className="checkbox" onChange={() => setStoreToken(!storeToken)} type="checkbox" id="remember" />
                            <label htmlFor="remember" className="checkbox-text"> Recuérdame</label>
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