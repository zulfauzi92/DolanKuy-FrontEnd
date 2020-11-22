import React from 'react';
import './Auth.css';
import "bootstrap/dist/css/bootstrap.css";
import {Row, Col, Form, Button } from 'react-bootstrap';
import LeftSide from "./LeftSide";
import NavbarTop from "../../Components/NavbarTop";
import Axios from 'axios';
import { baseURL } from '../../Utils/api';
import { login } from "../../Utils/auth";
import { useHistory } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();
    const history = useHistory();

    const onLogin = (e) => {
        e.preventDefault();
        Axios.post(`${baseURL}login`, { email: email, password: password })
        .then((res) => {login({token: res.data.token,});
            history.push("/dashboard");
          });
    };

    return (
      <div className="App">
          <NavbarTop/>
        <Row className="landing">
            <Col><LeftSide /></Col>
            <Col xs lg="5">
                <Form style={{width:"60%", marginLeft:"10%", marginTop:"20%"}}>
                <b style={{fontSize:"40pt"}}>Welcome</b>
                <br/>
                <b style={{fontSize:"40pt"}}>Back</b>
                    <Form.Group controlId="formBasicEmail" style={{marginTop:"5%"}}>
                        <Form.Label>Enter your email</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Enter your password</Form.Label>
                        <Form.Control type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}  />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button id="buttonLogIn" variant="basic" type="submit" onClick={onLogin} block>
                        Sign In
                    </Button>
                </Form>
            </Col>
        </Row>
      </div>
    );
}

export default SignIn;