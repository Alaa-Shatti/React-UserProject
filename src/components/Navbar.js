import React from 'react'
import propTypes from "prop-types";
import {Link} from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <ul>
                <li>
                    <Link to = "/">Home</Link>
                </li>
                <li>
                    <Link to = "/add">Add User</Link>
                </li>
            </ul>
        </div>
    )
}
Navbar.propTypes = {

    title : propTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}

export default Navbar;
