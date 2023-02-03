import React from "react";
import '../../assets/styles/LandingPage.css'
import { useNavigate } from "react-router";

function TextOrderLanding() {

    const navigate = useNavigate();

    const navigateToLogin = () => {
        navigate('/login');
      };

    return(
        <>
        <div>
            <h1 className='textdesing' style={{ color: 'Black'}}>Tus pedidos en las mejores manos</h1>
            <h7 className='subTextdesing'> Recibe tu pedido sin moverte de tu casa, aprovecha el tiempo y nosotros nos ocupamos del resto</h7>
            <br></br>
            <button onClick={navigateToLogin} className='button-login2'>Empezar</button>

            {/* <h5 className='textdesing' style={{ color: '#4062FF' }}>manos</h5> */}
        </div>
        </>
    )
}

export default TextOrderLanding