import React from 'react'
import "../../assets/styles/new-delivery.css";
import image from "../../assets/Images/empty.png";
import { useState, useEffect } from 'react';
import PopupDelivery from '../popup-delivery/PopupDelivery';
import { useUserContext } from '../../context/UserContext'
import useLocalToken from "../../hooks/useLocalToken";
import ordersAPI from '../../services/ordersAPI';
import usersAPI from '../../services/usersAPI'

const NoOrderDeliver = (props) => {
    const [newOrder, setNewOrder] = useState({});
    const [toggle, setToggle] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);
    const userContext = useUserContext();
    const token = useLocalToken();

    useEffect(() => {
        let interval;
        if (!userContext.token) {
            if (!token) {
                return;
            }
            userContext.setToken(token);
        } else {
            if (isAvailable) {
                interval = setInterval(() => 
                    checkForOrders(userContext.token, interval, setToggle, setNewOrder), 5000);
            }
            else {
                clearInterval(interval);
            }
        }
        console.log('Availability', isAvailable);
        return () => clearInterval(interval);
    }, [isAvailable, userContext.token]);


    const checkForOrders = async (token, interval, setToggle, setNewOrder) => {
        console.log("Running the interval");
        const response = await ordersAPI.getOrders(token, ['Delivering']);
        console.log(response);
        if (response[0]) {
            clearInterval(interval);
            setNewOrder(response[0]);
            setToggle(true);
        }
    }

    const updateAvailability = async () => {
        setIsAvailable(!isAvailable);
        const response = await usersAPI.updateAvailability(userContext.token, !isAvailable);
        console.log(response);
    }

    return (
        <>
            <div className='new-delivery'>
                <h4 className='title-new-delivery'>TODAVÍA NO TE HA LLEGADO NINGÚN PEDIDO</h4>
                <img className='image-empty' src={image} alt="Logo" />
                <div className='title-and-subtitle'>
                    <h4>¿Estás disponible?</h4>
                    <p className='p-crete-delivery'>Márcate como disponible y empieza a recibir pedidos.</p>
                </div>
                <div className='available'>Disponible
                    <label className="switch">
                        <input type="checkbox" onClick={updateAvailability} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
            {toggle ? <PopupDelivery toggle={toggle} setToggle={setToggle} order={newOrder} setOrder={props.setOrder} /> : null}
        </>
    );
}

export default NoOrderDeliver;