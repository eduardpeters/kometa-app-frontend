import React from 'react'
import "../../assets/styles/buttons/btn-cancel-order.css";

const BtnCancelOrder = (props) => {

    return (
        <div className='btn-box-cancel-order'>
            <button onClick={() => props.setPopup(true)} className='btn-cancel-order'>Cancelar pedido</button>
        </div>
    )
}

export default BtnCancelOrder