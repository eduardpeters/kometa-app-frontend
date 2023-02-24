import React from 'react';
import { useState } from 'react';
import registerAPI from "../../services/registerAPI";
import { Link, useNavigate } from 'react-router-dom';
import NavLogin from '../nav-login/NavLogin';
import image from '../../assets/Images/repartidorlogin.png'
import '../../assets/styles/register-work.css'

function RegisterWork() {

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

    const navigate = useNavigate();

    async function handleLoginSubmit(event) {
        event.preventDefault();
        const response = await registerAPI.postRegister(firstName, lastName, birthdate, nationalID, email, phone, password, 'delivery');
        if (response.error) {
            console.error(response.error);
        } else {
            console.log(response);
            navigate('/login');
        }
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
                            <input className='register-work-input' value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" required placeholder='Nombre' id="name" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="lastname" className='titlework-register-input'>Apellido</label>
                            <input className='register-work-input' value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastname" required placeholder='Apellido' id="lastname" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="adress" className='titlework-register-input'>Dirección</label>
                            <input className='register-work-input' value={adress} onChange={(e) => setAdress(e.target.value)} type="text" required placeholder='Dirección' id="adress" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="birthdate" className='titlework-register-input'>Fecha de nacimiento</label>
                            <input className='register-work-input' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="text" required placeholder='AAAA-MM-DD' id="email" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="Phone" className='title-register-input'>DNI / NIE</label>
                            <input className='register-input' value={nationalID} onChange={(e) => setNationalID(e.target.value)} type="text" required placeholder='DNI / NIE' id="nationalID" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="email" className='titlework-register-input'>Email</label>
                            <input className='register-work-input' value={email} onChange={(e) => setEmail(e.target.value)} type="text" required placeholder='kometa@kometa.com' id="email" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="phone" className='titlework-register-input'>Telefono</label>
                            <input className='register-input' value={phone} onChange={(e) => setPhone(e.target.value)} type="text" required placeholder='(+34)-111-222222' id="phone" />
                        </div>
                        <div className="register-work-field">
                            <label htmlFor="email" className='titlework-register-input'>Contraseña</label>
                            <input className='register-work-input' value={password} onChange={(e) => setPassword(e.target.value)} type="password" required placeholder='*************' id="password" />
                        </div>
                        <div className="register-field">
                            <label htmlFor="confirmpassword" className='title-register-input'>Confirme Contraseña</label>
                            <input className='register-input' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" required placeholder='*************' id="confirmpassword" />
                        </div>
                        <div className="check-register-container">
                            <input className="checkbox-register" onChange={() => setStoreToken(!storeToken)} type="checkbox" id="remember" />
                            <label htmlFor="remember" className="slider-register"> Recuérdame</label>
                        </div>
                        <button className='btn-work-register' type="submit">Registrarme</button>
                    </div>
                </form>
                <div className="boxwork-register-user">
                    <h4 className='subtitle-reg-in' >
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