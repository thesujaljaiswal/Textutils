import React from 'react'
import ProductPreview from '../Components/PRODUCT PREVIEW PAGE COMPONENTS/JS FILES/ProductPreview'
import ProductDetails from '../Components/PRODUCT PREVIEW PAGE COMPONENTS/JS FILES/ProductDetails';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './ProductPage.css';

export default function ProductPage() {
  return (
    <>

        <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS'></Navbar>

        <div className="outer_div">
            
            <div className='product_image_div'>
                <ProductPreview></ProductPreview>
            </div>

            <div>
                <ProductDetails></ProductDetails>
            </div>
        </div>
        <Footer/>
    </>
  )
}
