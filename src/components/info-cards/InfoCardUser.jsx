import React from 'react'
import "../../assets/styles/small-card/small-card.css";
import user from '../../assets/Images/user.png'

const InfoCardUser = () => {
    return (
        <div className='items-small-card'>
            <img className='img-small-card' src={user} alt='User' />
            <div className='info-small-card'>
                <h5 className='name-small-card'>Laura Pellicer</h5>
                <h5 className='details-small-card'>2 pedidos realizados</h5>
            </div>
        </div>
    )
}

export default InfoCardUser