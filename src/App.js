import React from 'react';
import './App.css';
import Photo from '../src/Component/Photo';
import Navbar from '../src/Component/Navbar';
import Aboutme from '../src/Component/Aboutme';
import Socialnet from '../src/Component/Socialnet';
import Footer from '../src/Component/Footer';

function App() {
  return (

    <body>
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

      <Footer/> 
    </body>

  );
}

export default App;
