import React from 'react'
import "../../assets/styles/buttons/btn-confirm.css";

const BtnConfirm = (props) => {

    return (
        <div className='btn-box-confirm'>
            <button className='btn-confirm' onClick={props.onClickAction}>Confirmar</button>
        </div>
    )
}

export default BtnConfirm