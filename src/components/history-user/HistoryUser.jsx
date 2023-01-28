import React from 'react'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import HistoryCancelledUser from './HistoryCancelledUser'
import HistoryCompletedUser from './HistoryCompletedUser'
import HistoryInDeliveryUser from './HistoryInDeliveryUser'
import HistoryNavbarUser from './HistoryNavbarUser'

const HistoryUser = () => {
    return (
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='bg-history'>
                <HistoryNavbarUser />
                <HistoryInDeliveryUser />
                <HistoryCompletedUser />
                <HistoryCompletedUser />
                <HistoryCompletedUser />
                <HistoryCompletedUser />
                <HistoryCancelledUser />
                <HistoryCompletedUser />
            </div>
        </div>
    )
}

export default HistoryUser