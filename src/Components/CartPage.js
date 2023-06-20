import React from 'react'
import HypeCart from './HypeCart'
import PaymentPortal from './PaymentPortal'
import './CartPage.css'


export default function CartPage() {
  return (
    <div className='cart-page'>
        <div id='items'><HypeCart/></div>
        <div id='payment'><PaymentPortal/></div>
    </div>
  )
}
