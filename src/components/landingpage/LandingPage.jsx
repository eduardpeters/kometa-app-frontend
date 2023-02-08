import React from "react";
import '../../assets/styles/LandingPage.css'
import PlaceOrder from '../../components/place-order/PlaceOrder'
import OpinionClient from "../opinion-landing/OpinionClient";
import NavbarLanding from "../navbar-landing/NavbarLanding";
import ImgDelivery from "../img-repartidor/ImgDelivery";
import TextOrderLanding from "../text-orderLanding/TextOrderLanding";
import WorkKometa from "../work-kometa/WorkKometa";
import FooterLanding from "../footer-landing/FooterLanding";
import StartOrder from "../start-order/StartOrder";
import WeMakeLanding from "../wemake-landing/WeMakeLanding";


function LandingPage() {


    return (
        <div className='containerLandin'>
            <div className='containerNavbar'>
                <NavbarLanding />
            </div>
            <div className='containerBody'>
                <div className='containerText'>
                    <div className='conteinerOrders'>
                        <TextOrderLanding />
                    </div>
                </div>
                <div className='containerImg'>
                    <ImgDelivery />
                </div>
            </div>
            <div className='theplace'>
                <PlaceOrder />
            </div>
            <div>
                <WeMakeLanding />
            </div>
            <div>
                <OpinionClient />
            </div>
            <div>
                < StartOrder />
            </div>
            <div>
                < WorkKometa />
            </div>
            <div>
                < FooterLanding />
            </div>

        </div>
    )
}
export default LandingPage