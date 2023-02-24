import React from 'react'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'
import NavbarDeliver from '../navbar/NavbarDeliver'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import DeliverDeliveryDetails from './DeliverDeliveryDetails'
import NoOrderDeliver from './NoOrderDeliver'
import { useUserContext } from '../../context/UserContext'
import useLocalToken from "../../hooks/useLocalToken";

const OrderDelivery = () => {

    const[order, setOrder] = useState({});
    const userContext = useUserContext();
    const token = useLocalToken();

    useEffect(() => {
        const getOrders = async(token) => {
           const response = await ordersAPI.getOrders(token, ['Delivering']);
           console.log(response);
           setOrder(response[0]);
        }
        if (!userContext.token) {
            if (!token) {
                return ;
            }
            userContext.setToken(token);
        } else {
            getOrders(userContext.token);
        }
    }, [userContext.token]);

    return (
        <>
            <NavbarDeliver />
            <SelectorUser />
            <Search />
            {order.clientUUID ? <DeliverDeliveryDetails order={order}/> : <NoOrderDeliver />}
        </>
    )
}

export default OrderDelivery