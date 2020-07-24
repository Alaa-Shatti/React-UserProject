import React from 'react'
import propTypes from "prop-types";
import {Link} from "react-router-dom";

const Navbar = ({title}) => {
    return (
        <nav className = "navbar-nav navbar-expand-lg navbar-dark bg-dark mb-3 p-3">
            <a href = "/" className = " navbar-brand">{title}</a>
            <ul className = "navbar-nav ml-auto">
                <li className = "nav-item active mr-3">
                    <Link to = "/" className = "nav=link text-light">Home</Link>
                </li>
                <li className = "nav-item active mr-3">
                    <Link to = "/add" className = "nav=link text-light">Add User</Link>
                </li>
                <li className = "nav-item active mr-3">
                    <Link to = "/github" className = "nav=link text-light">Project Files</Link>
                </li>
            </ul>
        </nav>
        // <div>
        //     <h3>{title}</h3>
        //     <ul>
        //         <li>
        //             <Link to = "/">Home</Link>
        //         </li>
        //         <li>
        //             <Link to = "/add">Add User</Link>
        //         </li>
        //         <li>
        //             <Link to = "/github">Project Files</Link>
        //         </li>
        //     </ul>
        // </div>
    )
}
Navbar.propTypes = {

    title : propTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}

export default Navbar;
