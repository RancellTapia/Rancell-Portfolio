import React from 'react';
import './App.css';
import Photo from '../src/Component/Photo';
import Navbar from '../src/Component/Navbar';
import Aboutme from '../src/Component/Aboutme';
import Socialnet from '../src/Component/Socialnet';


function App() {
  return (
    <body>
      {/* <div className = "bg-dark">
        <Navbar/>
      </div>
      <div className = "bg-dark">
        <div className = "container row">
  
            <Socialnet/>
            <Photo/>
            <Aboutme/>
  
        </div>
      </div> */}

      {/* <div className = "bg-dark">
        <Navbar/>
      </div>
      <div className = "bg-dark">
        <div className = "container">
          <div className = "row">  
            <Photo/>

            <div className = "col">
              <Aboutme/>
              <div className = "mb-5">
               <Socialnet/>
              </div>
             
            </div> 
        </div>
        </div>
        
      </div> */}

      <div className = "container1 bg-dark">
        <Navbar/>
        <div className = "net">
          <Socialnet/>
        </div>
      </div>
      
      <div className = "container2 bg-dark">
        <Photo/>
        <Aboutme/>
        
      </div>

      
      
     

      


      
    </body>
  );
}

export default App;
