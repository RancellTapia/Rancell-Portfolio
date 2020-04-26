import React, { useState } from "react";
import "./App.css";
import Navbar from "../src/Component/Navbar";
import Aboutme from "../src/Component/Aboutme";
import Socialnet from "../src/Component/Socialnet";
import Footer from "../src/Component/Footer";
import Contact from "../src/Component/Contact";



function App() {

  const [ componentName, setComponentName ] = useState('about');

  console.log(componentName);

  
  return (

      <>
        <div className="container1 bg-dark">
          <Navbar 
            setComponentName = {setComponentName}
          />
          <div className="net">
            <Socialnet />
          </div>
        </div>

        <div className="container2 bg-dark">
       
          { componentName  === "about" && <Aboutme />}

        </div>

        <Footer />
      </>

  );
}

export default App;
