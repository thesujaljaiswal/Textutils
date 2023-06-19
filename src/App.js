import React from 'react';
import Navbar from './Components/LANDING PAGE COMPONENTS/JS FILES/Navbar';
import Footer from './Components/LANDING PAGE COMPONENTS/JS FILES/Footer';
import GenderStore from './Components/LANDING PAGE COMPONENTS/JS FILES/GenderStore';
import Videocard from './Components/LANDING PAGE COMPONENTS/JS FILES/Videocard';
import NightModeToggle from './Components/LANDING PAGE COMPONENTS/JS FILES/NightModeToggle';
import Cat from './Components/LANDING PAGE COMPONENTS/JS FILES/Cat';
import Banner from './Components/LANDING PAGE COMPONENTS/JS FILES/Banner';
import Newin from './Components/LANDING PAGE COMPONENTS/JS FILES/Newin';
import Bestseller from './Components/LANDING PAGE COMPONENTS/JS FILES/Bestseller';

function App(props) {
  return (
    <>
      <Navbar/>
      <Banner/>
      <NightModeToggle/>
      <GenderStore/>
      <Cat/>
      <Videocard/>
      <Newin/>
      <Bestseller/>
      <Footer/>
    </>
  );
}

export default App;