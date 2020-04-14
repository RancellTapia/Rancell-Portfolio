import React from 'react';
import Photo from '../src/Component/Photo';
import Navbar from '../src/Component/Navbar';
import Aboutme from '../src/Component/Aboutme';
import Socialnet from '../src/Component/Socialnet';


function App() {
  return (
    <>
      <div className = "bg-dark">
        <Navbar/>
      </div>
      <div className = "bg-dark">
        <div className = "container row">
  
            <Socialnet/>
            <Photo/>
            <Aboutme/>
  
        </div>
      </div>

      


      
    </>
  );
}

export default App;
