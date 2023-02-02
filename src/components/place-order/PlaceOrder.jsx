import React from "react";
import girlmoto from '../../assets/Images/girlmoto.png'
import '../../assets/styles/LandingPage.css'
import { useNavigate } from "react-router";


function PlaceOrder() {

    const navigate = useNavigate();

    const navigateCreateOrder2 = () => {
        navigate('/create-order');
    };

    return (
        <>
            <div className='place-Constainer'>
                <div className='startContainer-left1'>
                    <div className='startText2'>
                        <h1 className='subtitle-PlaceOrder' style={{ color: 'white' }}>Somos los más rápidos de todo Madrid</h1>
                    </div>
                    <div className='btn-box2'>
                        <button className='btnlogin2' onClick={navigateCreateOrder2}>Realizar pedido</button>
                    </div>
                </div>
                <div className='place-Container.right'>
                    <img className='motogirl' width='402' src={girlmoto} alt="" />
                </div>
            </div>
        </>
    )
}
export default PlaceOrder