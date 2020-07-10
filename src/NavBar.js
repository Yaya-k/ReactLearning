import React from 'react';
import './navBar.css';

function toto() {



}

const NavBar=()=> (
    <div className="topnav">
        <a className="active" >Home</a>
        <a onClick={toto}>Hidden</a>
        <a onClick={toto}>Visible</a>
    </div>
);

export default NavBar;