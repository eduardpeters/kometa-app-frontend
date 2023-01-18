import React from 'react'
import NewDelivery from '../new-delivery/NewDelivery'
import Navbar from '../navbar/Navbar.jsx'
import Search from '../search/Search.jsx'
import SelectorUser from '../selector-user/SelectorUser.jsx'

const NoOrder = () => {
    return (
        <>
            <Navbar />
            <SelectorUser />
            <Search />
            <NewDelivery />
        </>
    )
}

export default NoOrder