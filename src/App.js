import React from 'react';
import Photo from '../src/Component/Photo';
import Navbar from '../src/Component/Navbar';
import Aboutme from '../src/Component/Aboutme';

function App() {
  return (
    <>
      <div className = "bg-dark">
        <Navbar/>
      </div>

      <div className = "bg-dark">
        <div className = "container">
          <div className = "row">
            <div className = "mr-5 mb-3">
              <div className = "bg-dark d-inline-block" >
                <Photo/>
              </div>
            </div>
            
            <Aboutme/>
             
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
