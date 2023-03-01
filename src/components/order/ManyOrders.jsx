import React from 'react'
import CardActiveOrders from './CardActiveOrders'
import ManyOrdersNavbar from './ManyOrdersNavbar'
import '../../assets/styles/orders.css'

const ManyOrders = (props) => {
  return (
    <div className='bg-orders'>
        <ManyOrdersNavbar />
        {props.orders.map(order => <CardActiveOrders key={order.orderUUID} order={order}/>)}
    </div>
  )
}

export default ManyOrders