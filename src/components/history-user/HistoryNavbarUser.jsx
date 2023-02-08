import React from 'react'
import '../../assets/styles/history-navbar.css'

const HistoryNavbarUser = () => {
  return (
    <div className='history-navbar-user'>
      <div className='h-navbar-deliveryMan title-navbar-h'>Repartidor</div>
      <div className='h-navbar-order-number title-navbar-h'>Número de Pedido</div>
      <div className='h-navbar-price title-navbar-h'>Precio</div>
      <div className='h-navbar-origin title-navbar-h'>Origen</div>
      <div className='h-navbar-destination title-navbar-h'>Destino</div>
      <div className='h-navbar-status title-navbar-h'>Estado</div>
    </div>
  )
}

export default HistoryNavbarUser