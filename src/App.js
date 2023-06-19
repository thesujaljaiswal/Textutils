import React, { useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Gender_Store from './Components/Gender_Store';
import Videocard from './Components/Videocard';
import NightModeToggle from './Components/NightModeToggle';
import Cat from './Components/Cat';
import Banner from './Components/Banner';
import Newin from './Components/Newin';
import Bestseller from './Components/Bestseller';

function App(props) {
  return (
    <>
      <Navbar/>
      <Banner/>
      <NightModeToggle/>
      <Gender_Store/>
      <Cat/>
      <Videocard/>
      <Newin/>
      <Bestseller/>
      <Footer/>
    </>
  );
}

export default App;