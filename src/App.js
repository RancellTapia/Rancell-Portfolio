import React, { useState } from "react";
import "./App.css";
import Navbar from "../src/Component/Navbar";
import Aboutme from "../src/Component/Aboutme";
import Footer from "../src/Component/Footer";
import Contact from "../src/Component/Contact";



function App() {

  const [ componentName, setComponentName ] = useState('about');

  console.log(componentName);

  
  return (

      <>
{/* 
        <div className="container1 bg-primary">
          <Navbar 
            setComponentName = {setComponentName}
          />
          <div className="net">
            <Socialnet />
          </div>
        </div> */}

        <Navbar 
            setComponentName = {setComponentName}
          />

        { componentName  === "about" && <Aboutme />}
        { componentName  === "contact" && <Contact />}
        { componentName  === "stack" && <Aboutme />}
        { componentName  === "pricing" && <Aboutme />}

        <Footer />
      </>

  );
}

export default App;
