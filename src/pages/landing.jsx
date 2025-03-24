import React from 'react';


import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

import Value from "../components/Value/Value";

function Landing() {
    return (
      
        <div className="App">
        <div>
          <div className="white-gradient" />
          <Header />
          <Hero />
        </div>
      
       
        <Value/>
        
        <GetStarted/>
     
      </div>
    );
  }
  
  export default Landing;