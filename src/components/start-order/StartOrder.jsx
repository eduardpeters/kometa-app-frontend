import React from "react";
import '../../assets/styles/LandingPage.css'
import motoman from '../../assets/Images/TakeAway.png'
import { Link } from "react-router-dom";
import '../../assets/styles/start-order.css'

function StartOrder () {

    return (
        <>
            <div className='start-container'>
                <div className='start-container-left'>
                    <div className='start-text'>
                        <h6 className='subtitle-start-work'>REALIZA YA TU PEDIDO</h6>
                        <h1 className='subtitle-start-work2'>¡Empieza hoy con nosotros!</h1>
                        <h6 className="text-start-order">Recibe tu pedido sin moverte de tu casa, aprovecha el tiempo y nosotros nos ocupamos del resto.</h6>
                    </div>
                    <div>
                    <Link to='/login'><button className='button-start-order'>Realizar pedido</button>
                    </Link>
                    </div>
                </div>
                <div className='start-container-right'>
                    <img className='motoman-startorder' width='600' src={motoman} alt="" />
                </div>
            </div>
        </>
    )
}
export default StartOrder