import React from 'react'
import './OrderHistoryCard.css'

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
                        <div><img src="white_tshirt.png"></img></div>
                    </div>

                    {/* Holds order items title and main buttons */}
                    <div className="order-item-name-button">

                        {/* Holds the title */}
                        <div><p>White cotton sweatshirt</p></div>

                        {/* Holds the buy again and view item buttons */}
                        <div className="order-item-name-button-buttons">
                            <div className='buy-again-button'><a>Buy Again</a></div>
                            <div className='view-item-button'><a>View this item</a></div>
                        </div>
                    </div>
                </div>


                {/* Holds the buttons for the product */}
                <div className="order-item-buttons">
                    <div className='rate-product-button'><a>Rate the product</a></div>
                    <div className='feedback-button'><a>Leave a feedback</a></div>
                    <div className='report-issue-button'><a>Report an issue</a></div>
                    <div className='invoice-button'><a>Download order invoice</a></div>
                </div>


            </div>

        </div>



        
  
  )
}
