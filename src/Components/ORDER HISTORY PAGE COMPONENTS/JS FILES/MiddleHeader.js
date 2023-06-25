import React from 'react'
import '../CSS FILES/MiddleHeader.css'

export default function MiddleHeader(props) {

  return (
    <>
        <div className='header-outer-div'>

            <div className='header-title'><h2>{props.heading}</h2></div>

            <div className='header-description'>
                <div><p>{props.description}</p></div>
                <div>❤️</div>
            </div>

        </div>
    </>
  )
}
