import React from 'react'
import "../../assets/styles/small-card/small-card-3-items.css";
import packet from "../../assets/Images/packet.jpg"

const InfoCardPacket = (props) => {
    return (
        <div className='individual-3-items'>
            <img className='img-3-items' src={packet} alt='package' />
            <div className='info-3-items'>
                <h5 className='title-3-items'>Paquete</h5>
                <h5 className='details-3-items'>{props.description}</h5>
            </div>
        </div>
    )
}

export default InfoCardPacket