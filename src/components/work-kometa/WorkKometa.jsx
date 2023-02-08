import React from "react";
import phone from '../../assets/Images/mobile_app.png'
import { useNavigate } from "react-router";

function WorkKometa () {

    const navigate =  useNavigate();

    const navigateRegister = () => {
        navigate('/register')
    }

    return (
        <>
            <div className='conteiner-work'>
                <div className='containerWork-left'>
                    <img className='motoman2' width='580' src={phone} alt="" />
                </div>
                <div className='containerWork-right'>
                    <div className='containerWork-text'>
                        <h7 className='subtitle-workLandin' style={{ color: '#4062FF' }} >TRABAJA CON NOSOTROS</h7>
                        <h1 className='subtitle-workLandin3'>¿Quieres trabajar con nosotros?</h1>
                        <h7>Completa nuestro formulario de inscripción para formar parte de nuestra red de repartidores. Si cumples con los requisitos empezará nuestra aventura.</h7>
                    </div>
                    <button className='button-work' onClick={navigateRegister}>Realizar Solicitud</button>

                </div>

            </div>
        </>
    )
}
export default WorkKometa