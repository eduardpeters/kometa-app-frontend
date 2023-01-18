import React from 'react'
import "../../assets/styles/new-delivery.css";
import image from "../../assets/Images/empty.png";

const NewDelivery = () => {
  return (
    <div className='new-delivery'>
      <h4 className='title-new-delivery'>NO TIENES PEDIDOS EN CURSO</h4>
      <img className='image-empty' src={image} alt="Logo" />
      <h4>Realiza ya tu pedido</h4>
      <p className='p-crete-delivery'>Recibe tu pedido sin moverte de tu casa, aprovecha el tiempo y nosotros nos ocupamos del resto.<br/>Nunca antes te lo habían puesto tan fácil.</p>
      <button className='btn-new-delivery'>Realizar Pedido</button>
    </div>
  )
}

export default NewDelivery