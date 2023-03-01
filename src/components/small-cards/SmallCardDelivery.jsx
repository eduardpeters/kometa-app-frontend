import React from 'react'
import "../../assets/styles/small-card/small-card-delivery.css";
import InfoCardDelivery from '../info-cards/InfoCardDelivery';

const SmallCardDelivery = (props) => {
    return (
        <div className='small-card'>
            <InfoCardDelivery order={props.order}/>
        </div>
    )
}

export default SmallCardDelivery