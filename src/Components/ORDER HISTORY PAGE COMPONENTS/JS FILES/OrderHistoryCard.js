import React from 'react'
import '../CSS FILES/OrderHistoryCard.css'
import img from '../IMAGE/white_tshirt.png'

export default function OrderHistoryCard() {
  return (
        <div>
            {/* Represents an order item */}
            <div className="order-item">

                {/* Holds the product information */}
                <div className="order-item-information">

                    {/* Holds the date and image of product */}
                    <div className="order-item-date-image">
                        <div><p>Delivered 22-April-2023</p></div>
                        <div><img src={img} alt='cloth'></img></div>
                    </div>

                    {/* Holds order items title and main buttons */}
                    <div className="order-item-name-button">

                        {/* Holds the title */}
                        <div><p>White cotton sweatshirt</p></div>

                        {/* Holds the buy again and view item buttons */}
                        <div className="order-item-name-button-buttons">
                            <div className='buy-again-button'><a href="/">Buy Again</a></div>
                            <div className='view-item-button'><a href="/">View this item</a></div>
                        </div>
                    </div>
                </div>


                {/* Holds the buttons for the product */}
                <div className="order-item-buttons">
                <a href="/"><div className='rate-product-button'>Rate the product</div></a>
                <a href="/"><div className='feedback-button'>Leave a feedback</div></a>
                <a href="/"><div className='report-issue-button'>Report an issue</div></a>
                <a href="/"><div className='invoice-button'>Download order invoice</div></a>
                </div>


            </div>

        </div>



        
  
  )
}
