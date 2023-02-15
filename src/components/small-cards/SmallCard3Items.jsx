import React from 'react'
import "../../assets/styles/small-card/small-card-3-items.css";
import InfoCardOrigin from '../info-cards/InfoCardOrigin';
import InfoCardDestination from '../info-cards/InfoCardDestination';
import InfoCardPacket from '../info-cards/InfoCardPacket';

const SmallCard3Items = (props) => {
  return (
    <div className='small-card-3-items'>
            <InfoCardOrigin latitude={props.order.originLatitude} longitude={props.order.originLongitude}/>
            <InfoCardDestination latitude={props.order.destinationLatitude} longitude={props.order.destinationLongitude}/>
            <InfoCardPacket description={props.order.description}/>
        </div>
  )
}

export default SmallCard3Items