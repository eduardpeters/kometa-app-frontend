import React from 'react'
import '../../assets/styles/orders.css'
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus'
import BtnCompletedStatus from '../buttons/btns-status/BtnCompletedStatus'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoDeliveryMan from '../info-cards/InfoDeliveryMan'
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom'
import InfoCardPacket from '../info-cards/InfoCardPacket'

const CardActiveOrders = (props) => {

  return (
    <div className='bg-component-order'>
      <InfoDeliveryMan />
      <div className='details-order'>#{props.order.orderUUID.substring(0,10)}...</div>
      <div className='details-order'>{props.order.orderCharge}€</div>
      <InfoCardPacket description={props.order.description}/>
      <InfoCardOrigin address={props.order.originAddress.substring(0,20)}/>
      <InfoCardDestination address={props.order.destinationAddress.substring(0,20)}/>
      <BtnInDeliveryStatus />
      <Link to={`/order/${props.order.orderUUID}`} state={props.order}><IoArrowForward size='24px' color='#4062FF'/></Link>
    </div>
  )
}

export default CardActiveOrders