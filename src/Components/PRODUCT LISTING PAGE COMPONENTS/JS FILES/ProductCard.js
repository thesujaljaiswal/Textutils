import React from 'react'
import '../CSS FILES/ProductCard.css'
import modelimg from '../IMAGES/card_model.png'

export default function ProductCard() {
  return (
    <>

        <div className='product-card'>
            <div className="product-image">
                <img src={modelimg} alt='model'></img>
            </div>

            <div className="product-details">
                <div className="product-name">
                    <p>Wide twill trousers</p>
                </div>

                <div className="product-price">
                    <p>Rs. 1,299.00</p>
                </div>

            </div>
            </div>

    </>
  )
}
