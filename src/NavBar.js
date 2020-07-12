import React from 'react';
import './navBar.css';



const NavBar=(props1)=> (
    <div className="topnav">
        <a className="active" >Home</a>
        <a onClick={() => props1.setLight_mode()}>Light/Dark</a>
        <a onClick={() => props1.hideMessage()}>view/hide hidden message</a>

    </div>
);

export default NavBar;