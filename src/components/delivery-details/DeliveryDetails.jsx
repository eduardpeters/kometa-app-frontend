import React from 'react'
import "../../assets/styles/delivery-details.css";
import BtnInDelivery from '../buttons/BtnInDelivery';
import Navbar from '../navbar/Navbar.jsx'
import Search from '../search/Search.jsx'
import SelectorUser from '../selector-user/SelectorUser.jsx'
import SmallCard3Items from '../small-cards/SmallCard3Items';
import SmallCardDeliveryMan from '../small-cards/SmallCardDeliveryMan.jsx';
import SmallCardPrice from '../small-cards/SmallCardPrice';
import map from "../../assets/Images/map.jpg"

const DeliveryDetails = () => {
    return (
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='delivery-details-bg'>
                <div className='left-container-delivery-details'>
                    <div>
                        <h1 className='title-delivery-details'>Detalles del Pedido</h1>
                        <h3 className='delivery-number'>#HYONU789UJ</h3>
                        <BtnInDelivery />
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
                    <div>
                        Botones esquina
                    </div>
                    <div className='img-bg-map' style={{backgroundImage: `url(${map})`}}>
                        Hora de Entrega
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryDetails