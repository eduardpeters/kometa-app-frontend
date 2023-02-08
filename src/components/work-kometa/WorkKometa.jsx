import React from "react";
import phone from '../../assets/Images/mobile_app.png'
import '../../assets/styles/work-kometa.css'
import { Link } from "react-router-dom";

function WorkKometa() {


    return (
        <>
            <div className='conteiner-work'>
                <div className='containerWork-left'>
                    <img className='motoman2' width='580' src={phone} alt="" />
                </div>
                <div className='containerWork-right'>
                    <div className='containerWork-text'>
                        <h6 className='subtitle-workLandin'>TRABAJA CON NOSOTROS</h6>
                        <h1 className='subtitle-workLandin3'>¿Quieres trabajar con nosotros?</h1>
                        <h6>Completa nuestro formulario de inscripción para formar parte de nuestra red de repartidores. Si cumples con los requisitos empezará nuestra aventura.</h6>
                    </div>
                    <Link to={'/register-work'}><button className='button-work' >Realizar Solicitud</button>
                    </Link>

                </div>

            </div>
        </>
    )
}
export default WorkKometa