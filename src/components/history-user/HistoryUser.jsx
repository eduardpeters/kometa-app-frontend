import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import CardHistoryUser from './CardHistoryUser'
import HistoryNavbarUser from './HistoryNavbarUser'
import { useUserContext } from '../../context/UserContext'
import { useState, useEffect } from 'react'
import ordersAPI from '../../services/ordersAPI'


const HistoryUser = () => {
    
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
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='bg-history'>
                <HistoryNavbarUser />
                {orders.map(orders => <CardHistoryUser key={orders.orderUUID} orders={orders}/>)}
            </div>
        </div>
    )
}

export default HistoryUser