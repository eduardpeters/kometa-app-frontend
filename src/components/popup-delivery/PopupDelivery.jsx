import React from 'react'
import '../../assets/styles/popup-delivery.css'
import BtnConfirm from '../buttons/BtnConfirm'
import delivery from '../../assets/Images/illustration-delivery.png'
import SmallCardDelivery from '../small-cards/SmallCardDelivery'

const PopupDelivery = (props) => {
    return (
        <div className='bg-popup-delivery'>
            <div className='popup-delivery'>
                <img className='illustration-delivery' src={delivery} alt='delivery-illustration'/>
                <h1 className='title-popup-delivery'>¡Pedido Nuevo!</h1>
                <SmallCardDelivery />
                <div className='btns-popup-delivery'>
                    <button className='btn-delivery-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
                    <BtnConfirm />
                </div>
            </div>
        </div>
    )
}

export default PopupDelivery