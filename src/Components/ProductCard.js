import React from 'react'

export default function ProductCard() {
  return (
    <div>

        <div className='product-card'></div>
            <div className="product-image">
                <img src='card_model.png'></img>
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
  )
}
