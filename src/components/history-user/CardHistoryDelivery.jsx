import '../../assets/styles/history.css'
import InfoCardDestination from '../info-cards/InfoCardDestination'
import InfoCardOrigin from '../info-cards/InfoCardOrigin'
import InfoCardPacket from '../info-cards/InfoCardPacket'
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom'
import BtnStatus from '../buttons/btns-status/BtnStatus'
import InfoCardUser from '../info-cards/InfoCardUser'

const CardHistoryDelivery = (props) => {

  return (
    <div className='bg-component-history'>
      <InfoCardUser />
      <div className='details-history'>#{props.order.orderUUID.substring(0,10)}...</div>
      <div className='details-history'>{props.order.orderCharge}€</div>
      <InfoCardPacket description={props.order.description}/>
      <InfoCardOrigin address={props.order.originAddress.substring(0,20)}/>
      <InfoCardDestination address={props.order.destinationAddress.substring(0,20)}/>
      <BtnStatus status={props.order.orderStatus}/>
      <Link to={`/order-delivery`} state={props.order}><IoArrowForward size='24px' color='#4062FF'/></Link>
    </div>
  )
}

export default CardHistoryDelivery