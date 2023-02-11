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
        <button className='btn-add-order' onClick={navigateToCreateOrder}><span className='icon-plus'><IoIosAdd size='24px' /></span>Nuevo Pedido</button>
    </div>
  )
}

export default BtnAddOrder