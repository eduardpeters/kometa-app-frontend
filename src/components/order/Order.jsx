import React from 'react'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import ManyOrders from './ManyOrders'
import NoOrder from './NoOrder'
import { useUserContext } from '../../context/UserContext'
import useLocalToken from "../../hooks/useLocalToken";

const Order = () => {

    const[orders, setOrders] = useState([]);
    const userContext = useUserContext();
    const token = useLocalToken();

    useEffect(() => {
        const getOrders = async(token) => {
           const response = await ordersAPI.getOrders(token, ['Pending', 'Delivering']);
           setOrders(response);
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
            <Navbar />
            <SelectorUser />
            <Search />
            {orders.length ? <ManyOrders orders={orders}/> : <NoOrder />}
        </>
    )
}

export default Order