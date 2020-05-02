import React from 'react';
import letters from './letters.jpg';

const Contact = () => {
    return ( 

        <div className = "container">
            <div className = "ml-4 mr-4">
                <div className = "row">
                    <div className = "col-xl-12  col-lg-12 col-md-12 col-sm-12 mt-4">
                        <img src = {letters} 
                            className = "rounded border border-white letters"
                            alt = ""
                        />  
                    </div>

                    <div className = "col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                        <div className = "bg-light rounded  mt-4"> 
                            <hr/>
                            <h1 className = " ml-3 mt-4 font-title"> Contact us </h1>
                            <hr className = "bg-black"/>

                            <form>
                                <div className = "container">
                                    <div className = "form-group">
                                        <label className = "font-body">Full Name</label>
                                        <input 
                                            type = "name" 
                                            className = "form-control" 
                                            id = "name" 
                                            placeholder = "Your Full Name"
                                            style = {{width: "40%"}}
                                        />
                                    </div>

                                    <div className = "form-group">
                                        <label className = "font-body">Email</label>
                                        <input
                                            type = "email"
                                            className = "form-control"
                                            id = "email"
                                            placeholder = "name@example.com"
                                            style = {{width: "40%"}}
                                        />
                                    </div>

                                    <div className = "form-group">
                                        <textarea className = "form-control" rows = "5" placeholder = "Your message"/>
                                    </div>

                                    <div className = "form-group">
                                        <button type="button" class="btn btn-primary">Send Email</button>  
                                    </div>

                                    <hr/>
                                </div>
                            </form>
                        </div> 
                    </div>
                </div>
            </div>
           
        </div> 
     );
}
 
export default Contact;