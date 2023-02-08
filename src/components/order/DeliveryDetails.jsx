import React from 'react'
import "../../assets/styles/delivery-details.css";
import SmallCard3Items from '../small-cards/SmallCard3Items';
import SmallCardDeliveryMan from '../small-cards/SmallCardDeliveryMan.jsx';
import SmallCardPrice from '../small-cards/SmallCardPrice';
import map from "../../assets/Images/map2.png"
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BtnEstimatedHour from '../buttons/btns-status/BtnEstimatedHour';
import PopupCancelOrder from '../popup-cancel-order/PopupCancelOrder';
import BtnCancelOrder from '../buttons/BtnCancelOrder';
import BtnInDeliveryStatus from '../buttons/btns-status/BtnInDeliveryStatus.jsx';
import PopupFinish from '../popup-finish/PopupFinish';

const DeliveryDetails = () => {

    const[popup, setPopup] = useState(false);

    const navigate = useNavigate();

    const navigateToNoOrder = () => {
        navigate('/no-order');
    };

    return (
        <div>
            <div className='delivery-details-bg'>
                <div className='left-container-delivery-details'>
                    <div>
                        <h1 className='title-delivery-details'>Detalles del Pedido</h1>
                        <h3 className='delivery-number'>#HYONU789UJ</h3>
                        <BtnInDeliveryStatus />
                    </div>
                    <div className='title-box-delivery-details'>
                        <h1 className='subtitle-delivery-details'>Repartidor</h1>
                        <SmallCardDeliveryMan />
                    </div>
                    <div className='title-box-delivery-details2'>
                        <h1 className='subtitle-delivery-details'>Detalles de Entrega</h1>
                        <SmallCard3Items />
                    </div>
                    <div className='title-box-delivery-details2'>
                        <h1 className='subtitle-delivery-details'>Precio Total</h1>
                        <SmallCardPrice />
                    </div>
                </div>


                <div className='right-container-delivery-details'>
                    <div className='buttons-delivery-details'>
                        <BtnCancelOrder popup={popup} setPopup={setPopup} />
                        <MdOutlineChatBubbleOutline size='24px' color='#4062FF' />
                        <MdOutlineCall size='24px' color='#4062FF' />
                        <MdOutlineClose onClick={navigateToNoOrder} size='24px' color='#4062FF' />
                    </div>
                    <div className='img-bg-map' style={{ backgroundImage: `url(${map})` }}>
                        <BtnEstimatedHour />
                    </div>
                </div>
            </div>
            {popup ? <PopupCancelOrder popup={popup} setPopup={setPopup}/> : null}
            {/* <PopupFinish /> */}
        </div>
    )
}

export default DeliveryDetails