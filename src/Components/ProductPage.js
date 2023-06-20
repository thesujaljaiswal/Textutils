import React from 'react'
import ProductPreview from './ProductPreview'
import ProductDetails from './ProductDetails';
import Navbar from './Navbar';
import './ProductPage.css';

export default function ProductPage() {
  return (
    <div>

        <Navbar></Navbar>

        <div className="outer_div">
            
            <div className='product_image_div'>
                <ProductPreview></ProductPreview>
            </div>

            <div>
                <ProductDetails></ProductDetails>
            </div>
        </div>

    </div>
  )
}
