import React from 'react';
import { useState } from 'react';
import loginAPI from "../../services/loginAPI";
import { Link } from 'react-router-dom';
import NavLogin from '../nav-login/NavLogin';
import image from '../../assets/Images/repartidorlogin.png'
import '../../assets/styles/register-work.css'


function RegisterWork() {


    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [storeToken, setStoreToken] = useState(false);

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const response = await loginAPI.postLogin(email, password);
        if (response.error) {
            console.error(response.error);
        } else {
            console.log(`You are a ${response.userRole} with UUID: ${response.userUUID}. This is your token: ${response.token}`);
        }
        console.log("Store token in localStorage?", storeToken);
    }

    return (
        <section className='register-work'>
            <div className="register-work-image-container">
                <img src={image} alt="delivery-person-work" />
            </div>
            <div className="register-work-content">
                <div className="register-work-navbar">
                    <NavLogin />
                </div>
                <form className="register-work-form" onSubmit={handleLoginSubmit} >
                    <div className='formwork-register-title'>
                        <h2 className='title-work-register'>Registrate como repartidor</h2>
                        <h4 className='subtitle-work-register'>Introduce tus datos</h4>
                    </div>

                    <div className="register-work-inputs">
                        <div className="register-work-field">
                            <label htmlFor="name" className='titlework-register-input'>Nombre</label>
                            <input className='register-work-input' value={name} onChange={(e) => setName(e.target.value)} type="text" required placeholder='Nombre' id="name" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="lastname" className='titlework-register-input'>Apellido</label>
                            <input className='register-work-input' value={lastname} onChange={(e) => setLastname(e.target.value)} type="lastname" required placeholder='Apellido' id="lastname" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="adress" className='titlework-register-input'>Dirección</label>
                            <input className='register-work-input' value={adress} onChange={(e) => setAdress(e.target.value)} type="text" required placeholder='Dirección' id="adress" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="Phone" className='titlework-register-input'>Email</label>
                            <input className='register-work-input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' id="email" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="email" className='titlework-register-input'>Telefono</label>
                            <input className='register-input' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" required placeholder='(+34) - 111- 22222' id="phone" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="email" className='titlework-register-input'>Email</label>
                            <input className='register-work-input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' id="email" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="email" className='titlework-register-input'>Contraseña</label>
                            <input className='register-work-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="checkwork-register-container">
                            <input className="checkbox-work-register" onChange={() => setStoreToken(!storeToken)} type="checkbox" id="remember" />
                            <label htmlFor="remember" className="slider-work-register"> Recuérdame</label>
                        </div>
                        <button className='btn-work-register' type="submit">Registrarme</button>
                    </div>
                </form>
                <div className="boxwork-register-user">
                    <h4 className='subtitle-log-in' >
                        <Link to="/login" className="textwork-link-register">
                            ¿Ya tienes cuenta? <b>Inicia Sesión</b>
                        </Link>
                    </h4>
                </div>
            </div>
        </section>
    );
}
export default RegisterWork