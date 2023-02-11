import React from 'react'
import "../../assets/styles/buttons/btn-finish.css";

const BtnFinish = (props) => {

    return (
        <div className='btn-box'>
            <button className='btn-finish' onClick={props.onClickAction}>Finalizar</button>
        </div>
    )
}

export default BtnFinish