import "../../assets/styles/selector-user.css";
import { Link } from 'react-router-dom';

import React from 'react'

const SelectorUser = () => {

    return (
        <div className="selector-completed">
            <Link className='selector-name' to="/order">Mi pedido</Link>
            <Link className='selector-name' to="/history-user">Historial</Link>
        </div>
    )
}

export default SelectorUser