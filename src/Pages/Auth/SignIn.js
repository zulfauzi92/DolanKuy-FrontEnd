import React from 'react';
import './Auth.css';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col} from 'react-bootstrap';
import LeftSide from "./RightSide";
import NavbarTop from "../../Components/NavbarTop";
import RightSide from "./LeftSide";

function SignIn() {
  return (
    <div className="App">
      <NavbarTop />
      <Row className="landing">
        <Col ><RightSide /></Col>
        <Col ><LeftSide /></Col>
      </Row>
    </div>
  );
}

export default SignIn;