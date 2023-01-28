import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/buttons/btn-finish.css";

const BtnFinish = () => {

    const navigate = useNavigate();

    const navigateToDeliveryDetails = () => {
        navigate('/delivery-details');
    };

    return (
        <div className='btn-box'>
            <button className='btn-finish' onClick={navigateToDeliveryDetails}>Finalizar</button>
        </div>
    )
}

export default BtnFinish