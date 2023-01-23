import React from 'react'
import "../../assets/styles/small-card/small-card-3-items.css";
import location from "../../assets/Images/location.jpg";
import packet from "../../assets/Images/packet.jpg"

const SmallCard3Items = () => {
  return (
    <div className='small-card-3-items'>
            <div className='individual-3-items'>
                    <img className='img-3-items' src={location} alt='location' />
                <div className='info-3-items'>
                    <h5 className='title-3-items'>Punto de Recogida</h5>
                    <h5 className='details-3-items'>Parque del Conde de Orgaz</h5>
                </div>
            </div>
            <div className='individual-3-items'>
                    <img className='img-3-items' src={location} alt='location' />
                <div className='info-3-items'>
                    <h5 className='title-3-items'>Punto de Entrega</h5>
                    <h5 className='details-3-items'>The Bridge School </h5>
                </div>
            </div>
            <div className='individual-3-items'>
                    <img className='img-3-items' src={packet} alt='package' />
                <div className='info-3-items'>
                    <h5 className='title-3-items'>Paquete</h5>
                    <h5 className='details-3-items'>Mochila</h5>
                </div>
            </div>
        </div>
  )
}

export default SmallCard3Items