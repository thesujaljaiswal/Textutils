import React, { useState } from 'react';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Gender_Store from './Components/Gender_Store';
import Videocard from './Components/Videocard';
import NightModeToggle from './Components/NightModeToggle';
import Cat from './Components/Cat';

function App(props) {

  
  // Defining a boolean state which will be used to know the status of the mode
  const [isNightMode, setIsNightMode] = useState(false);


  const handleToggle = () => {
    setIsNightMode(!isNightMode);
  };

  // for shadow animation 
  return (
    <>
      <Navbar/>
      <Gender_Store/>
      <NightModeToggle handleToggle={props.handleToggle}/>
      <Cat/>
      <Videocard/>
      <Footer/>
    </>
  );
}

export default App;