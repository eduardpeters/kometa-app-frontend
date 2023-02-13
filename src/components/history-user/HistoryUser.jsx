import React from 'react'
import Navbar from '../navbar/Navbar'
import Search from '../search/Search'
import SelectorUser from '../selector-user/SelectorUser'
import CardHistoryUser from './CardHistoryUser'
import HistoryNavbarUser from './HistoryNavbarUser'

const HistoryUser = () => {
    return (
        <div>
            <Navbar />
            <SelectorUser />
            <Search />
            <div className='bg-history'>
                <HistoryNavbarUser />
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
                <CardHistoryUser />
            </div>
        </div>
    )
}

export default HistoryUser