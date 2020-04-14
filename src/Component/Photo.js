import React from 'react';
import pic from './rancell.JPG';

const Photo = () => {
    return ( 

        <div className = "mr-5 mb-3">
            <div className = "bg-dark d-inline-block" >
                <div className = "col-md-20" >
                    <div className = "card mt-4">
                        <img src = {pic}  height = "618px"/>
                    </div>
                </div>
            </div>
        </div>     
     );
}
 
export default Photo;