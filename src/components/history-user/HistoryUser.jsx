import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import CardHistoryUser from './CardHistoryUser'
import HistoryNavbarUser from './HistoryNavbarUser'
import { useUserContext } from '../../context/UserContext'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'
import useLocalToken from "../../hooks/useLocalToken";

const HistoryUser = () => {
    
    const[orders, setOrders] = useState([]);
    const userContext = useUserContext();
    const token = useLocalToken();

    useEffect(() => {
        const getOrders = async(token) => {
           const response = await ordersAPI.getOrders(token);
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
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='bg-history'>
                <HistoryNavbarUser />
                {orders.map(order => <CardHistoryUser key={order.orderUUID} order={order}/>)}
            </div>
        </div>
    )
}

export default HistoryUser