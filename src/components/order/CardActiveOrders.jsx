import React from 'react'
import '../../assets/styles/orders.css'
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus'
import BtnCompletedStatus from '../buttons/btns-status/BtnCompletedStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'

const CardActiveOrders = (props) => {

  return (
    <div className='bg-component-order'>
      <InfoDeliveryMan />
      <div className='details-order'>#{props.order.orderUUID.substring(0,10)}...</div>
      <div className='details-order'>{props.order.orderCharge}€</div>
      <InfoCardOrigin />
      <InfoCardDestination />
      <BtnInDeliveryStatus />
    </div>
  )
}

export default CardActiveOrders