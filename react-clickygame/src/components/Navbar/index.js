import React from 'react';
import "./style.css";

function Navbar(props) {
    //The message, score and top Score are being rendered from the App
    return (
        <nav className="navbar navbar-dark bg-warning sticky-top">
            <h3 className="navbar-brand">Memory Game</h3>
            <h3 className="navbar-brand">{props.message}</h3>
         </nav>

    );
}

export default Navbar;