import React from 'react'
import "../../assets/styles/small-card/small-card-3-items.css";
import location from "../../assets/Images/location.jpg";

const InfoCardOrigin = (props) => {
    return (
        <div className='individual-3-items'>
            <img className='img-3-items' src={location} alt='location' />
            <div className='info-3-items'>
                <h5 className='title-3-items'>Punto de Recogida</h5>
                <h5 className='details-3-items'>{props.address}</h5>
            </div>
        </div>
    )
}

export default InfoCardOrigin