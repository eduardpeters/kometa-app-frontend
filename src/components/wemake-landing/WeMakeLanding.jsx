import React from "react";
import movil from '../../assets/Images/mobile_app.png'
import TakeAway from '../../assets/Images/TakeAway.png'
import world from '../../assets/Images/world.png'
import '../../assets/styles/we-make-landing.css'

function WeMakeLanding() {

    return (
        <>
            <div className='contain-wemake'>
                <div className='title-wemake'>
                    <h6 className='subtitle-wemake'>¿QUE HACEMOS?</h6>
                    <h1 className='subtitle-wemake2'>Tus repartidores de</h1>
                    <h1 className='subtitle-wemake2'>Confianza</h1>

                </div>
                <div className='contain-Icons'>
                    <div className='box1'>
                        <div className='icon'>
                            <img className='icon-small' width='227' src={movil} alt="" />
                        </div>
                        <div className='description'>
                            <div className='text-wemake'>
                                <h2>Gestión Fácil</h2>
                            </div>
                            <div className='text-wemake2'>
                                <h5 className='text-wemake3'>Realiza tu pedido en sencillos pasos. Todo el proceso está marcado.</h5>
                            </div>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='icon'>
                            <img className='icon-wemake' width='227' src={TakeAway} alt="" />
                        </div>
                        <div className='description'>
                            <div className='text-wemake'>
                                <h2>Entrega rápida</h2>
                            </div>
                            <div className='text-wemake2'>
                                <h5 className='text-wemake3'>Nos preocupamos en entregar tus pedidos en el menor tiempo posible y con el mayor cuidado.</h5>
                            </div>
                        </div>
                    </div>
                    <div className='box1'>
                        <div className='icon'>
                            <img className='icon-wemake' width='227' src={world} alt="" />
                        </div>
                        <div className='description'>
                            <div className='text-wemake'>
                                <h2>Eco Friendly</h2>
                                </div>
                                <h5 className='text-wemake3'>Nos preocupamos por le medio ambiente, nuestros repartidores irán en bicicletas o motos eléctricas.</h5>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default WeMakeLanding