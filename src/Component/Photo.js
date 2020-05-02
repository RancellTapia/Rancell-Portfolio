import React from 'react';
import pic from './rancell.jpg';

const Photo = () => {
    return ( 
       
        //Foto de about
        <div className = "  mt-4  bg-dark" >
            <img src = {pic} 
                className = "rounded border border-white image"
                alt = ""
            />  
        </div>
     );
}
 
export default Photo;
