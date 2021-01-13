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

function Register(){ 
    const history = useHistory();
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const onRegister = () => {
        console.log("masuk submit");
        axios.post(`${baseURL}register`, {
            name,
            email,
            password,
        })
        .then((res) => {
            console.log(res);
            console.log(res.token);
            history.push('/layouts/login')
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
                                src={require("assets/img/login-02.png")}
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
                                    <h2 className="title" style={{textAlign:"center"}}>Register</h2>
                                    <form>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Name</label>
                                            <input type="email" className="form-control" placeholder="Masukan Nama kamu" onChange={(e) => setName(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputEmail1">Email</label>
                                            <input type="email" className="form-control" placeholder="Masukan Email kamu" onChange={(e) => setEmail(e.target.value)}  required/>
                                        </div>
                                        <div className="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Masukan Password kamu" />
                                        </div>  
                                    </form>
                                    <br/>
                                    <Button type="submit" class="btn btn-primary btn-lg" onClick={onRegister} block>
                                    Register
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

export default Register;