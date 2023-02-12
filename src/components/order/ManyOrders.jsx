import React from 'react'
import CardActiveOrders from './CardActiveOrders'
import ManyOrdersNavbar from './ManyOrdersNavbar'
import '../../assets/styles/orders.css'

const ManyOrders = () => {
  return (
    <div className='bg-orders'>
        <ManyOrdersNavbar />
        <CardActiveOrders />
        <CardActiveOrders />
        <CardActiveOrders />
    </div>
  )
}

export default ManyOrders