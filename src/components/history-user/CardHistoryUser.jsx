import React from 'react'
import '../../assets/styles/history.css'
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus'
import BtnCompletedStatus from '../buttons/btns-status/BtnCompletedStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'
import { useState } from 'react'

const CardHistoryUser = () => {

    const [status, setStatus] = useState(false);

  return (
    <div className='bg-component-history'>
      <InfoDeliveryMan />
      <div className='details-history'>#HYUMPO789UI</div>
      <div className='details-history'>9€</div>
      <InfoCardOrigin />
      <InfoCardDestination />
      {status ? <BtnInDeliveryStatus /> : <BtnCompletedStatus />}
    </div>
  )
}

export default CardHistoryUser