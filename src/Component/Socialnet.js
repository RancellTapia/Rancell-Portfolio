import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa"; 
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
            <a className = "ml-2 mt-2 mb-2 in" href = "#">
                <FaLinkedin/>
            </a>

            <a className = "m-2 mt-2 gh" href = "#">
                <FaGithub /> 
            </a>

            <a className = "m-2 mt-2 tw" href = "#">
                <FaTwitterSquare/> 
            </a>

            <a className = "mt-2 mr-2 ig" href = "#">
                <FaInstagram />
            </a>

        </div>
       
     );
}
 
export default Socialnet;