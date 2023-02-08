import React from 'react'
import "../../assets/styles/buttons/btn-send.css";

const BtnSend = (props) => {

    return (
        <div className='btn-box-send'>
            <button className='btn-send' onClick={props.onClickAction}>Finalizar</button>
        </div>
    )
}

export default BtnSend