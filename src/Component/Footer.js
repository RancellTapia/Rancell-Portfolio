import React from 'react';
import { GoLocation} from "react-icons/go"; 


const Footer = () => {
    return (

        <div>
        <div className="ft5">
        <div className = "ft1" >
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" className = "ft2">
                <path d="M0.00,49.98 C149.99,150.00 354.68,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className = "ft4">
                </path>
            </svg>
          
        </div> 
    </div>
        

        <div className="ft0">
            <div className = "ft1" >
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className = "ft2">
                    <path d="M0.00,49.98 C149.99,150.00 354.68,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" className = "ft3">
                    </path>
                </svg>
                <div className="f1">
                <h3 className = "f1 mt-2"> Copyrigh &copy; 2020 - All Righ Reserved. </h3>
                    
                    <a className = "m-2 mt-2 lc" href = "#">
                       <div className = "lc1 lcc"><GoLocation/> </div> 
                       <div > <h6 className = "mr-3 "> Naples, Florida, EE.UU</h6> </div>
                    </a>

                   
                </div>
              
            </div> 
        </div>
        </div>


      );
}
 
export default Footer;