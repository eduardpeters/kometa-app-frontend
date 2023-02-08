import React from 'react'
import "../../assets/styles/small-card/small-card.css";
import price from '../../assets/Images/price.jpg'

const InfoCardPrice = () => {
    return (
        <div className='items-small-card'>
            <img className='img-small-card' src={price} alt='Delivery man' />
            <div className='info-small-card'>
                <h5 className='name-small-card'>Precio Total</h5>
                <h5 className='details-small-card'>9€</h5>
            </div>
        </div>
    )
}

export default InfoCardPrice