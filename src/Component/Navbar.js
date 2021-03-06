import React from 'react';
import Socialnet from "./Socialnet";
import "../App.css";


const Navbar = ({setComponentName}) => {


    return ( 
        // <div className = "container">
            // <nav 
            //     className = "navbar navbar-warning bg-success"
            // >
            //     <nav 
            //         className = "navbar navbar-expand-lg navbar-light bg-dark"
            //     >
            //     <a 
            //         className = "navbar-brand nv1" 
            //         onClick = { () => setComponentName("about") }
            //     >About Me</a>
            //     <button 
            //         className = "navbar-toggler" 
            //         type = "button" 
            //         data-toggle = "collapse" 
            //         data-target = "#navbarNav" 
            //         aria-controls = "navbarNav" 
            //         aria-expanded = "false" 
            //         aria-label = "Toggle navigation"
                    
            //     >
            //         <span 
            //             className = "navbar-toggler-icon"
            //         ></span>
            //     </button>
            //     <div 
            //         className = "collapse navbar-collapse" 
            //         id = "navbarNav"
            //     >
            //         <ul className = "navbar-nav">
            //         <li className = "nav-item active">
            //             <a className = "nav-link nv2" onClick = { () => setComponentName("contact") } >Contact <span className="sr-only">(current)</span></a>
            //         </li>
            //         <li className = "nav-item">
            //             <a className = "nav-link nv3" onClick = { () => setComponentName("stack") }  >Stack</a>
            //         </li>
            //         <li className = "nav-item">
            //             <a className = "nav-link nv4" onClick = { () => setComponentName("pricing") }  >Pricing</a>
            //         </li>
            //         </ul>
            //     </div>
            //     </nav>
            // </nav>
        // </div>

        <div className = "container">
            <div className = "bg-white ml-0">
                <div className = "bg-dark">
                    <nav 
                        className = "navbar  navbar-light"
                    >
                        <nav 
                            className = "navbar navbar-expand-lg navbar-light bg-dark"
                        >
                        <a 
                            className = "navbar-brand text-light" 
                            style = {{fontSize: "30px"}} 
                            onClick = { () => setComponentName("about") }
                        >About Me</a>
                        <button 
                            className = "navbar-toggler" 
                            type = "button" 
                            data-toggle = "collapse" 
                            data-target = "#navbarNav" 
                            aria-controls = "navbarNav" 
                            aria-expanded = "false" 
                            aria-label = "Toggle navigation"  
                        >
                            <span 
                                className = "navbar-toggler-icon"
                            ></span>
                        </button>
                        <div 
                            className = "collapse navbar-collapse" 
                            id = "navbarNav"
                        >
                            <ul className = "navbar-nav">
                            <li className = "nav-item active">
                                <a 
                                    className = "nav-link text-light mt-1" 
                                    style = {{fontSize: "28px"}} 
                                    onClick = { () => setComponentName("contact") } 
                                >Contact <span className="sr-only">(current)</span></a>
                            </li>
                            <li className = "nav-item">
                                <a 
                                    className = "nav-link text-light mt-1" 
                                    style = {{fontSize: "28px"}} 
                                    onClick = { () => setComponentName("stack") }  
                                >Stack</a>
                            </li>
                            <li className = "nav-item">
                                <a 
                                    className = "nav-link text-light mt-2" 
                                    style = {{fontSize: "25px"}} 
                                    onClick = { () => setComponentName("pricing") }  
                                >Pricing</a>
                            </li>
                            </ul>
                        </div>
                        </nav>

                        <div className = "nav">
                            <Socialnet/>
                        </div>
                    </nav>
                </div>      
            </div>
        </div>
       
     );
}
 
export default Navbar;