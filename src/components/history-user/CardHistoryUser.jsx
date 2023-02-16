import React from 'react'
import '../../assets/styles/history.css'
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus'
import BtnCompletedStatus from '../buttons/btns-status/BtnCompletedStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'
import InfoCardPacket from '../info-cards/InfoCardPacket'
import { useState } from 'react'
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom'

const CardHistoryUser = (props) => {

    const [status, setStatus] = useState(false);

  return (
    <div className='bg-component-history'>
      <InfoDeliveryMan />
      <div className='details-history'>#{props.orders.orderUUID.substring(0,10)}...</div>
      <div className='details-history'>{props.orders.orderCharge}€</div>
      <InfoCardPacket description={props.orders.description}/>
      <InfoCardOrigin address={props.orders.originAddress.substring(0,20)}/>
      <InfoCardDestination address={props.orders.destinationAddress.substring(0,20)}/>
      {status ? <BtnInDeliveryStatus /> : <BtnCompletedStatus />}
      <Link to={`/order/${props.orders.orderUUID}`} state={props.orders}><IoArrowForward size='24px' color='#4062FF'/></Link>
    </div>
  )
}

export default CardHistoryUser