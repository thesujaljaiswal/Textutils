import React from 'react'
import './ProductPreview.css'

export default function ProductPreview() {
  return (
    <div>
        {/* Outer Div Of Product Image */}
        <div className='product_image_div'>
            
            {/* First image of product */}
            <div className='product-main-image'><img src='model1.jpg'></img></div>

            {/* Div holding grid of images */}
            <div className="product_image_grid_div">

                <div className='product_image_grid'>
                    <div className='grid_f'><img src='model2.webp'></img></div>
                    <div><img src='model3.webp'></img></div>
                </div>
                
                <div className='product_image_grid'>
                    <div className='grid_f'><img src='model4.webp'></img></div>
                    <div><img src='model5.webp'></img></div>
                </div>
                
            </div>

            {/* Last image of the product */}
            <div>
                <img src='model2.webp'></img>
            </div>

        </div>

    </div>
  )
}



