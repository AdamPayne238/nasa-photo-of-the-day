import React from 'react';
import './Header.scss';

function Header(props){
    console.log(props);
    return(
        <div className="header">
         <h1>Welcome to Nasa! Woo!</h1>
        </div>
    );
}

export default Header;