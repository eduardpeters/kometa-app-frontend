import React from 'react'
import '../../assets/styles/history.css'
import BtnCancelledStatus from '../buttons/btns-status/BtnCancelledStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'

const HistoryCancelledUser = () => {
  return (
    <div className='bg-component-history'>
      <InfoDeliveryMan />
      <div className='details-history'>#HYUMPO789UI</div>
      <div className='details-history'>9€</div>
      <InfoCardOrigin />
      <InfoCardDestination />
      <BtnCancelledStatus />
    </div>
  )
}

export default HistoryCancelledUser