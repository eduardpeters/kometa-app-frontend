import "../../assets/styles/selector-delivery.css";
import { Link } from 'react-router-dom';
import React from 'react'


const SelectorDelivery = () => {

    return (
        <div className="selector-completed">
            <Link className='selector-name' to="/order-delivery">Mi pedido</Link>
            <Link className='selector-name' to="/history-delivery">Historial</Link>
        </div>
    )
}

export default SelectorDelivery