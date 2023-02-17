import React from 'react'
import '../../../assets/styles/buttons/btns-status/btn-status.css'

const BtnStatus = (props) => {

    let buttonClass;
    let buttonText;
    if (props.status === "Pending"){
      buttonClass = 'btn-pending';
      buttonText = 'Pendiente';
    } else if (props.status === "Delivering"){
      buttonClass = 'btn-in-delivery';
      buttonText = 'En reparto';
    } else if (props.status === "Cancelled"){
      buttonClass = 'btn-cancelled';
      buttonText = 'Cancelado';
    } else if (props.status === "Complete"){
      buttonClass = 'btn-completed';
      buttonText = 'Entregado';
    }

  return (
    <div>
            <button className={buttonClass}>{buttonText}</button>
        </div>
  )
}

export default BtnStatus