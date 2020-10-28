import React from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import {Button, Alert, Row, Col} from 'react-bootstrap';
import LeftSide from "./Components/LeftSide";
import Menu from "./Components/Menu";
import RightSide from "./Components/RightSide";

function App() {
  return (
    <div className="App">
      <Menu />
      <Row className="landing">
        <Col ><LeftSide /></Col>
        
        <Col ><RightSide /></Col>
      </Row>
    </div>
  );
}

export default App;