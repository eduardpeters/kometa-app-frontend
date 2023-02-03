import React from "react";
import '../../assets/styles/LandingPage.css'
import motoman from '../../assets/Images/TakeAway.png'
import { useNavigate } from "react-router";

function StartOrder () {

    const navigate = useNavigate();

    const navigateCreateOrder = () => {
        navigate('/create-order');
    };

    return (
        <>
            <div className='startConstainer'>
                <div className='startContainer-left'>
                    <div className='startText'>
                        <h7 className='subtitle-start-work' style={{ color: '#4062FF' }} >REALIZA YA TU PEDIDO</h7>
                        <h1 className='subtitle-start-work2'>¡Empieza hoy con nosotros!</h1>
                        <h7>Recibe tu pedido sin moverte de tu casa, aprovecha el tiempo y nosotros nos ocupamos del resto.</h7>
                    </div>
                    <div>
                    <button className='button-start-order' onClick={navigateCreateOrder}>Realizar pedido</button>
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