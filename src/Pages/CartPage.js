import React, { useEffect } from 'react'
import CartPagecomp from '../Components/CART PAGE COMPONENTS/JS FILES/CartPagecomp'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function CartPage() {
  useEffect(() => {
    document.title = "Hype - Cart";
  }, []);
  return (
    <>
    <Navbar opt1='MENS' opt2='WOMENS' opt3='KIDS'/>
      <CartPagecomp/>
      <Footer/>
    </>
  )
}
