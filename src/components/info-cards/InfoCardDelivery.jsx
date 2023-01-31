import React from 'react'
import "../../assets/styles/small-card/small-card-delivery.css";
import location from "../../assets/Images/location.jpg";

const InfoCardDelivery = () => {
    return (
        <div className='individual-delivery'>
            <img className='img-delivery' src={location} alt='location' />
            <div className='info-delivery'>
                <h5 className='title-delivery'>Nombre Paquete</h5>
                <h5 className='details-delivery'>Recogida · Dirección </h5>
                <h5 className='details-delivery'>Entrega · Dirección </h5>
            </div>
        </div>
    )
}

export default InfoCardDelivery