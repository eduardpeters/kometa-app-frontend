import React from 'react'
import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import DeliveryDetails from './DeliveryDetails'
import NoOrder from './NoOrder'

const Order = () => {

    const[newOrder, setNewOrder] = useState(false)

    return (
        <>
            <Navbar />
            <SelectorUser />
            <Search />
            {newOrder ? <DeliveryDetails /> : <NoOrder />}
        </>
    )
}

export default Order