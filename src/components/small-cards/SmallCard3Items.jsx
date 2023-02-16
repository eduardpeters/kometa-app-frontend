import React from 'react'
import "../../assets/styles/small-card/small-card-3-items.css";
import InfoCardOrigin from '../info-cards/InfoCardOrigin';
import InfoCardDestination from '../info-cards/InfoCardDestination';
import InfoCardPacket from '../info-cards/InfoCardPacket';

const SmallCard3Items = (props) => {
  return (
    <div className='small-card-3-items'>
            <InfoCardOrigin address={props.order.originAddress.substring(0,45)}/>
            <InfoCardDestination address={props.order.destinationAddress.substring(0,45)}/>
            <InfoCardPacket description={props.order.description}/>
        </div>
  )
}

export default SmallCard3Items