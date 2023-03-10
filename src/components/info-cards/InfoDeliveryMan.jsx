import React from 'react'
import "../../assets/styles/small-card/small-card.css";
import deliveryMan from '../../assets/Images/delivery-man.png'

const InfoDeliveryMan = () => {
    return (
        <div className='items-small-card'>
            <img className='img-small-card' src={deliveryMan} alt='Delivery man' />
            <div className='info-small-card'>
                <h5 className='name-small-card'>Francisco Del Valle</h5>
                <h5 className='details-small-card'>200 pedidos totales</h5>
            </div>
        </div>
    )
}

export default InfoDeliveryMan