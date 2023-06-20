import React from 'react'
import MiddleHeader from './MiddleHeader'
import OrderHistoryAggregatedCard from './OrderHistoryAggregatedCard'
import OrderHistoryCard from './OrderHistoryCard'
import './OrderHistoryPage.css'
import Navbar from './Navbar'

export default function OrderHistoryPage() {
  return (
    <div>

        <Navbar></Navbar>
        
        <MiddleHeader heading='Your Order History' description='This is the list of items ordered by you previously'></MiddleHeader>
        
        <div className='order-history'>
            <OrderHistoryAggregatedCard/>
            <OrderHistoryCard/>
            <OrderHistoryCard/>
        </div>

        <div className='order-history'>
            <OrderHistoryAggregatedCard/>
            <OrderHistoryCard/>
        </div>

        <div className='order-history'>
            <OrderHistoryAggregatedCard/>
            <OrderHistoryCard/>
            <OrderHistoryCard/>
        </div>



    </div>
  )
}
