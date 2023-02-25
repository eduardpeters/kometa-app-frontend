import React from 'react'
import "../../assets/styles/delivery-details.css";
import SmallCard3Items from '../small-cards/SmallCard3Items';
import SmallCardPrice from '../small-cards/SmallCardPrice';
import map from "../../assets/Images/map2.png"
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { useNavigate} from 'react-router-dom';
import { useState } from 'react';
import BtnEstimatedHour from '../buttons/btns-status/BtnEstimatedHour';
import PopupCompleteOrder from '../popup-complete-order/PopupCompleteOrder';
import BtnCancelOrder from '../buttons/BtnCancelOrder';
import SmallCardUser from '../small-cards/SmallCardUser';
import BtnStatus from '../buttons/btns-status/BtnStatus';
import BtnCompleteOrder from '../buttons/BtnCompleteOrder';
import PopupCancelOrderDelivery from '../popup-cancel-order/PopupCancelOrderDelivery';

const DeliverDeliveryDetails = (props) => {

    const [popupCancel, setPopupCancel] = useState(false);
    const [popupComplete, setPopupComplete] = useState(false);

    const navigate = useNavigate();

    const navigateToOrder = () => {
        navigate('/order');
    };

    return (
        <div>
            <div className='delivery-details-bg'>
                <div className='left-container-delivery-details'>
                    <div>
                        <h1 className='title-delivery-details'>Detalles del Pedido</h1>
                        <h3 className='delivery-number'>#{props.order.orderUUID}</h3>
                        <BtnStatus status={props.order.orderStatus}/>
                    </div>
                    <div className='title-box-delivery-details'>
                        <h1 className='subtitle-delivery-details'>Cliente</h1>
                        <SmallCardUser />
                    </div>
                    <div className='title-box-delivery-details2'>
                        <h1 className='subtitle-delivery-details'>Detalles de Entrega</h1>
                        <SmallCard3Items order={props.order}/>
                    </div>
                    <div className='title-box-delivery-details2'>
                        <h1 className='subtitle-delivery-details'>Precio Total</h1>
                        <SmallCardPrice order={props.order}/>
                    </div>
                </div>


                <div className='right-container-delivery-details'>
                    <div className='buttons-deliver-delivery-details'>
                        <BtnCompleteOrder popup={popupComplete} setPopup={setPopupComplete}/>
                        <BtnCancelOrder popup={popupCancel} setPopup={setPopupCancel} />
                        <MdOutlineChatBubbleOutline size='24px' color='#4062FF' />
                        <MdOutlineCall size='24px' color='#4062FF' />
                        <MdOutlineClose onClick={navigateToOrder} size='24px' color='#4062FF' />
                    </div>
                    <div className='img-bg-map' style={{ backgroundImage: `url(${map})` }}>
                        <BtnEstimatedHour />
                    </div>
                </div>
            </div>
            {popupCancel ? <PopupCancelOrderDelivery popup={popupCancel} setPopup={setPopupCancel} /> : null}
            {popupComplete ? <PopupCompleteOrder popup={popupComplete} setPopup={setPopupComplete}/> :  null}
        </div>
    )
}

export default DeliverDeliveryDetails