import React from 'react'
import "../../assets/styles/buttons/btn-next.css";
import {useNavigate} from 'react-router-dom';

const BtnNext = () => {

    const navigate = useNavigate();

    const navigateToNext = () => {
        navigate('/create-order-2');
      };

    return (
        <div className='btn-box'>
            <button onClick={navigateToNext} className='btn-next'>Siguiente</button>
        </div>
    )
}

export default BtnNext