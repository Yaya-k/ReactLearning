import React from 'react';
import './style/navBar.css';



const NavBar=(props)=> (
    <div className="topnav">
        <a className="active" >Home</a>
        <a onClick={() => props.setLight_mode()}>Light/Dark</a>
        <a onClick={() => props.hideMessage()}>View/Hide hidden message</a>



    </div>
);

export default NavBar;