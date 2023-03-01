import React from "react";
import '../../assets/styles/footerlanding.css'
import logo from '../../assets/Images/logo-kometa.png'
import redes from '../../assets/Images/redesKometa.png'

function FooterLanding() {

    return (
        <>
            <div className='conteiner-Footer'>
                <div className='conteinerFooter-left'>
                    <img className='logs-Kometa' src={logo} width='120px' height='32' alt="Logo" />
                    <div className='footer-text'>
                        <p className='term-Cond'>Nuestro objetivo es crear una comunidad de clientes satisfechos y mejorar su calidad de vida.</p>
                    </div>
                    <div className='icons-footer'>
                    </div>
                </div>
                <div className='containerFooter-Right'>
                    <p className='option-footer'>Política de Cookies</p>
                    <p className='option-footer'>Privacidad</p>
                    <p className='option-footer'>Términos y Condiciones</p>
                </div>
            </div>
            <div className='redes-K'>
                <img className='redes-Kometa' width='152' height='24' src={redes} alt="Logo" />
            </div>
        </>
    )
}
export default FooterLanding