import React from 'react'
import MiddleHeader from './MiddleHeader'
import ProductCard from './ProductCard'
import Navbar from './Navbar'
import './WishlistPage.css'

export default function WishlistPage() {
  return (
    <div>
        <Navbar></Navbar>
        <MiddleHeader heading="Your Wishlist" description="This is the selection of items liked by you the most"></MiddleHeader>

        <div className='product-card-collection'>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            
        </div>
    </div>
  )
}
