import React from 'react';
import Photo from './Photo';

const Contact = () => {
    return ( 

        <>
            <Photo/>
            <div className="uno">
                <div className = " bg-white rounded mt-4 ml-3 uno1">
                    <div className = "text-center">
                        <h1 className = "display-4 d-inline-block mr-4 mt-4 text-secondary">Con<b>tact</b></h1>
                      
                        <hr className = "bg-black"/>
                        
                        <div className = "container mt-5">
                            <div className = "row">
                                <div className = "col-md-3 text-center">
                                    <h5>Subject</h5>
                                </div>
                                <div className = "col-md-9">
                                    <input/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;