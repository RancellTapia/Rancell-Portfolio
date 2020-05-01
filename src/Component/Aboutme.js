import React from 'react';
import Photo from './Photo';

const Aboutme = () => {
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-xl-6 col-lg-12">
                    <Photo/>
                </div>

                <div className = "col-xl-6 col-lg-12">
                    <div className = "bg-light rounded ml-4 mt-4" style= {{height: "600px"}}> 
                        <hr/>
                        <h1 className = " ml-3 mt-4 font-title"> How is me? </h1>
                        <hr className = "bg-black"/>

                        <div className = "ml-4 mt-4 mr-5">
                            <p className = "font-body text-monospace"> My name is Rancell Tapia, I am from a small island in the Caribbean, called the Dominican Republic.</p>
                            <p className = "font-body text-monospace mt-4"> I'm a mechatronic engineer, lover of technology, software development,3D printing, robotics and automation.</p>
                            <p className = "font-body text-monospace mt-4"> I like endurance sports like running and triathlon. I did my first marathon in September 2018.</p>
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