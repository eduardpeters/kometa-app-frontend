import React from "react";
import '../assets/styles/LandingPage.css'
import logo from '../assets/Images/kometa.png'
import redes from '../assets/Images/redesKometa.png'

export default function Footer() {

    return (
        <>
            <div className='container-Footer'>
                <div className='containerFooter-left'>
                    <img className='logs-Kometa' src={logo} width='157px' height='42' alt="Logo" />
                    <div className='footer-text'>
                        <h6 className='term-Cond'>Nuestro objetivo es crear una</h6>
                        <h6 className='term-Cond'>comunidad de clientes satisfechos y</h6>
                        <h6 className='term-Cond'>mejorar su calidad de vida.</h6>
                    </div>
                    <div className='icons-footer'>
                    </div>
                </div>
                <div className='containerFooter-Right'>
                    <h6 className='term-Cond'>Política de Cookies</h6>
                    <h6 className='term-Cond'>Privacidad</h6>
                    <h6 className='term-Cond'>Términos y Condiciones</h6>
                </div>
            </div>
            <div className='redes-K'>
                <img className='redes-Kometa' width='152' height='24' src={redes} alt="Logo" />
            </div>
        </>
    )
}