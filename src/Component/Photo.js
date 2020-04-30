import React from 'react';
import pic from './rancell.jpg';

const Photo = () => {
    return ( 
       
        //Foto de about
        <div className = " col-md-6 mt-4 ml-2 bg-dark" >
            <img src = {pic} 
                className = "img-responsive rounded border border-white"
                style = {{width: "520px"}}
                alt = "Responsive image"
            />  
        </div>
     );
}
 
export default Photo;
