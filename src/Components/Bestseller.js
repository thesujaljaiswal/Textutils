import React from 'react'
import Imgdes from './Imgdes'

export default function Bestseller() {
  return (
    <>
      <div className="container-newin">
        <h1>Bestsellers</h1>
    </div>
      <div className="carousel-cards">
        <Imgdes/>
        <Imgdes />
        <Imgdes />
      </div>
    </>
  )
}
