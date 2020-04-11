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

     {/* <div className = "bg-dark">
      <div className = "bg-dark d-inline-block" >
          <Photo/>
        </div>

        <div className = "rounded d-inline-block bg-white sticky-top" style = {{width: "50%"}} >
          <h1>About Me</h1>
          <hr></hr>
        </div>
      </div>  */}

      <div className = "bg-dark">
        <div className = "container">
          <div className = "row">
            <div className = "col-sm">
              <div className = "bg-dark d-inline-block" >
                <Photo/>
              </div>
            </div>

            <div className = "col-sm bg-white rounded m-4">
              <Aboutme/>
            </div>  
          </div>
        </div>
      </div>

    </>


  );
}

export default App;

// width={64}
//       height={64} d-inline-block 
