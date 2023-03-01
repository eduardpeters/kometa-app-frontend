import React from 'react'
import "../../assets/styles/small-card/small-card-delivery.css";
import location from "../../assets/Images/location.jpg";

const InfoCardDelivery = (props) => {
    return (
        <div className='individual-delivery'>
            <img className='img-delivery' src={location} alt='location' />
            <div className='info-delivery'>
                <h5 className='title-delivery'>{props.order.description}</h5>
                <h5 className='details-delivery'>Recogida · {props.order.originAddress.substring(0,35)}</h5>
                <h5 className='details-delivery'>Entrega · {props.order.destinationAddress.substring(0,35)}</h5>
            </div>
        </div>
    )
}

export default InfoCardDelivery