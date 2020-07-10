import React from 'react';
import './navBar.css';

const NavBar=()=> (
    <div className="topnav">
        <a className="active" href="#">Home</a>
        <a href="#">Dark mode</a>
        <a href="#">Hidden</a>
        <a href="#">Visible</a>
    </div>
);

export default NavBar;