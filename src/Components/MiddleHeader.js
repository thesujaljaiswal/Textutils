import React from 'react'
import './MiddleHeader.css'
import PropTypes from 'prop-types'

export default function MiddleHeader(props) {

  return (
    <div>
        <div className='header-outer-div'>

            <div className='header-title'><h2>{props.heading}</h2></div>

            <div className='header-description'>
                <div><p>{props.description}</p></div>
                <div><img src='heart.png'></img></div>
            </div>

        </div>
    </div>
  )
}
