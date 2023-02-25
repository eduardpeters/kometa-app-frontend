import React, { useEffect } from "react";
import '../../assets/styles/LandingPage.css'
import PlaceOrder from '../../components/place-order/PlaceOrder'
import OpinionClient from "../opinion-landing/OpinionClient";
import NavbarLanding from "../navbar-landing/NavbarLanding";
import TextOrderLanding from "../text-orderLanding/TextOrderLanding";
import WorkKometa from "../work-kometa/WorkKometa";
import FooterLanding from "../footer-landing/FooterLanding";
import StartOrder from "../start-order/StartOrder";
import WeMakeLanding from "../wemake-landing/WeMakeLanding";
import ImgDelivery from "../img-delivery/ImgDelivery";
import useLocalToken from "../../hooks/useLocalToken";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function LandingPage() {

    const token = useLocalToken();
    const userContext = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            return ;
        }
        userContext.setToken(token);
        navigate('/order');
    }, []);

    return (
        <div className='conteinerLandin'>
            <div className='conteinerNavbar'>
                <NavbarLanding />
            </div>
            <div className='conteinerBody'>
                <div className='conteinerText'>
                    <div className='conteinerOrders'>
                        <TextOrderLanding />
                    </div>
                </div>
                <div className='conteinerImg'>
                    <ImgDelivery />
                </div>
            </div>
            <div className='theplace'>
                <PlaceOrder />
            </div>
            <WeMakeLanding />
            <OpinionClient />
            <StartOrder />
            <WorkKometa />
            <FooterLanding />
        </div>
    )
}
export default LandingPage