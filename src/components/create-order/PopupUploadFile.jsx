import React from 'react'
import '../../assets/styles/popup-upload-file.css'
import { useNavigate } from 'react-router-dom';

const PopupUploadFile = (props) => {

    const navigate = useNavigate();

    const navigateToCreateOrder = () => {
        navigate('/create-order');
    };

    return (
        <div className="bg-popup-upload">
            <div className="card">
                <h3>Adjuntar CSV</h3>
                <div className="drop-box">
                    <header>
                        <h4>Seleccionar archivo aquí</h4>
                    </header>
                    <p>Formato: CSV</p>
                    <input type="file" accept=".csv" />
                </div>
                <div className='btns-popup-upload'>
                <button className='btn-upload-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
                <button className="btn" onClick={navigateToCreateOrder}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default PopupUploadFile