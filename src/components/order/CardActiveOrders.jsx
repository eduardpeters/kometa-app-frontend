import React from 'react'
import '../../assets/styles/orders.css'
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus'
import BtnCompletedStatus from '../buttons/btns-status/BtnCompletedStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'

const CardActiveOrders = () => {

  return (
    <div className='bg-component-order'>
      <InfoDeliveryMan />
      <div className='details-order'>#HYUMPO789UI</div>
      <div className='details-order'>9€</div>
      <InfoCardOrigin />
      <InfoCardDestination />
      <BtnInDeliveryStatus />
    </div>
  )
}

export default CardActiveOrders