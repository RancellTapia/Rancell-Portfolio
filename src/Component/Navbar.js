import React from 'react';


const Navbar = ({setComponentName}) => {


    return ( 
        <nav 
            className = "navbar navbar-dark bg-dark"
        >
            <nav 
                className = "navbar navbar-expand-lg navbar-light bg-dark"
            >
            <a 
                className = "navbar-brand nv1" 
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
                    <a className = "nav-link nv2" onClick = { () => setComponentName("contact") } >Contact <span className="sr-only">(current)</span></a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link nv3" onClick = { () => setComponentName("stack") }  >Stack</a>
                </li>
                <li className = "nav-item">
                    <a className = "nav-link nv4" onClick = { () => setComponentName("pricing") }  >Pricing</a>
                </li>
                </ul>
            </div>
            </nav>
        </nav>

        
     );
}
 
export default Navbar;