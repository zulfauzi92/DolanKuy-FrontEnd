import React, {Component} from 'react';
import {
    Row,
    Col,
    Button,
  } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import { baseURL } from '../Utils/api';
import axios from "axios";
import Cookies from 'js-cookie';
import { useHistory } from "react-router-dom";
import { isLogin, login } from '../Utils/auth';

function Login(){ 
    const history = useHistory();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);

    React.useEffect(() => {
        if (email || password) {
        setError(false);
        }
        return () => {};
    }, [email, password]);

    const onSubmit = () => {
        console.log("masuk submit");
        axios.post(`${baseURL}login`, {
            email: email,
            password: password,
        })
        .then(function (response) {
        console.log(response.data);

        login(response.data);
        
        history.push("/akomodasi");
        })
        .catch(function (error) {
            setError(true);
        });
    };
    
    return (
        <>
        <PanelHeader></PanelHeader>
        <div className="content">
        <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Col md={11} xs={12}>
                <Row>
                    <Col md={8} xs={12}>
                        <a href="#pablo">
                            <img
                                style={{maxHeight:'600px'}}
                                alt="..."
                                className="avatar border-gray"
                                src={require("assets/img/login-01.png")}
                            />
                        </a>
                    </Col>
                    <Col md={4} xs={12}>
                        <br/>
                        <br/>
                        <br/>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-12">
                                    <h2>Login DolanKuy</h2>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Login</label>
                                            <input type="email" className="form-control" placeholder="Masukan email anda" onChange={(e) => setEmail(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Masukan password anda" />
                                        </div>  
                                    </form>
                                    <Button type="submit" class="btn btn-primary btn-lg" onClick={onSubmit} block>
                                    Submit
                                    </Button>  
                                </div>
                            </div>
                        </div> 
                    </Col>
                </Row>
            </Col>
        </Row>
        </div>
        </>
    );
}

export default Login;