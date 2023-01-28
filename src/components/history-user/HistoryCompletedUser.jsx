import React from 'react'
import '../../assets/styles/history.css'
import BtnCompletedStatus from '../buttons/btns-status/BtnCompletedStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'

const HistoryCompletedUser = () => {
  return (
    <div className='bg-component-history'>
      <InfoDeliveryMan />
      <div className='details-history'>#HYUMPO789UI</div>
      <div className='details-history'>9€</div>
      <InfoCardOrigin />
      <InfoCardDestination />
      <BtnCompletedStatus />
    </div>
  )
}

export default HistoryCompletedUser