import React from "react";
import girlmoto from '../../assets/Images/girlmoto.png'
import '../../assets/styles/placeorder.css'
import { Link } from "react-router-dom";


function PlaceOrder() {

    return (
        <>
            <div className='place-Constainer'>
                <div className='startContainer-order-left'>
                    <div className='startText2'>
                        <h1 className='subtitle-PlaceOrder'>Somos los más rápidos de todo Madrid</h1>
                    </div>
                    <Link to='/login' className='btn-box2'>
                        <button className='btnlogin2' >Realizar pedido</button>
                    </Link>
                </div>
                <div className='place-Container-right'>
                    <img className="moto-girl" width='402' src={girlmoto} alt="" />
                </div>
            </div>
        </>
    )
}
export default PlaceOrder