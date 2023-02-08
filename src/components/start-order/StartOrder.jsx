import React from "react";
import '../../assets/styles/LandingPage.css'
import motoman from '../../assets/Images/TakeAway.png'
import { Link } from "react-router-dom";
import '../../assets/styles/start-order.css'

function StartOrder () {

    return (
        <>
            <div className='start-conteiner'>
                <div className='start-container-left'>
                    <div className='startText'>
                        <h7 className='subtitle-start-work' style={{ color: '#4062FF' }} >REALIZA YA TU PEDIDO</h7>
                        <h1 className='subtitle-start-work2'>¡Empieza hoy con nosotros!</h1>
                        <h7>Recibe tu pedido sin moverte de tu casa, aprovecha el tiempo y nosotros nos ocupamos del resto.</h7>
                    </div>
                    <div>
                    <Link to='/login'><button className='button-start-order'>Realizar pedido</button>
                    </Link>
                    </div>
                </div>
                <div className='startContainer.right'>
                    <img className='motoman' width='600' src={motoman} alt="" />
                </div>
            </div>
        </>
    )
}
export default StartOrder