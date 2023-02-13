import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../../assets/styles/buttons/btn-add-order.css";
import { IoIosAdd } from "react-icons/io";

const BtnAddOrder = () => {

    const navigate = useNavigate();

    const navigateToCreateOrder = () => {
        navigate('/create-order');
      };
      
  return (
    <div className='btn-box1'>
        <button className='btn-add-order' onClick={navigateToCreateOrder}><IoIosAdd size='22px' />Nuevo Pedido</button>
    </div>
  )
}

export default BtnAddOrder