import "../../assets/styles/delivery-details.css";
import SmallCard3Items from '../small-cards/SmallCard3Items';
import SmallCardDeliveryMan from '../small-cards/SmallCardDeliveryMan.jsx';
import SmallCardPrice from '../small-cards/SmallCardPrice';
import map from "../../assets/Images/map2.png"
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import { MdOutlineChatBubbleOutline } from "react-icons/md";
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import BtnEstimatedHour from '../buttons/btns-status/BtnEstimatedHour';
import PopupCancelOrder from '../popup-cancel-order/PopupCancelOrder';
import BtnCancelOrder from '../buttons/BtnCancelOrder';
import Navbar from "../navbar/Navbar.jsx";
import Search from "../search/Search.jsx";
import SelectorUser from "../selector-user/SelectorUser.jsx";
import PopupFinish from '../popup-finish/PopupFinish';
import BtnStatus from "../buttons/btns-status/BtnStatus";
import Map from "../map/Map";

const DeliveryDetails = () => {

    const [popup, setPopup] = useState(false);

    const location = useLocation()
    const order = location.state

    const navigate = useNavigate();

    const navigateToOrder = () => {
        navigate('/order');
    };

    return (
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='delivery-details-bg'>
                <div className='left-container-delivery-details'>
                    <div>
                        <h1 className='title-delivery-details'>Detalles del Pedido</h1>
                        <h3 className='delivery-number'>#{order.orderUUID}</h3>
                        <BtnStatus status={order.orderStatus} />
                    </div>
                    <div className='title-box-delivery-details'>
                        <h1 className='subtitle-delivery-details'>Repartidor</h1>
                        <SmallCardDeliveryMan />
                    </div>
                    <div className='title-box-delivery-details2'>
                        <h1 className='subtitle-delivery-details'>Detalles de Entrega</h1>
                        <SmallCard3Items order={order} />
                    </div>
                    <div className='title-box-delivery-details2'>
                        <h1 className='subtitle-delivery-details'>Precio Total</h1>
                        <SmallCardPrice order={order} />
                    </div>
                </div>


                <div className='right-container-delivery-details'>
                    <div className='buttons-delivery-details'>
                        <BtnCancelOrder popup={popup} setPopup={setPopup} />
                        <MdOutlineChatBubbleOutline size='24px' color='#4062FF' />
                        <MdOutlineCall size='24px' color='#4062FF' />
                        <MdOutlineClose onClick={navigateToOrder} size='24px' color='#4062FF' />
                    </div>
                    <Map origin={[order.originLongitude, order.originLatitude]} destination={[order.destinationLongitude, order.destinationLatitude]} />
                </div>
            </div>
            {popup ? <PopupCancelOrder popup={popup} setPopup={setPopup} /> : null}
            {/* <PopupFinish /> */}
        </div>
    )
}

export default DeliveryDetails