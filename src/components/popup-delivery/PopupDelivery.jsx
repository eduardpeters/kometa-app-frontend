import React from 'react'
import '../../assets/styles/popup-delivery.css'
import delivery from '../../assets/Images/illustration-delivery.png'
import SmallCardDelivery from '../small-cards/SmallCardDelivery'
import BtnAccept from '../buttons/BtnAccept'

const PopupDelivery = (props) => {

    return (
        <div className='bg-popup-delivery'>
            <div className='popup-delivery'>
                <img className='illustration-delivery' src={delivery} alt='delivery-illustration'/>
                <h1 className='title-popup-delivery'>¡Pedido Nuevo!</h1>
                <SmallCardDelivery />
                <div className='btns-popup-delivery'>
                    <button className='btn-delivery-popup' onClick={() => props.setToggle(false)}>Cancelar</button>
                    <BtnAccept />
                </div>
            </div>
        </div>
    )
}

export default PopupDelivery