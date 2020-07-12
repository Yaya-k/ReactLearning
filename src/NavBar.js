import React from 'react';
import './style/navBar.css';



const NavBar=(props)=> (
    <div className="topnav">
        <button type="button" className="btn btn-success"  disabled>Home</button>
        <button type="button" className="btn btn-secondary" onClick={() => props.setLight_mode()}>Light/Dark</button>
        <button type="button" className="btn btn-secondary" onClick={() => props.hideMessage()}>View/Hide hidden message</button>



    </div>
);

export default NavBar;