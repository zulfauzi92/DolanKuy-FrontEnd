import React from 'react';
import {Image} from "react-bootstrap";
import Logo from '../../Components/Gallery/contoh.jpg'

const LeftSide = () => {
    return (
        <div>  
          <img src={Logo} id="logo"></img>
        </div>
    )
}

export default LeftSide;