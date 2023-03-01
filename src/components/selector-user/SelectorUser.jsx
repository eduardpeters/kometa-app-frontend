import "../../assets/styles/selector-user.css";
import { Link } from 'react-router-dom';
import React from 'react'
import BtnAddOrder from "../buttons/BtnAddOrder";


const SelectorUser = () => {

    return (
        <div className="selector-completed-user">
            <Link className='selector-name' to="/order">Mi pedido</Link>
            <Link className='selector-name' to="/history-user">Historial</Link>
            <BtnAddOrder />
        </div>
    )
}

export default SelectorUser