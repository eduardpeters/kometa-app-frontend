import React from 'react';
import { useState } from 'react';
import registerAPI from "../../services/registerAPI";
import { Link, useNavigate } from 'react-router-dom';
import NavLogin from '../nav-login/NavLogin';
import image from '../../assets/Images/repartidorlogin.png'
import '../../assets/styles/register.css'


function RegisterUser() {

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [adress, setAdress] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [nationalID, setNationalID] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [storeToken, setStoreToken] = useState(false);


    async function handleLoginSubmit(event) {
        event.preventDefault();
        const response = await registerAPI.postRegister(firstName, lastName, birthdate, nationalID, email, phone, password, 'client');
        if (response.error) {
            console.error(response.error);
        } else {
            navigate('/login');
        }
    }

    return (
        <section className='register'>
            <div className="register-image-container">
                <img src={image} alt="delivery-person" />
            </div>
            <div className="register-content">
                <div className="register-navbar">
                    <NavLogin />
                </div>
                <form className="register-form" onSubmit={handleLoginSubmit} >
                    <div className='form-register-title'>
                        <h2 className='title-register'>Registro</h2>
                        <h4 className='subtitle-register'>Introduce tus datos para el registro</h4>
                    </div>

                    <div className="register-inputs">
                        <div className="register-field">
                            <label htmlFor="name" className='title-register-input'>Nombre</label>
                            <input className='register-input' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required placeholder='Nombre' id="name" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="lastname" className='title-register-input'>Apellido</label>
                            <input className='register-input' value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" required placeholder='Apellido' id="lastname" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="adress" className='title-register-input'>Dirección</label>
                            <input className='register-input' value={adress} onChange={(e) => setAdress(e.target.value)} type="text" required placeholder='Dirección' id="adress" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="birthdate" className='title-register-input'>Fecha de Nacimiento</label>
                            <input className='register-input' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="date" required placeholder='AAAA/MM/DD' id="birthdate" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="Phone" className='title-register-input'>DNI / NIE</label>
                            <input className='register-input' value={nationalID} onChange={(e) => setNationalID(e.target.value)} type="text" required placeholder='DNI / NIE' id="nationalID" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="Email" className='title-register-input'>Email</label>
                            <input className='register-input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' id="email" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="email" className='title-register-input'>Telefono</label>
                            <input className='register-input' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" required placeholder='(+34)-111-222222' id="phone" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="password" className='title-register-input'>Contraseña</label>
                            <input className='register-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="confirmpassword" className='title-register-input'>Confirme Contraseña</label>
                            <input className='register-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required placeholder='*************' id="confirmpassword" />
                        </div>
                        <div className="check-register-container">
                            <input className="checkbox-register" onChange={() => setStoreToken(!storeToken)} type="checkbox" id="remember" />
                            <label htmlFor="remember" className="slider-register"> Recuérdame</label>
                        </div>
                        <button className='btn-registers' type="submit">Registrarme</button>
                    </div>
                </form>
                <div className="box-register-user">
                    <h4 className='subtitle-reg-in' >
                        <Link to="/login" className="text-link-register">
                            ¿Ya tienes cuenta? <b>Inicia Sesión</b>
                        </Link>
                    </h4>
                </div>
            </div>
        </section>
    );
}
export default RegisterUser
