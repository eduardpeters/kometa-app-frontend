import React from 'react'
import "../../assets/styles/btn-back.css";
import { useNavigate } from 'react-router-dom';

const BtnBack = () => {

    const navigate = useNavigate();

    const navigateToCreateOrder1 = () => {
        navigate('/CreateOrder1');
      };

    return (
        <div className='btn-box'>
            <button onClick={navigateToCreateOrder1} className='btn-back'>Atrás</button>
        </div>
    )
}

export default BtnBack