import React from 'react'
import "../../assets/styles/buttons/btn-confirm.css";
import { useNavigate } from 'react-router-dom';

const BtnConfirm = () => {

    const navigate = useNavigate();

    const navigateToNoOrder = () => {
        navigate('/no-order');
    };

    return (
        <div className='btn-box-confirm'>
            <button className='btn-confirm' onClick={navigateToNoOrder}>Confirmar</button>
        </div>
    )
}

export default BtnConfirm