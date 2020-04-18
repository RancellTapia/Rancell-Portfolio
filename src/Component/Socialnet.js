import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IconContext } from "react-icons";
import '../App.css';

const Socialnet = () => {
    return ( 
        // <IconContext.Provider value = {{size:'2rem', color: 'black'}}>
            
        //         <div className = "btn-group-vertical rounded-pill bg-white mt-5 " role = "group" style = {{height: "135px"}}>
        //             <a className = "m-2" href = "#">
        //                 <FaGithub/>
        //             </a>

        //             <a className = "mr-2 ml-2" href = "#">
        //                 <FaTwitterSquare/> 
        //             </a>

        //             <a className = "m-2" href = "#">
        //                 <FaInstagram/>
        //             </a>
           
        //         </div>
        // </IconContext.Provider>


                    
        <div className = "btn-toolbar rounded-pill " role = "toolbar"  >
            <a className = "ml-2 mt-2 mb-2 icon" href = "#">
                <FaLinkedin/>
            </a>

            <a className = "m-2 mt-2 icon" href = "#">
                <FaGithub /> 
            </a>

            <a className = "m-2 mt-2 icon" href = "#">
                <FaTwitterSquare/> 
            </a>

            <a className = "mt-2 mr-2 icon" href = "#">
                <FaInstagram />
            </a>

        </div>
       
     );
}
 
export default Socialnet;