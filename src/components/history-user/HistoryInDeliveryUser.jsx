import React from 'react'
import '../../assets/styles/history.css'
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'

const HistoryInDeliveryUser = () => {
  return (
    <div className='bg-component-history'>
      <InfoDeliveryMan />
      <div className='details-history'>#HYUMPO789UI</div>
      <div className='details-history'>9€</div>
      <InfoCardOrigin />
      <InfoCardDestination />
      <BtnInDeliveryStatus />
    </div>
  )
}

export default HistoryInDeliveryUser