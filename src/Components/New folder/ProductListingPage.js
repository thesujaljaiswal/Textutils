import React from 'react'
import Navbar from './Navbar'
import ProductCard from './ProductCard'
import CategoryHeader from './CategoryHeader'
import './ProductListingPage.css'


export default function ProductListingPage() {
  return (
    <div>
        <Navbar></Navbar>
        <CategoryHeader category='Oversized T-shirts'></CategoryHeader>

        <div className='product-card-collection'>
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
