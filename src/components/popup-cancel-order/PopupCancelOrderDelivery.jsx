import React from 'react'
import '../../assets/styles/popup-cancel-order.css'
import BtnConfirm from '../buttons/BtnConfirm'
import { useNavigate } from 'react-router-dom';

const PopupCancelOrderDelivery = (props) => {

    const navigate = useNavigate();

    const navigateToOrderDelivery = () => {
      console.log("cancel");
        navigate('/order-delivery');
    };

  return (
    <div className='bg-popup-cancel-order'>
      <div className='popup-cancel-order'>
        <h1 className='title-popup-cancel'>Cancelar Pedido</h1>
        <p className='text-popup-cancel'>Estás seguro que deseas cancelar tu pedido? Recibirás una sanción por parte de la Administración</p>
        <div className='btns-popup-cancel'>
          <button className='btn-cancel-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
          <BtnConfirm onClickAction={() => navigateToOrderDelivery()}/>
        </div>
      </div>
    </div>
  )
}

export default PopupCancelOrderDelivery