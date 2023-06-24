import React from 'react'
import '../CSS FILES/OrderHistoryAggregated.css'

export default function OrderHistoryAggregatedCard() {
  return (
    <div>
        {/* The outer main component holding details of aggregated order */}
        <div className="outer-heading">
                <div><p>Order Placed: 27-April-2003</p></div>
                <div><p>Total: 86,000</p></div>
                <div><p>Shipped to: Elon Musk</p></div>
                <div><p>Order ID: #123-456-789</p></div>
                <div><p>Order Status: DELIVERED</p></div>
            </div>
    </div>
  )
}
