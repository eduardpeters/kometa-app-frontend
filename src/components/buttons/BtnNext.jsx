import React from 'react'
import "../../assets/styles/buttons/btn-next.css";

const BtnNext = (props) => {

    return (
        <div className='btn-box'>
            <button onClick={props.onClickAction} className='btn-next'>Siguiente</button>
        </div>
    )
}

export default BtnNext