import React from 'react'
import Imgdes from './Imgdes'
import './bestseller.css'

export default function Bestseller() {
  return (
    <>
      <div className="container-bestseller">
        <p>Bestsellers</p>
    </div>
      <div className="carousel-cards">
        <Imgdes/>
        <Imgdes />
        <Imgdes />
      </div>
    </>
  )
}
