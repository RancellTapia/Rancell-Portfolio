import React from 'react';
import pic from './rancell.JPG';

const Photo = () => {
    return ( 
        <div className = "col-md-20" >
            <div className = "card m-4 shadow">
                <img src = {pic}  height = "624px"/>
            </div>
        </div>

        
     
     );
}
 
export default Photo;