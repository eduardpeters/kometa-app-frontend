import React from "react";
import '../../assets/styles/text-order-landing.css'
import { Link } from "react-router-dom";

function TextOrderLanding() {

    return (
            <div className="text-container-landing">
                <h1 className='textdesing'>Tus pedidos en las mejores <span className="color-word">manos</span></h1>
                <p className='subTextdesing'> Recibe tu pedido sin moverte de tu casa, aprovecha el tiempo y nosotros nos ocupamos del resto</p>
                <Link to='/login'><button className='button-login2'>Empezar</button>
                </Link>
            </div>
    )
}

export default TextOrderLanding