import React from 'react'
import "../../assets/styles/small-card/small-card.css";
import InfoCardPrice from '../info-cards/InfoCardPrice';

const SmallCardPrice = (props) => {
    return (
        <div className='small-card'>
            <InfoCardPrice price={props.order.orderCharge}/>
        </div>
    )
}

export default SmallCardPrice