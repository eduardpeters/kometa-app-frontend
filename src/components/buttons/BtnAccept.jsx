import React from 'react'
import "../../assets/styles/buttons/btn-confirm.css";
import { useNavigate } from 'react-router-dom';

const BtnAccept = () => {

    const navigate = useNavigate();

    const navigateToDeliveryDetails = () => {
        navigate('/delivery-details');
    };

    return (
        <div className='btn-box-confirm'>
            <button className='btn-confirm' onClick={navigateToDeliveryDetails}>Aceptar</button>
        </div>
    )
}

export default BtnAccept