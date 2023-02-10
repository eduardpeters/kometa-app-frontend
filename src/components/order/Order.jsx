import React from 'react'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import DeliveryDetails from './DeliveryDetails'
import NoOrder from './NoOrder'

const Order = () => {

    const[orders, setOrders] = useState([]);
    
    useEffect(() => {
        const getOrders = async(token) => {
           const response = await ordersAPI.getOrders(token);
           console.log(response);
           setOrders(response)
        }
        getOrders();
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