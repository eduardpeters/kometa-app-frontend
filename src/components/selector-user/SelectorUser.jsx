import "../../assets/styles/selector-user.css";
import { Link } from 'react-router-dom';

import React from 'react'

const SelectorUser = () => {

    return (
        <div className="selector-completed">
            <Link className='selector-name' to="/">Mi pedido</Link>
            <div className="selector-name">Historial</div>

        </div>
    )
}

export default SelectorUser