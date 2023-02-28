import React from 'react'
import "../../assets/styles/buttons/btn-complete-order.css";

const BtnCompleteOrder = (props) => {

    return (
        <div className='btn-box-complete-order'>
            <button onClick={() => props.setPopup(true)} className='btn-complete-order'>Pedido Entregado</button>
        </div>
    )
}

export default BtnCompleteOrder