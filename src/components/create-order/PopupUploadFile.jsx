import '../../assets/styles/popup-upload-file.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PaPa from 'papaparse';

const PopupUploadFile = (props) => {

    const navigate = useNavigate();
    const file = useRef();

    const handleFileUpload = () => {
        /* navigate('/create-order'); */
        console.log(file.current);
        console.log(file.current.files);
        parseFile(file.current.files[0]);
    };

    const parseFile = file => {
        const config = {
            header: true,
            complete: (results,file)=> console.log(results, file)
        }
        PaPa.parse(file, config);
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
                    <input type="file" accept=".csv" ref={file}/>
                </div>
                <div className='btns-popup-upload'>
                <button className='btn-upload-popup' onClick={() => props.setPopup(false)}>Cancelar</button>
                <button className="btn" onClick={handleFileUpload}>Aceptar</button>
                </div>
            </div>
        </div>
    )
}

export default PopupUploadFile