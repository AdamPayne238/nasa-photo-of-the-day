import React from 'react';
import './Footer.scss';

function Footer(props){
    console.log(props);
    return(

<div className="footer">
    <p className="pFooter">Privacy Policy</p>
    <p className="pFooter">© 2019 All Rights Reserved</p>
    <p className="pFooter">Terms And Conditions</p>
    </div>
    );
}

export default Footer;