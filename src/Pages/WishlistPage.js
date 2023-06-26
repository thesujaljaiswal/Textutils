import React, { useEffect } from 'react'
import MiddleHeader from '../Components/ORDER HISTORY PAGE COMPONENTS/JS FILES/MiddleHeader'
import ProductCard from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard'
import Navbar from '../Components/Navbar'
import './WishlistPage.css'
import Footer from '../Components/Footer'

export default function WishlistPage() {
  useEffect(() => {
    document.title = "Hype - Wishlist";
  }, []);
  return (
    <>
        <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS'></Navbar>
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
        <Footer/>
    </>
  )
}
