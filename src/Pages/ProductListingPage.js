import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ProductCard from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/ProductCard'
import CategoryHeader from '../Components/PRODUCT LISTING PAGE COMPONENTS/JS FILES/CategoryHeader'
import './ProductListingPage.css'


export default function ProductListingPage() {
  useEffect(() => {
    document.title = "Hype - Products";
  }, []);
  return (
    <>
        <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS'></Navbar>
        <CategoryHeader category='Oversized T-shirts'></CategoryHeader>

        <div className='product-card-collection'>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
        </div>
        <div className='product-card-collection'>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
            <div><ProductCard></ProductCard></div>
        </div>
        <Footer/>
    </>
  )
}
