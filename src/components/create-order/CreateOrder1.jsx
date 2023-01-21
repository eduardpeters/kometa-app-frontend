import React from 'react'
import "../../assets/styles/create-order.css";
import Navbar from '../navbar/Navbar.jsx'
import Search from '../search/Search.jsx'
import SelectorUser from '../selector-user/SelectorUser.jsx'
import { useState } from 'react';
import BtnUpload from '../btn-upload/BtnUpload';
import BtnNext from '../btn-next/BtnNext';
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import {useNavigate} from 'react-router-dom';

const CreateOrder1 = () => {

    const [packet, setPacket] = useState("")
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] = useState("")
    const [weight, setWeight] = useState("")
    const [units, setUnits] = useState("")

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
                    <BtnNext />
                </div>
            </div>
        </div>
    )
}

export default CreateOrder1