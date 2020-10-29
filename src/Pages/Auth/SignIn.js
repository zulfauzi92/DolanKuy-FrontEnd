import React from 'react';
import './Auth.css';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col, Form, Button} from 'react-bootstrap';
import LeftSide from "./LeftSide";
import NavbarTop from "../../Components/NavbarTop";

function SignIn() {
    return (
      <div className="App">
        <NavbarTop />
        <Row className="landing">
            <Col ><LeftSide /></Col>
            <Col ><br/>
                <br/>
                <br/>
                <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
                    <Form.Group>
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" />
                    </Form.Group>
                    <br/>
                    <Button variant="primary" size="md" block>
                        Block level button
                    </Button>
                </Form>
            </Col>
        </Row>
      </div>
    );
}

export default SignIn;