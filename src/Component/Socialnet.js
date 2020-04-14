import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";

const Socialnet = () => {
    return ( 
        <IconContext.Provider value = {{size:'2rem', color: 'black'}}>
            
                <div className = "btn-group-vertical border rounded-pill bg-white align-self-end m-3" role = "group" style = {{height: "140px"}}>
                    <a className = "m-2" href = "#">
                        <FaGithub/>
                    </a>

                    <a className = "mr-2 ml-2" href = "#">
                        <FaTwitterSquare/> 
                    </a>

                    <a className = "m-2" href = "#">
                        <FaInstagram/>
                    </a>
           
                </div>
        </IconContext.Provider>
     );
}
 
export default Socialnet;