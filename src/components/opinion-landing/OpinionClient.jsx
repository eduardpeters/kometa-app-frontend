import React from 'react';
import start from '../../assets/Images/start.png'
import Imgopinion from '../img-opinion/Imgopinion';
import '../../assets/styles/opinion-client.css'

function OpinionClient() {

    return (
        <>
            <div className='container-Opinion'>
                <div className='img-Opinion'>
                    <Imgopinion />
                </div>
                <div className='text-Opinion'>
                    <div className='text-opinion-client'>
                        <h6 className='textclient'>NUESTROS CLIENTES</h6>
                        <h1 className='title-opinions'>Lo que nuestros clientes opinan</h1>
                        <h6 className='h6-opinion'>“Kometa es la mejor plataforma de repartos. Sin duda los repartidores son grandes profesionales y tienen un cuidado especial hacía nuestros pedidos. La rapidez es increíble. Recomiendo Kometa sin dudarlo.”</h6>
                    </div>
                    <div className='start-opinion'>
                        <img className='imgUser-repart2' width='290' src={start} alt="" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default OpinionClient