import React from 'react'
import "../../assets/styles/create-order.css";
import Navbar from '../navbar/Navbar.jsx'
import Search from '../search/Search.jsx'
import SelectorUser from '../selector-user/SelectorUser.jsx'
import { useState } from 'react';
import BtnUpload from '../buttons/BtnUpload';
import BtnNext from '../buttons/BtnNext';
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import BtnFinish from '../buttons/BtnFinish';
import BtnBack from '../buttons/BtnBack';

const CreateOrder = () => {

    const [packet, setPacket] = useState("")
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [weight, setWeight] = useState("")
    const [units, setUnits] = useState("")
    const [ownerCard, setOwnerCard] = useState("")
    const [card, setCard] = useState("")
    const [cvc, setCvc] = useState("")
    const [limitDate, setLimitDate] = useState("")
    const [layer, setLayer] = useState(true)

    const navigate = useNavigate();

    const navigateToNoOrder = () => {
        navigate('/no-order');
    };

    return (
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='create-order'>
                <div className='bg-create-order'>{layer ? <>
                    <div className='header-create-order'>
                        <h1 className='title-create-order'>Realiza tu pedido - Detalles</h1>
                        <MdOutlineClose onClick={navigateToNoOrder} size='24px' />
                    </div>
                    <div className='files'>
                        <BtnUpload />
                    </div>

                    <div className='inputs'>
                        <div>
                            <h3 className='title-input'>Qué deseas entregar?</h3>
                            <input className='input' value={packet} onChange={(e) => setPacket(e.target.value)} type="text" required placeholder='Introducir paquete' />
                        </div>

                        <div>
                            <h3 className='title-input'>Punto de Entrega</h3>
                            <input className='input' value={origin} onChange={(e) => setOrigin(e.target.value)} type="text" required placeholder='Introducir punto de entrega' />
                        </div>

                        <div>
                            <h3 className='title-input'>Punto de Recogida</h3>
                            <input className='input' value={destination} onChange={(e) => setDestination(e.target.value)} type="text" required placeholder='Introducir punto de recogida' />
                        </div>

                        <div>
                            <h3 className='title-input'>Archivos</h3>
                            <div className='file-section'>
                                <div className='upload-file'>
                                    <MdOutlineFileUpload size='24px' color='#4062FF' />
                                </div>
                                <MdOutlineAdd size='24px' color='#4062FF' />
                            </div>
                        </div>

                        <div className='small-inputs'>
                            <div>
                                <h3 className='title-input'>Peso</h3>
                                <input className='small-input' value={weight} onChange={(e) => setWeight(e.target.value)} type="text" required placeholder='Introducir peso' />
                            </div>
                            <div>
                                <h3 className='title-input'>Unidades</h3>
                                <input className='small-input' value={units} onChange={(e) => setUnits(e.target.value)} type="text" placeholder='Introducir unidades' />
                            </div>
                        </div>
                    </div>
                    <BtnNext onClickAction={() => setLayer(false)} />
                </> : <>
                    <div className='header-create-order'>
                        <h1 className='title-create-order'>Realiza tu pedido - Pago</h1>
                        <MdOutlineClose onClick={navigateToNoOrder} size='24px' />
                    </div>

                    <div className='inputs2'>

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
                            <BtnBack onClickAction={() => setLayer(true)}/> <BtnFinish />
                        </div>
                    </div>
                </>}
                </div>
            </div>
        </div>
    )
}

export default CreateOrder