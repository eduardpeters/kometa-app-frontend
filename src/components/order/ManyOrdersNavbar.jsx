import React from 'react'
import '../../assets/styles/orders.css'

const ManyOrdersNavbar = () => {
    return (
            <div className='orders-navbar-user'>
                <div className='orders-navbar-deliveryMan title-navbar-orders'>Repartidor</div>
                <div className='orders-navbar-order-number title-navbar-orders'>Número de Pedido</div>
                <div className='orders-navbar-price title-navbar-orders'>Precio</div>
                <div className='orders-navbar-packet title-navbar-orders'>Paquete</div>
                <div className='orders-navbar-origin title-navbar-orders'>Origen</div>
                <div className='orders-navbar-destination title-navbar-orders'>Destino</div>
                <div className='orders-navbar-status title-navbar-orders'>Estado</div>
            </div>
    )
}

export default ManyOrdersNavbar