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
import PopupCancelOrder from '../popup-cancel-order/PopupCancelOrder';
import BtnCancelOrder from '../buttons/BtnCancelOrder';
import NavbarDeliver from "../navbar/NavbarDeliver.jsx";
import Search from "../search/Search.jsx";
import SelectorUser from "../selector-user/SelectorUser.jsx";
import PopupFinish from '../popup-finish/PopupFinish';
import SmallCardUser from '../small-cards/SmallCardUser';
import BtnStatus from '../buttons/btns-status/BtnStatus';

const DeliverDeliveryDetails = (props) => {

    const [popup, setPopup] = useState(false);

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
                    <div className='buttons-delivery-details'>
                        <BtnCancelOrder popup={popup} setPopup={setPopup} />
                        <MdOutlineChatBubbleOutline size='24px' color='#4062FF' />
                        <MdOutlineCall size='24px' color='#4062FF' />
                        <MdOutlineClose onClick={navigateToOrder} size='24px' color='#4062FF' />
                    </div>
                    <div className='img-bg-map' style={{ backgroundImage: `url(${map})` }}>
                        <BtnEstimatedHour />
                    </div>
                </div>
            </div>
            {popup ? <PopupCancelOrder popup={popup} setPopup={setPopup} /> : null}
            {/* <PopupFinish /> */}
        </div>
    )
}

export default DeliverDeliveryDetails