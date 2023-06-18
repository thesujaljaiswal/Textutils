import React from 'react'
import './Cat.css';
import Category from './Category'

export default function Cat() {
  return (
    <>
          <div className="header">
            <h4 className="title">
              CATEGORIES
            </h4>
            <div className='image1 '>
              <Category imgsrc={require("./Hoodie.png")}   altimgname="HOODIES" category="HOODIES"/>
              <Category imgsrc={require("./Long.png")}  altimgname="LONG SLEEVES" category="LONG SLEEVES"/>
            </div>
            <div className='image2'>
              <Category imgsrc={require("./Tee.png")}  altimgname="REGULAR TEES" category="REGULAR TEES"/>
              <Category imgsrc={require("./Over.png")}  altimgname="OVER SIZED T-SHIRT" category="OVER SIZED T-SHIRT"/>
            </div>
            </div>
    </>
    
  )
}
