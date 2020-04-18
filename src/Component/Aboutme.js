import React from 'react';

const Aboutme = () => {
    return (
        <div className = " bg-white rounded mt-4 mr-3" style = {{height: "440px"}}>
            <div className = "text-center">
                <h1 className = "display-4 d-inline-block mr-4 text-secondary">About </h1>
                <h1 className = "display-3 d-inline-block mt-2"><b> Me</b></h1>
                <hr className = "bg-black"/>

                <div className = "ml-3">
                    <h5 className = "text-justify">My name is Rancell Tapia</h5>
                </div>
                
            </div>
        </div>

       
      );
}
 
export default Aboutme;