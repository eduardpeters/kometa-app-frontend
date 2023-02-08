import React from 'react'
import "../../assets/styles/buttons/btn-back.css";

const BtnBack = (props) => {

    return (
        <div className='btn-box'>
            <button onClick={props.onClickAction} className='btn-back'>Atrás</button>
        </div>
    )
}

export default BtnBack