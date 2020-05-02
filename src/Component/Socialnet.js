import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 
import '../App.css';

const Socialnet = () => {
    return ( 
           
        <div className = "btn-toolbar rounded-pill " role = "toolbar"  >
            <a className = "ml-2 mt-2 mb-2 linkedin" href = "#">
                <FaLinkedin/>
            </a>

            <a className = "m-2 mt-2 github" href = "#">
                <FaGithub /> 
            </a>

            <a className = "m-2 mt-2 twitter" href = "#">
                <FaTwitterSquare/> 
            </a>

            <a className = "mt-2 mr-2 instagram" href = "#">
                <FaInstagram />
            </a>

        </div>
       
     );
}
 
export default Socialnet;