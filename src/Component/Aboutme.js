import React from 'react';
import Photo from './Photo';

const Aboutme = () => {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-xl-6 col-lg-12 test">
                    <Photo/>
                </div>

                <div className = "col-xl-6 col-lg-12 test">
                    <div className = "bg-light rounded ml-4 mt-4" style= {{height: "600px"}}>
                        <div className = "mt-4">
                            <h1 className = "text-center mt-4">
                                About Me
                            </h1>
                            <hr className = "bg-black"/>
                        </div>
                    </div> 
                </div>
            </div>
            
            {/* <div className="uno">
                <div className = " bg-white rounded mt-4 ml-3 uno1">
                    <div className = "text-center">
                        <h1 className = "display-4 d-inline-block mr-4 text-secondary">About </h1>
                        <h1 className = "display-3 d-inline-block mt-2"><b> Me</b></h1>
                        <hr className = "bg-black"/>

                        <div className = "ml-3">
                            <h4 className = "text-justify ">My name is Rancell Tapia</h4>
                        </div>
                    
                    </div>
                </div>
            </div> */}
        </div>  
      );
}
 
export default Aboutme;