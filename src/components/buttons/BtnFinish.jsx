import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/buttons/btn-finish.css";

const BtnFinish = (props) => {

    const navigate = useNavigate();

    const navigateToOrder = () => {
        navigate('/order');
    };

    return (
        <div className='btn-box'>
            <button className='btn-finish' onClick={navigateToOrder}>Finalizar</button>
        </div>
    )
}

export default BtnFinish