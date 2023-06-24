import React from 'react'
import MiddleHeader from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/MiddleHeader'
import OrderHistoryAggregatedCard from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/OrderHistoryAggregatedCard'
import OrderHistoryCard from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/OrderHistoryCard'
import './OrderHistoryPage.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function OrderHistoryPage() {
  return (
    <div>

        <Navbar/>
        
        <MiddleHeader heading='Your Order History' description='This is the list of items ordered by you previously'/>
        
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
        <Footer/>



    </div>
  )
}
