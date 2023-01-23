import React from 'react'
import "../../assets/styles/create-order.css";
import Navbar from '../navbar/Navbar.jsx'
import Search from '../search/Search.jsx'
import SelectorUser from '../selector-user/SelectorUser.jsx'
import { useState } from 'react';
import BtnFinish from '../buttons/BtnFinish';
import BtnBack from '../buttons/BtnBack';
import { MdOutlineClose } from "react-icons/md";
/* import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa"; */
import { useNavigate } from 'react-router-dom';

const CreateOrder2 = () => {

    const [ownerCard, setOwnerCard] = useState("")
    const [card, setCard] = useState("")
    const [cvc, setCvc] = useState("")
    const [limitDate, setLimitDate] = useState("")

    const navigate = useNavigate();

    const navigateToNoOrder = () => {
        navigate('/');
    };


    return (
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='create-order'>
                <div className='bg-create-order'>
                    <div className='header-create-order'>
                        <h1 className='title-create-order'>Realiza tu pedido - Pago</h1>
                        <MdOutlineClose onClick={navigateToNoOrder} size='24px' />
                    </div>

                    <div className='inputs1'>

                        {/* <div>
                            <h3 className='title-input'>Seleccionar Tarjeta</h3>
                            <div><FaCcVisa size='24px' color='blue' /></div>
                            <div><FaCcMastercard size='24px' color='red' /></div>
                        </div> */}

                        <div>
                            <h3 className='title-input'>Nombre Titular</h3>
                            <input className='input' value={ownerCard} onChange={(e) => setOwnerCard(e.target.value)} type="text" required placeholder='Introducir nombre del titular' />
                        </div>

                        <div>
                            <h3 className='title-input'>Número de Tarjeta</h3>
                            <input className='input' value={card} onChange={(e) => setCard(e.target.value)} type="text" required placeholder='Introducir número de tarjeta' />
                        </div>


                        <div className='small-inputs'>
                            <div>
                                <h3 className='title-input'>CVC</h3>
                                <input className='small-input' value={cvc} onChange={(e) => setCvc(e.target.value)} type="text" required placeholder='Introducir CVC' />
                            </div>
                            <div>
                                <h3 className='title-input'>Fecha de Caducidad</h3>
                                <input className='small-input' value={limitDate} onChange={(e) => setLimitDate(e.target.value)} type="text" placeholder='Introducir fecha de caducidad' />
                            </div>
                        </div>
                    </div>
                    <div className='div-buttons'>
                        <div className='buttons-create'>
                            <BtnBack /> <BtnFinish />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateOrder2