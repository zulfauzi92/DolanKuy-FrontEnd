import React, {Component} from 'react';
import {
    Row,
    Col,
  } from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function AboutUs(){ 
    return (
        <>
        <PanelHeader></PanelHeader>
        <div className="content">
        <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <Col md="9">
                <Row style={{display: 'flex',  justifyContent:'left', alignItems:'top'}}>
                    <Col md={4} xs={12}>
                        <div class="card" style={{width: '100%'}}>
                        <img class="card-img-top" src={bg1} alt="Card image cap"/>
                        <div class="card-body">
                            <h4 class="card-title" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>{location.name}</h4>
                            <div class="card-text" style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis"}}>
                            {location.description}
                            </div>
                            <Link id="buttonCard" to={`/details/${location.id}`}>
                            <Button id="buttonCard" color="primary" block>Details</Button>
                            </Link>
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

export default AboutUs;