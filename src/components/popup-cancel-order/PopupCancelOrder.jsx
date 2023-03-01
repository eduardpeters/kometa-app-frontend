import React from 'react'
import '../../assets/styles/popup-cancel-order.css'
import BtnConfirm from '../buttons/BtnConfirm'
import { useNavigate } from 'react-router-dom';
import ordersAPI from '../../services/ordersAPI'
import { useUserContext } from '../../context/UserContext'

const PopupCancelOrder = (props) => {

    const navigate = useNavigate();
    const userContext = useUserContext();

    const cancelOrder = async () => {
        const response = await ordersAPI.patchOrder(userContext.token, 'Cancelled', props.orderUUID);
        if (response) {
            props.setPopup(false);
            navigate('/order');
        }
    };

  return (
    <div className='bg-popup-cancel-order'>
      <div className='popup-cancel-order'>
        <h1 className='title-popup-cancel'>Cancelar Pedido</h1>
        <p className='text-popup-cancel'>Estás seguro que deseas cancelar tu pedido? Perderás el importe del pago</p>
        <div className='btns-popup-cancel'>
          <button className='btn-cancel-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
          <BtnConfirm onClickAction={() => cancelOrder()}/>
        </div>
      </div>
    </div>
  )
}

export default PopupCancelOrder