import React, {useState} from 'react';
import letters from './letters.jpg';
import {sendMessage} from '../service/contact.service';

const Contact = () => {

    const [message, setMessage] = useState({
        'name': '',
        'email': '',
        'mail': '' 
    
        });

    const onSubmitMessage = async (e) => {
        e.preventDefault();

        try {
          const {data} = await sendMessage(message)
          window.alert("the message was successfully sent")

        } catch (error) {
            
            console.log(error);
        }
        
    }

    const handleInputOnchange = event => {
        setMessage({
           ...message,
           [event.target.name]:event.target.value
        })
    }

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

                            <form
                                onSubmit = {onSubmitMessage}
                            >
                                <div className = "container">
                                    <div className = "form-group">
                                        <label className = "font-body">Full Name</label>
                                        <input 
                                            className = "form-control" 
                                            id = "name" 
                                            placeholder = "Your Full Name"
                                            style = {{width: "40%"}}
                                            value = {message.name}
                                            name = "name"
                                            onChange={handleInputOnchange}
                                            required
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
                                            value = {message.email}
                                            name = "email"
                                            onChange={handleInputOnchange}
                                            required
                                        />
                                    </div>

                                    <div className = "form-group">
                                        <textarea 
                                            className = "form-control" 
                                            rows = "5" 
                                            placeholder = "Your message"
                                            value = {message.mail}
                                            name = "mail"
                                            onChange={handleInputOnchange}
                                            required
                                        />
                                    </div>

                                    <div className = "form-group">
                                        <button type="submit" className="btn btn-primary">Send Email</button>  
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