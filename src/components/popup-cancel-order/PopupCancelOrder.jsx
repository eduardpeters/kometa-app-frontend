import React from 'react'
import '../../assets/styles/popup-cancel-order.css'
import BtnConfirm from '../buttons/BtnConfirm'

const PopupCancelOrder = (props) => {
  return (
    <div className='bg-popup-cancel-order'>
        <div className='popup-cancel-order'>
        <h1 className='title-popup-cancel'>Cancelar Pedido</h1>
        <p className='text-popup-cancel'>Estás seguro que deseas cancelar tu pedido? Perderás el importe del pago</p>
        <div className='btns-popup-cancel'>
        <button className='btn-cancel-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
        <BtnConfirm />
        </div>
        </div>
    </div>
  )
}

export default PopupCancelOrder