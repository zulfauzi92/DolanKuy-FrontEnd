import React, {Component} from 'react';
import {
    Row,
    Col,
  } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Error(){ 
    return (
        <>
        <PanelHeader></PanelHeader>
        <div className="content">
        <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Col md={8} xs={12}>
                <a>
                    <img
                        style={{maxHeight:'600px'}}
                        alt="..."
                        className="avatar border-gray"
                        src={require("assets/img/login-01.png")}
                    />
                </a>
            </Col>
        </Row>
        </div>
        </>
    );
}

export default Error;