import React from 'react'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import DeliveryDetails from './DeliveryDetails'
import NoOrder from './NoOrder'
import { useUserContext } from '../../context/UserContext'

const Order = () => {

    const[orders, setOrders] = useState([]);

    const userContext = useUserContext();
    
    useEffect(() => {
        const getOrders = async(token) => {
           const response = await ordersAPI.getOrders(token);
           console.log(response);
           setOrders(response)
        }
        console.log(userContext);
        getOrders(userContext.token);
    }, [])

    return (
        <>
            <Navbar />
            <SelectorUser />
            <Search />
            {orders.length ? <DeliveryDetails /> : <NoOrder />}
        </>
    )
}

export default Order