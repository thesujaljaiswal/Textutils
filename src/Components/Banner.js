import React from 'react'
import image from './banner.png'
import './banner.css'
export default function () {
  return (
    <>
    <div className='banner'>
      <img src={image} style={{width: "100%"}} alt="banner image" />
      </div>
    </>
  )
}
