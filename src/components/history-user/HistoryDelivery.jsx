import Search from '../search/Search'
import HistoryNavbarDelivery from './HistoryNavbarDelivery'
import { useUserContext } from '../../context/UserContext'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'
import useLocalToken from "../../hooks/useLocalToken";
import SelectorDelivery from '../selector-user/SelectorDelivery'
import CardHistoryDelivery from './CardHistoryDelivery'
import NavbarDeliver from '../navbar/NavbarDeliver'

const HistoryDelivery = () => {
    
    const[orders, setOrders] = useState([]);
    const userContext = useUserContext();
    const token = useLocalToken();

    useEffect(() => {
        const getOrders = async(token) => {
           const response = await ordersAPI.getOrders(token);
           console.log(response);
           setOrders(response)
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
        <div>
            <NavbarDeliver />
            <SelectorDelivery />
            <Search />
            <div className='bg-history'>
                <HistoryNavbarDelivery />
                {orders.map(order => <CardHistoryDelivery key={order.orderUUID} order={order}/>)}
            </div>
        </div>
    )
}

export default HistoryDelivery