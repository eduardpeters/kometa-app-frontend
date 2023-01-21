import React from 'react'
import "../../assets/styles/btn-upload.css";
import { MdOutlineFileUpload } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const BtnUpload = () => {
    return (
        <div className='files-order'>
            <div className='file-uploaded'>
                <h5 className='file-name'>archivo.csv</h5>
                <MdOutlineClose size='16px' color='#4062FF'/>
            </div>

            <div className='btn-upload'>
                <h5 className='btn-name'>SUBIR CSV</h5>
                <MdOutlineFileUpload />
            </div>
        </div>
    )
}

export default BtnUpload