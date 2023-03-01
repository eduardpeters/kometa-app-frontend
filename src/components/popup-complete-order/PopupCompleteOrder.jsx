import React from 'react'
import '../../assets/styles/popup-cancel-order.css'
import BtnConfirm from '../buttons/BtnConfirm'
import ordersAPI from '../../services/ordersAPI'
import { useUserContext } from '../../context/UserContext'

const PopupCompleteOrder = (props) => {

    const userContext = useUserContext();

    const completeOrder = async () => {
        const response = await ordersAPI.patchOrder(userContext.token, 'Complete', props.orderUUID);
        if (response) {
            props.setPopup(false);
            props.setOrder({});
        }
    };

    return (
        <div className='bg-popup-cancel-order'>
            <div className='popup-cancel-order'>
                <h1 className='title-popup-cancel'>Completar Pedido</h1>
                <p className='text-popup-cancel'>Estás seguro que deseas marcar tu pedido como completado?</p>
                <div className='btns-popup-cancel'>
                    <button className='btn-cancel-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
                    <BtnConfirm onClickAction={() => completeOrder()} />
                </div>
            </div>
        </div>
    )
}

export default PopupCompleteOrder