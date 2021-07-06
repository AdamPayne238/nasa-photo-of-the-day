import React from 'react';
import "./NavBar.scss";

function NavBar(props){
    console.log(props);
    return(
        <div className="navBar">
            <nav>
                <a href="App.js">App</a>
                <a href="AppTwo.js">AppTwo</a>
                <a href="#">Contact</a>
                <a href="#">Nasa</a>
            </nav>
        </div>
    );
}

export default NavBar;