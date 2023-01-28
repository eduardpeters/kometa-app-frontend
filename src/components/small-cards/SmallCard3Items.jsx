import React from 'react'
import "../../assets/styles/small-card/small-card-3-items.css";
import InfoCardOrigin from '../info-cards/InfoCardOrigin';
import InfoCardDestination from '../info-cards/InfoCardDestination';
import InfoCardPacket from '../info-cards/InfoCardPacket';

const SmallCard3Items = () => {
  return (
    <div className='small-card-3-items'>
            <InfoCardOrigin />
            <InfoCardDestination />
            <InfoCardPacket />
        </div>
  )
}

export default SmallCard3Items